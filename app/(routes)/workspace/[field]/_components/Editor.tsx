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
import Quote from '@editorjs/quote';
//@ts-ignore
import Embed from '@editorjs/embed';
//@ts-ignore
import RawTool from '@editorjs/raw';
//@ts-ignore
import SimpleImage from "@editorjs/simple-image";
//@ts-ignore
import LinkTool from '@editorjs/link';
//@ts-ignore
import ImageTool from '@editorjs/image';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';
import { FILE } from '@/app/(routes)/Dashboard/_Components/FileList';
const rawDocument = {
    "time": 1550476186479,
    "blocks": [{
        data: {
            text: 'Document Name',
            level: 2
        },
        id: "123",
        type: 'header'
    },
    {
        data: {
            level: 4
        },
        id: "1234",
        type: 'header'
    }],
    "version": "2.8.1"
};

function Editor({ onSaveTrigger, fileId, fileData }: { onSaveTrigger: any, fileId: any, fileData: FILE }) {
    const ref = useRef<EditorJS | null>(null);
    const updateDocument = useMutation(api.files.updateDocument)
    const [document, setDocument] = useState(rawDocument);

    useEffect(() => {
        if (!ref.current) {
            fileData && initEditor();
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
                image: SimpleImage,
                // image: {
                //     class: ImageTool,
                //     config: {
                //         endpoints: {
                //             byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                //             byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
                //         }
                //     }
                // },
                quote: {
                    class: Quote,
                    inlineToolbar: true,
                    shortcut: 'CMD+SHIFT+O',
                    config: {
                        quotePlaceholder: 'Enter a quote',
                        captionPlaceholder: 'Quote\'s author',
                    },
                },
                embed: {
                    class: Embed,
                    inlineToolbar: true,
                    config: {
                      services: {
                        youtube: true,
                        coub: true,
                        codepen: {
                          regex: /https?:\/\/codepen.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
                          embedUrl: 'https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2',
                          html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
                          height: 300,
                          width: 600,
                        }
                      }
                    }
                  },
                  raw: RawTool,
            },
            holder: 'editorjs',
            data: fileData.document ? JSON.parse(fileData.document) : rawDocument,
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
