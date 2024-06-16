"use client"
import React, { useEffect } from 'react'
import WorkspaceHeader from './_components/WorkspaceHeader'
import Editor from './_components/Editor'
import { useState } from 'react';
import { useConvex } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { FILE } from '../../Dashboard/_Components/FileList';
import Canvas from './_components/Canvas';
function workspace({ params }: any) {
    const [triggersave, setTriggerSave] = useState(false);
    const convex=useConvex();
    const [fileData,setFileData]=useState<FILE | any>();
    useEffect(()=>{
        params.field&&getFileData();
    },[])

    const getFileData=async()=>{
        const result=await convex.query(api.files.getFileById,{_id:params.field})
        setFileData(result)
        // console.log(result)
    }
    return (
        <div>
            <WorkspaceHeader onSave={() => setTriggerSave(!triggersave)} fileData={fileData}  />
            {/* Workspace layout */}
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {/* Document */}
                <div className=' h-screen'>
                    <Editor onSaveTrigger={triggersave} fileId={params.field} fileData={fileData} />
                </div>
                {/* Whiteboard Canvas */}
                <div className='h-screen border-l'>
                <Canvas onSaveTrigger={triggersave} fileId={params.field} fileData={fileData} />
                </div>
            </div>
        </div>
    )
}

export default workspace