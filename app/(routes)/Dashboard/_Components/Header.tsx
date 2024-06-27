"use client"
import { MessageCircleMore, Search, Send, Clipboard, ClipboardCheck, Link } from 'lucide-react'
import React, { useEffect, useState,useRef } from 'react'
import Image from 'next/image'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import InviteLinkPopup from './Invite';
// import { CopyIcon } from "@radix-ui/react-icons"

 
// import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CopyToClipboard from 'react-copy-to-clipboard';

function Header() {
  const [copy,setCopy]=useState(false)
  const Copydone=()=>{

    setCopy(true)
    setTimeout(() => {
      setCopy(false)
    }, 2000);
  }

  const inviteLink = 'https://slateflow.vercel.app/';


  const { user }: any = useKindeBrowserClient();
  return (
    <div className='flex justify-end w-full gap-2 items-center'>

      <div className='flex gap-2 items-center  border rounded-md p-1'>

      </div>
      <div>


        <Image src={user?.picture} alt=" " width={30} height={30} className='rounded-full bg-gray ' />

      </div>
      {/* <Popover>
        <PopoverTrigger > <a className='gap-2 flex text-sm h-9 hover:bg-blue-700  align-middle bg-blue-600 rounded-lg py-2 px-2  text-white justify-center'><Send className='h-4 w-4 align-middle' />Invite</a></PopoverTrigger>
        <PopoverContent className='mr-20 bg-gray-50'>
      <InviteLinkPopup link={inviteLink} />

        </PopoverContent>
      </Popover> */}
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className='dark:bg-slate-800'>Invite</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
          Invite your friends to SlateFLow your new best Friend
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue={inviteLink}
              readOnly
            />
          </div>
          <CopyToClipboard  text={"https://slateflow.vercel.app/"}>
          <Button onClick={Copydone} className={`h-8 text-[12px] gap-2 hover:bg-blue-700 dark:text-neutral-100 ${copy?'dark:bg-blue-700':'dark:bg-emerald-700'}`}>
            {
              copy?
              <>
              <ClipboardCheck className='h-4 w-4 ' />
              </>
              :
              <>
              <Clipboard className='h-4 w-4 ' />
              </>
            }
            
          
          </Button>
        </CopyToClipboard>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    </div>
  )
}

export default Header