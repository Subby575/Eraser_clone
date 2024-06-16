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


function Header() {



  const { user }: any = useKindeBrowserClient();
  return (
    <div className='flex justify-end w-full gap-2 items-center'>

      <div className='flex gap-2 items-center  border rounded-md p-1'>

      </div>
      <div>


        <Image src={user?.picture} alt=" " width={30} height={30} className='rounded-full bg-gray ' />

      </div>
      <Popover>
        <PopoverTrigger> <div className='gap-2 flex text-sm h-8 hover:bg-blue-700 bg-blue-600 rounded-lg py-2 px-2  text-white'><Send className='h-4 w-4' />Invite</div></PopoverTrigger>
        <PopoverContent className='h-24 w-[400px] bg-gray-50 rounded-lg'>
          <div className='flex justify-between gap-5'>

            <div className='border-2 border-gray-200 pb-3 pt-2 px-3 rounded-lg hover:bg-gray-100 hover:text-green-500'>
              <a href='https://api.whatsapp.com/send?text='><MessageCircleMore className='text-emerald-300 ml-6' />WhatsApp</a>
            </div>
            <div className='border-2 border-gray-200 pb-3 pt-2 px-6 rounded-lg hover:bg-gray-100 hover:text-green-500'>
              <a href='https://twitter.com/messages/compose'><MessageCircleMore className='text-emerald-300 ml-4' />Twitter</a>
            </div>

          </div>
        </PopoverContent>
      </Popover>

    </div>
  )
}

export default Header