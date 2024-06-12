"use client"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useConvex } from 'convex/react';
import React, { useEffect, useState } from 'react'
import { api } from '@/convex/_generated/api';
import SideNav from './_Components/SideNav';
import { useRouter } from 'next/navigation';
import { FileListContext } from '@/app/_context/FileListContext';
function Dashboardayout(
    {
        children,
    }: Readonly<{ children: React.ReactNode }>
) {
    const convex = useConvex();
    const router = useRouter();
    const { user }: any = useKindeBrowserClient();
    const [fileList_,setFileList_]=useState();
    useEffect(() => {
        user && checkTeam();
    }, [user])

    const checkTeam = async () => {
        const result = await convex.query(api.teams.getTeam, { email: user?.email })
        if (!result?.length) {
            router.push('teams/create')
            // console.log('No team found')

        }
    }
    return (
        <div>
            <FileListContext.Provider value={{fileList_,setFileList_}}>
            <div className='grid grid-cols-4'>
                <div className='h-screen w-64 fixed'>
                    <SideNav />

                </div>
                <div className='col-span-4 ml-72'> {children}</div>
            </div>

            </FileListContext.Provider>

        </div>
    )
}

export default Dashboardayout