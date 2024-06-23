import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronDown, LayoutGrid, LogOut, Settings, User } from 'lucide-react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { api } from '@/convex/_generated/api'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import { Separator } from '@/components/ui/separator'
import { useConvex } from 'convex/react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

export interface TEAM{
    createdBy:string,
    teamNAme:string,
    _id:string
}


function SideNavTopSection({user,setActiveTeamInfo}:any) {
    const [teamList,setTeamList]=useState<TEAM[]>();
    const [isLoaded, setIsLoaded] = useState(false)
    const [activeTeam,setActiveTeam]=useState<TEAM>();
    const menu=[
        {
            id:1,
            name:'Create Team',
            path:'/teams/create',
            icon:User
        },
        {
            id:2,
            name:'Settings',
            path:' ',
            icon:Settings

        },

    ]
    const convex=useConvex();
    const router=useRouter();
    useEffect(()=>{ 
        activeTeam&&setActiveTeamInfo(activeTeam);
        activeTeam&&setIsLoaded(true)
    },[activeTeam])


    const getTeamList=async()=>{
        const result=await convex.query(api.teams.getTeam,{email:user?.email});
        setTeamList(result);
        setActiveTeam(result[0]);
        console.log(result[0])
    }

    const onMenuClick=(item:any)=>{
        if(item.path)
            {
                router.push(item.path)
            }
    }

    useEffect(()=>{
        user && getTeamList();
    },[user])
    return (

        <div>
                    <Popover>
            <PopoverTrigger>
               {
                isLoaded?
                <>
                 <div>
                    <div className='flex items-center gap-3 hover:bg-slate-200 p-3 rounded-md cursor-pointer'  >
                        <Image src='/Icon.png' alt='SlateFlow' width={40} height={40} />
                        <h2 className='flex gap-2 items-center font-bold text-[17px]'>{activeTeam?.teamNAme}
                        </h2>
                        <ChevronDown />
                    </div>
                </div>
                </>
                :
                <>
                 <div>
                    <div className='flex items-center gap-3 hover:bg-slate-200 p-3 rounded-md cursor-pointer'  >

                        <Image src='/Icon.png' alt='Eraser' width={40} height={40} />
                        <h2 className='flex gap-2 items-center font-bold text-[17px]'>
                            <Skeleton className="w-[100px] h-[20px] rounded-full"  />
                        </h2>
                        <ChevronDown />
                    </div>
                </div>
                </>
               }

            </PopoverTrigger>
            <PopoverContent className='ml-7 p-4'>
                {/* Team Section */}
                <div>
                    {teamList?.map((team,index)=>(
                        <h2 key={index} className={`p-2 hover:bg-blue-500 rounded-lg mb-1 cursor-pointer hover:text-white ${activeTeam?._id==team._id && 'bg-blue-500 text-white'}`}
                        onClick={()=>setActiveTeam(team)}
                        >{team.teamNAme}</h2>
                    ))}
                   
                </div>
                <Separator className='mt-2 bg-slate-100'/>
                {/* Option Section */}
                <div>
                    {menu.map((item,index)=>(
                        <h2 key={index} className='flex gap-2 items-center hover:bg-gray-100 rounded-lg text-sm p-2 cursor-pointer'
                        onClick={()=>onMenuClick(item)}
                        ><item.icon className='h-4 w-4' /> {item.name}</h2>
                    ))}
                    <LogoutLink>
                    <h2 className='flex gap-2 items-center hover:bg-gray-100 rounded-lg text-sm p-2 cursor-pointer'><LogOut className='h-4 w-4' />Logout</h2>
                    </LogoutLink>
                </div>
                <Separator className='mt-2  bg-slate-100'/>
               {/* User Info */}

               {
                user && <div className='flex gap-2 items-center mt-2'>
                    <Image src={user?.picture} 
                    className='rounded-full mt-2'
                    alt="user" width={30} height={30}/>
                    <div>
                        <h2 className='text-[14px] font-bold '>{user?.given_name} {user.family_name}</h2>
                        <h2 className='text-[12px] text-gray-500'>{user.email}</h2>
                    </div>
                </div>
               }
            </PopoverContent>
        </Popover>

            {/* ALL file Button */}
            {/* <Button variant={'outline'}
            className='w-full justify-start gap-2 font-bold mt-8 bg-gray-100'
            >
                <LayoutGrid className='h-5 w-5'/>All Files
            </Button> */}

        </div>




    )
}

export default SideNavTopSection