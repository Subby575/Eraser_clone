import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import { api } from '@/convex/_generated/api'
import SideNavTopSection from './SideNavTopSection'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { toast } from 'sonner'
import SideNavBottomSection from './SideNavBottomSection'
import { useConvex, useMutation } from 'convex/react'
import { useState } from 'react'
import { TEAM } from './SideNavTopSection'
import { FileListContext } from '@/app/_context/FileListContext'
const SideNav = () => {

    const { user } = useKindeBrowserClient();
    const convex=useConvex();
    const [totalFiles,setTotalFiles]=useState<Number>()
    const [activeTeam, setActiveTeam] = useState<TEAM>();
    const createFile = useMutation(api.files.createFile)
    const {fileList_,setFileList_}=useContext(FileListContext)
    useEffect(()=>{
        activeTeam&&getFiles();
    },[activeTeam])


    const onFileCreate = (fileName: string) => {
        console.log(fileName)
        createFile({
            fileName: fileName,
            teamId: activeTeam?._id ?? '',
            createdBy: user?.email ?? '',
            archive: false,
            document: '',
            whiteboard: ''
        }).then(resp => {
            if (resp) {
                getFiles();
                toast('File created successfully')
            }
            
        },(e)=>{
            toast('Error creating file')
        
        })
    }

    const getFiles=async()=>{
        const result=await convex.query(api.files.getFiles,{teamId:activeTeam?._id ?? ''});
        // console.log(result)
        setTotalFiles(result?.length)
        setFileList_(result)
    }


    return (



        <div className=' h-screen fixed bg-gray-50 dark:bg-gray-800 w-72 border-r p-6 border-[1px] flex flex-col'>
            <div className='flex-1'>
                <SideNavTopSection user={user}
                    setActiveTeamInfo={(activeTeam: TEAM) => setActiveTeam(activeTeam)}
                />

            </div>
            <div>
                <SideNavBottomSection
                totalFiles={totalFiles}
                onFileCreate={onFileCreate} />
            </div>


        </div>
    )
}

export default SideNav