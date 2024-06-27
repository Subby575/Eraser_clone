"use client"
import React, { useEffect, useState } from 'react';
import WorkspaceHeader from './_components/WorkspaceHeader';
import Editor from './_components/Editor';
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { FILE } from '../../Dashboard/_Components/FileList';
import Canvas from './_components/Canvas';
import Split from 'react-split';

function Workspace({ params, darkMode }: { params: any, darkMode: boolean }) {
    const [triggersave, setTriggerSave] = useState(false);
    const convex = useConvex();
    const [fileData, setFileData] = useState<FILE | any>();

    useEffect(() => {
        params.field && getFileData();
    }, []);

    const getFileData = async () => {
        const result = await convex.query(api.files.getFileById, { _id: params.field });
        setFileData(result);
    };

    return (
        <div className="h-screen flex flex-col">
            <WorkspaceHeader onSave={() => setTriggerSave(!triggersave)} fileData={fileData} />
            <Split className="flex-grow flex" sizes={[50, 50]} minSize={200} gutterSize={10}>
                <div className='flex-grow h-full'>
                    <Editor onSaveTrigger={triggersave} fileId={params.field} fileData={fileData} />
                </div>
                <div className='flex-grow h-full border-l'>
                    <Canvas onSaveTrigger={triggersave} fileId={params.field} fileData={fileData}  />
                </div>
            </Split>
        </div>
    );
}

export default Workspace;
