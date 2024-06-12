"use client"
import { FileListContext } from '@/app/_context/FileListContext'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import moment from 'moment'
import React, { useContext, useEffect, useState } from 'react'
import { Archive, MoreHorizontal} from 'lucide-react'
import { useRouter } from 'next/navigation'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export interface FILE {
    archive: boolean,
    createdBy: string,
    document: string,
    fileName: string,
    teamId: string,
    whiteboard: string,
    _id: string,
    _creationTime: number,
}
function FileList() {
    const { user }: any = useKindeBrowserClient();
    const router=useRouter();
    const { fileList_, setFileList_ } = useContext(FileListContext)
    const [fileList, setFileList] = useState<any>()

    useEffect(() => {
        fileList_ && setFileList(fileList_)
        console.log(fileList_)
    }, [fileList_])

    return (
        <div className='mt-10'>


            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">File Name</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Created At</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Edited</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Author</td>
                        </tr>
                    </thead>
                    {
                        fileList && fileList.map((file: FILE, index: number) => (
                            <tbody key={index} className="divide-y divide-gray-200" >
                                <tr onClick={()=>router.push('/workspace/'+file._id)}className="odd:bg-gray-50">
                                    <td 
                                    
                                    className="whitespace-nowrap px-4 py-2 font-medium cursor-pointer text-gray-900">{file.fileName}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{moment(file._creationTime).format('DD MMM YYYY')}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{moment(file._creationTime).format('DD MMM YYYY')}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        <Image src={user?.picture}
                                            alt="user"
                                            height={30}
                                            width={30}
                                            className='rounded-full'
                                        />
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">


                                        <DropdownMenu>
                                            <DropdownMenuTrigger>  <MoreHorizontal /></DropdownMenuTrigger>
                                            <DropdownMenuContent>

                                                <DropdownMenuItem className='gap-3'><Archive className='h-4 w-4' /> Archive</DropdownMenuItem>

                                            </DropdownMenuContent>
                                        </DropdownMenu>

                                    </td>
                                </tr>

                            </tbody>
                        ))
                    }

                </table>
            </div>


        </div>
    )
}

export default FileList