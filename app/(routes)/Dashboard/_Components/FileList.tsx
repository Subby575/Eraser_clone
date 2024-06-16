"use client"
import { FileListContext } from '@/app/_context/FileListContext'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import { Skeleton } from "@/components/ui/skeleton"
import moment from 'moment'
import { api } from '@/convex/_generated/api'
import React, { useContext, useEffect, useState } from 'react'
import { Archive, MoreHorizontal, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useConvex } from 'convex/react'
import { useMutation } from 'convex/react'
import { Id } from "@/convex/_generated/dataModel" // Ensure this is the correct import path

export interface FILE {
    archive: boolean,
    createdBy: string,
    document: string,
    fileName: string,
    teamId: string,
    whiteboard: string,
    _id: Id<'files'>,  // Correctly type the _id field
    _creationTime: number,
    lastOpened?: number, // Add this optional field
}

function FileList() {
    const [isLoaded, setIsLoaded] = useState(false)
    const { user }: any = useKindeBrowserClient()
    const router = useRouter()
    const { fileList_, setFileList_ } = useContext(FileListContext)
    const [fileList, setFileList] = useState<FILE[]>([])
    function refreshPage() {
        window.location.reload();
    }
    const deleteFileMutation = useMutation(api.files.deleteFile)
    const updateLastOpenedMutation = useMutation(api.files.updateLastOpened)

    const deleteFile = (fileId: Id<'files'>) => { // Correctly type the parameter
        deleteFileMutation({
            _id: fileId
        }).then(resp => {
            console.log(resp)
            setFileList(prev => prev.filter((file: FILE) => file._id !== fileId))
            refreshPage(); 
        })
    }

    const handleFileClick = (fileId: Id<'files'>) => {
        // Update the last opened time in the DB
        updateLastOpenedMutation({
            _id: fileId,
            lastOpened: Date.now(), // Use current timestamp
        }).then(resp => {
            console.log('Last opened time updated:', resp)
            router.push('/workspace/' + fileId)
        })
    }

    useEffect(() => {
        if (fileList_) {
            setFileList(fileList_)
            setIsLoaded(true)
            // console.log(fileList_)
        }
    }, [fileList_])

    return (
        <div className='mt-10'>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">File Name</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Created At</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Last Opened</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Author</td>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoaded ? (
                            fileList.map((file: FILE, index: number) => (
                                <tr key={index} className="odd:bg-gray-50">
                                    <td 
                                        onClick={() => handleFileClick(file._id)}
                                        className="whitespace-nowrap px-4 py-2 font-medium cursor-pointer text-gray-900">{file.fileName}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{moment(file._creationTime).format('LT')}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{file.lastOpened ? moment(file.lastOpened).calendar() : 'Never'}</td>
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
                                            <DropdownMenuTrigger>
                                                <MoreHorizontal />
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuItem className='gap-3' onClick={() => deleteFile(file._id)}>
                                                    <Trash2 className='h-4 w-4' /> Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            Array.from({ length: 5 }).map((_, index) => (
                                <tr key={index}>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <Skeleton className="w-[100px] h-[20px] rounded-full" />
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <Skeleton className="w-[100px] h-[20px] rounded-full" />
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <Skeleton className="w-[100px] h-[20px] rounded-full" />
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <Skeleton className="w-[30px] h-[30px] rounded-full" />
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <Skeleton className="w-[100px] h-[20px] rounded-full" />
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FileList
