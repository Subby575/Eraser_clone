"use client"
import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link, Save } from 'lucide-react'
import { usePathname } from 'next/navigation';
import { Clipboard,ClipboardCheck } from 'lucide-react';
function WorkspaceHeader({onSave,fileData}:any) {
  const path=usePathname();
  const [copy,setCopy]=useState(false)
  const [theme, setTheme] = useState('light');
    useEffect(() => {
      const root = document.documentElement;
      const observer = new MutationObserver(() => {
          const isDarkMode = root.classList.contains('dark');
          setTheme(isDarkMode ? 'dark' : 'light');
      });

      observer.observe(root, { attributes: true, attributeFilter: ['class'] });

      return () => observer.disconnect();
  }, []);


  const Copydone=()=>{

    setCopy(true)
    setTimeout(() => {
      setCopy(false)
    }, 2000);
  }
  return (
    <div className='p-3 border-b flex justify-between items-center'>

    <div className='flex gap-2 items-center'>
      {
        theme==='dark'?
        <Image src={'/chalk.svg'} alt="logo"
        width={20} height={20}
         />
        :
        <Image src={'/chalk-dark.svg'} alt="logo"
        width={20} height={20}
         />
      }
        {/* <Image src={'/Icon.png'} alt="logo"
        width={40} height={40}
         /> */}
        <a href='/Dashboard' className='text-blue-600 dark:text-sky-100'>Dashboard / <span className='text-xl text-slate-700 dark:text-sky-300'> {fileData?.fileName}</span></a>

    </div>
    <div className='flex items-center gap-4'>

    <Button onClick={()=>onSave()} className="h-8 text-[12px] gap-2 hover:bg-emerald-300 bg-emerald-600 dark:text-neutral-100 dark:hover:text-neutral-800">
    <Save className='h-4 w-4' />Save
    </Button>

   
    <CopyToClipboard  text={"https://slateflow.vercel.app/"+path}>
          <Button onClick={Copydone} className="h-8 text-[12px] gap-2 hover:bg-blue-700 bg-blue-600 dark:text-neutral-100">
            {
              copy?
              <>
               Copied <ClipboardCheck className='h-4 w-4 ' />
              </>
              :
              <>
              
              Share <Link className='h-4 w-4 ' />
              </>
            }
            
          
          </Button>
        </CopyToClipboard>

      </div>

    </div>
  )
}

export default WorkspaceHeader