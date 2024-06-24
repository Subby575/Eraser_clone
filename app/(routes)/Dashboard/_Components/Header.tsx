import { MessageCircleMore, Search, Send, Clipboard } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import InviteLinkPopup from './Invite';


function Header() {
  const inviteLink = 'https://slateflow.vercel.app/';


  const { user }: any = useKindeBrowserClient();
  return (
    <div className='flex justify-end w-full gap-2 items-center'>

      <div className='flex gap-2 items-center  border rounded-md p-1'>

      </div>
      <div>


        <Image src={user?.picture} alt=" " width={30} height={30} className='rounded-full bg-gray ' />

      </div>
      <Popover>
        <PopoverTrigger > <a className='gap-2 flex text-sm h-9 hover:bg-blue-700  align-middle bg-blue-600 rounded-lg py-2 px-2  text-white justify-center'><Send className='h-4 w-4 align-middle' />Invite</a></PopoverTrigger>
        <PopoverContent className='mr-20 bg-gray-50'>
      <InviteLinkPopup link={inviteLink} />

        </PopoverContent>
      </Popover>

    </div>
  )
}

export default Header