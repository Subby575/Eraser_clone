"use client"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useConvex } from 'convex/react';
import React, { useEffect, useState } from 'react'
import { api } from '@/convex/_generated/api';
import SideNav from './_Components/SideNav';
import { useRouter } from 'next/navigation';
import { FileListContext } from '@/app/_context/FileListContext';
import { Menu } from 'lucide-react'; // You can use any icon library

function Dashboardayout(
    {
        children,
    }: Readonly<{ children: React.ReactNode }>
) {
    const convex = useConvex();
    const router = useRouter();
    const { user }: any = useKindeBrowserClient();
    const [fileList_, setFileList_] = useState();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control side drawer visibility

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
            <FileListContext.Provider value={{ fileList_, setFileList_ }}>
                <div className="flex">
                    <div className={`h-screen w-64 fixed dark:bg-slate-900 transition-transform transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                        <SideNav />
                    </div>
                    <div className="flex-1 ml-64 md:ml-0">
                        <div className="flex md:hidden justify-between p-4 bg-gray-800 text-white">
                            <button onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                                <Menu />
                            </button>
                        </div>
                        <div className="ml-0 md:ml-72">{children}</div>
                    </div>
                </div>
            </FileListContext.Provider>
        </div>
    )
}

export default Dashboardayout;
