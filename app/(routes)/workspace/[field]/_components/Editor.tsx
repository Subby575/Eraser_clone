"use client";
import React, { useEffect, useRef, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
//@ts-ignore
import Header from '@editorjs/header';
//@ts-ignore
import List from "@editorjs/list";
//@ts-ignore
import Checklist from '@editorjs/checklist';
//@ts-ignore
import ImageTool from '@editorjs/image';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';
import { FILE } from '@/app/(routes)/Dashboard/_Components/FileList';
const rawDocument={
    "time" : 1550476186479,
    "blocks" : [{
        data:{
            text:'Document Name',
            level:2
        },
        id:"123",
        type:'header'
    },
    {
        data:{
            level:4
        },
        id:"1234",
        type:'header'
    }],
    "version" : "2.8.1"
}; 

function Editor({ onSaveTrigger, fileId,fileData }: {onSaveTrigger:any,fileId:any,fileData:FILE}) {
    const ref = useRef<EditorJS | null>(null);
    const updateDocument = useMutation(api.files.updateDocument)
    const [document, setDocument] = useState(rawDocument);

    useEffect(() => {
        if (!ref.current) {
            fileData&&initEditor();
        }

        return () => {
            if (ref.current && ref.current.destroy) {
                ref.current.destroy();
            }
        };
    }, [fileData]);

    useEffect(() => {
        if (onSaveTrigger) {
            onSaveDocument();
        }
    }, [onSaveTrigger]);

    const initEditor = () => {
        const editor = new EditorJS({
            tools: {
                header: {
                    class: Header,
                    shortcut: 'CMD+SHIFT+H',
                    config: {
                        placeholder: 'Enter a Header',
                    }
                },
                list: {
                    class: List,
                    inlineToolbar: true,
                    config: {
                        defaultStyle: 'unordered'
                    }
                },
                checklist: {
                    class: Checklist,
                    inlineToolbar: true,
                },
                image: {
                    class: ImageTool,
                    config: {
                        endpoints: {
                            byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                            byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
                        }
                    }
                }
            },
            holder: 'editorjs',
            data: fileData.document?JSON.parse(fileData.document):rawDocument,
            onReady: () => {
                ref.current = editor;
            }
        });
    };

    const onSaveDocument = () => {
        if (ref.current) {
            ref.current.save().then((outputData) => {
                console.log('Article data: ', outputData);
                updateDocument({
                    _id: fileId,
                    document: JSON.stringify(outputData)
                }).then(resp => {

                    toast('Document Updated')
                }, (e) => {
                    toast("Server Error")
                })

            }).catch((error) => {
                console.log('Saving failed: ', error);
            });
        }
    };

    return (
        <div>
            <div id="editorjs" className='ml-20'></div>
        </div>
    );
}

export default Editor;
