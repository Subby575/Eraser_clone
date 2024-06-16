import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link, Save } from 'lucide-react'
import { usePathname } from 'next/navigation';
function WorkspaceHeader({onSave,fileData}:any) {
  const path=usePathname();

  return (
    <div className='p-3 border-b flex justify-between items-center'>

    <div className='flex gap-2 items-center'>
        <Image src={'/logo.png'} alt="logo"
        width={40} height={40}
         />
        <a href='/Dashboard' className='text-blue-600'>Dashboard / <span className='text-xl text-slate-700'> {fileData?.fileName}</span></a>

    </div>
    <div className='flex items-center gap-4'>

    <Button onClick={()=>onSave()} className="h-8 text-[12px] gap-2 hover:bg-yellow-500 bg-yellow-600 ">
    <Save className='h-4 w-4' />Save
    </Button>

   
    <CopyToClipboard text={"https://eraser-clone-one.vercel.app/"+path}>
          <Button className="h-8 text-[12px] gap-2 hover:bg-blue-700 bg-blue-600 "> Share <Link className='h-4 w-4 ' /></Button>
        </CopyToClipboard>

      </div>

    </div>
  )
}

export default WorkspaceHeader