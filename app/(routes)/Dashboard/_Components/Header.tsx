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
        <PopoverTrigger > <a className='gap-2 flex text-sm h-9 hover:bg-blue-700  align-middle bg-blue-600 rounded-lg py-2 px-2  text-white justify-center'><Send className='h-4 w-4 align-middle' />Invite</a></PopoverTrigger>
        <PopoverContent className='h-24 w-[300px] bg-gray-50 rounded-lg flex'>
          <label
            htmlFor="UserEmail"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700"> Email </span>

            <input
              type="email"
              id="UserEmail"
              placeholder="anthony@rhcp.com"
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />
          </label>

        </PopoverContent>
      </Popover>

    </div>
  )
}

export default Header