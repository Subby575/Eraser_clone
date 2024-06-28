"use client"
import { FileListContext } from '@/app/_context/FileListContext'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import { Skeleton } from "@/components/ui/skeleton"
import moment from 'moment'
import { api } from '@/convex/_generated/api'
import React, { useContext, useEffect, useState } from 'react'
import { ArrowDownAZ, ArrowDownUp, ArrowDownZA, MoreHorizontal, Redo, Trash2 } from 'lucide-react'
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
import { Separator } from '@/components/ui/separator'

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

type SortableColumns = 'fileName' | '_creationTime' | 'lastOpened';

function FileList() {
    const [sorting, setSorting] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const { user }: any = useKindeBrowserClient()
    const router = useRouter()
    const { fileList_, setFileList_ } = useContext(FileListContext)
    const [fileList, setFileList] = useState<FILE[]>([])
    const [sortColumn, setSortColumn] = useState<SortableColumns>('fileName')
    const [sortDirection, setSortDirection] = useState<string>('asc')

    function refreshPage() {
        window.location.reload();
    }

    const deleteFileMutation = useMutation(api.files.deleteFile)
    const updateLastOpenedMutation = useMutation(api.files.updateLastOpened)

    const deleteFile = (fileId: Id<'files'>) => {
        deleteFileMutation({
            _id: fileId
        }).then(resp => {
            console.log(resp)
            setFileList(prev => prev.filter((file: FILE) => file._id !== fileId))
        })
    }

    const handleFileClick = (fileId: Id<'files'>) => {
        updateLastOpenedMutation({
            _id: fileId,
            lastOpened: Date.now(),
        }).then(resp => {
            console.log('Last opened time updated:', resp)
            router.push('/workspace/' + fileId)
        })
    }

    useEffect(() => {
        if (fileList_) {
            setFileList(fileList_)
            setIsLoaded(true)
        }
    }, [fileList_])

    const sortFiles = (files: FILE[], column: SortableColumns, direction: string) => {
        return files.sort((a, b) => {
            let aValue: any = a[column]
            let bValue: any = b[column]

            if (column === '_creationTime' || column === 'lastOpened') {
                aValue = aValue || 0
                bValue = bValue || 0
            }

            if (aValue < bValue) return direction === 'asc' ? -1 : 1
            if (aValue > bValue) return direction === 'asc' ? 1 : -1
            return 0
        })
    }

    const handleSort = (column: SortableColumns) => {
        const direction = sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc'
        setSortColumn(column)
        setSortDirection(direction)
        setFileList(sortFiles([...fileList], column, direction))
    }

    return (
        <div className='mt-10 dark:bg-slate-700 bg-white'>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-500 text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 flex dark:text-sky-50 cursor-pointer" onClick={() =>{handleSort('fileName'),setSorting(!sorting)}}>File Name{
                                sorting ?
                                    <span ><ArrowDownAZ className='w-4 h-5 ml-2' /></span>
                                    :
                                    <span><ArrowDownZA className='w-4 h-5 ml-2' /></span>

                            }
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-sky-50 cursor-pointer" onClick={() => handleSort('_creationTime')}>
                                <span className='flex' >Created At<ArrowDownUp className='h-5 w-4 ml-2' /></span>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-sky-50 cursor-pointer" onClick={() => handleSort('lastOpened')}>
                            <span className='flex' >Last Opened<ArrowDownUp className='h-5 w-4 ml-2' /></span>
                               </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-sky-50">Author</td>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoaded ? (
                            fileList.map((file: FILE, index: number) => (
                                <tr key={index} className="odd:bg-gray-50 dark:odd:bg-slate-600">
                                    <td
                                        onClick={() => handleFileClick(file._id)}
                                        className="whitespace-nowrap px-4 py-2 font-medium cursor-pointer text-gray-900 dark:text-gray-50">{file.fileName}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-50">{moment(file._creationTime).calendar()}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-50">{file.lastOpened ? moment(file.lastOpened).calendar() : 'Never'}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-50">
                                        <Image src={user?.picture}
                                            alt="user"
                                            height={30}
                                            width={30}
                                            className='rounded-full'
                                        />
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-50">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger>
                                                <MoreHorizontal />
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuItem className='gap-3 dark:bg-gray-800 dark:hover:bg-red-500 dark:text-gray-50 text-gray-800 hover:text-gray-100 hover:bg-red-600' onClick={() => deleteFile(file._id)}>
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
                                        <Skeleton className="bg-sky-100 w-[100px] h-[20px] rounded-full" />
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <Skeleton className="bg-sky-100 w-[100px] h-[20px] rounded-full" />
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <Skeleton className="bg-sky-100 w-[100px] h-[20px] rounded-full" />
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <Skeleton className="bg-sky-100 w-[30px] h-[30px] rounded-full" />
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <Skeleton className="bg-sky-100 w-[100px] h-[20px] rounded-full" />
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
                {
                    isLoaded && fileList.length === 0 ?
                        <>
                            <Separator />
                            <div className='w-full mt-6 bg-gray-100 rounded-lg h-[22rem]'>
                                <div className="grid place-content-center align-middle pt-10 px-4">
                                    <div className="text-center">
                                        <img src="/search.svg" alt="" />
                                        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ooh Chalk!</h1>
                                        <p className="mt-4 text-gray-500 mb-4">We can't find any file</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex dark:bg-gray-900'>
                                <Redo strokeWidth={0.5} className='h-20 w-20 -rotate-180 dark:text-white' />
                                <h1 className='mt-10 antialiased'>Create new files here </h1>
                            </div>
                        </>
                        :
                        null
                }
            </div>
        </div>
    )
}

export default FileList
