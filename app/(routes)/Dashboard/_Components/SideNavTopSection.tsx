import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Crown, LogOut, Settings, User, Trash2, Trash2Icon } from 'lucide-react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import '@/app/_Components/toggle.css'
import { api } from '@/convex/_generated/api';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs';
import { Separator } from '@/components/ui/separator';
import { useConvex, useMutation } from 'convex/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Skeleton } from '@/components/ui/skeleton';
import { Id } from "@/convex/_generated/dataModel" // Ensure this is the correct import path
import Toggle from '@/app/_Components/Toggle';
export interface TEAM {
    createdBy: string,
    teamNAme: string,
    _id: Id<"teams">
}

function SideNavTopSection({ user, setActiveTeamInfo }: any) {
    const [teamList, setTeamList] = useState<TEAM[]>();
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeTeam, setActiveTeam] = useState<TEAM>();
    const [freeTier, setFreeTier] = useState(true);

    const deleteTeamMutation = useMutation(api.teams.deleteTeam);

    const menu = [
        {
            id: 1,
            name: 'Create Team',
            path: '/teams/create',
            icon: User
        },
        {
            id: 2,
            name: 'Settings',
            path: ' ',
            icon: Settings
        },
    ];

    const Premium = [
        {
            id: 1,
            name: 'Upgrade Plan',
            path: '/Pricing',
            icon: Crown
        },
        {
            id: 2,
            name: 'Settings',
            path: ' ',
            icon: Settings
        },
    ];

    const convex = useConvex();
    const router = useRouter();

    useEffect(() => {
        if (activeTeam) {
            setActiveTeamInfo(activeTeam);
            setIsLoaded(true);
        }
    }, [activeTeam]);
    const [theme, setTheme] = useState('');
    useEffect(() => {
        const root = document.documentElement;
        const observer = new MutationObserver(() => {
            const isDarkMode = root.classList.contains('dark');
            setTheme(isDarkMode ? 'dark' : 'light');
        });

        observer.observe(root, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);
    const getTeamList = async () => {
        const result = await convex.query(api.teams.getTeam, { email: user?.email });
        setTeamList(result);
        setActiveTeam(result[0]);
        console.log(result);
        if (result.length > 2) {
            setFreeTier(false);
        }
    };

    const deleteTeam = async (teamId: Id<"teams">) => {
        await deleteTeamMutation({ _id: teamId });
        setTeamList((prev) => prev?.filter((team) => team._id !== teamId));
        setActiveTeam((prev) => (prev?._id === teamId ? teamList?.[0] : prev));
        // Refresh the page
        window.location.reload();
    };

    const onMenuClick = (item: any) => {
        if (item.path) {
            router.push(item.path);
        }
    };

    useEffect(() => {
        if (user) {
            getTeamList();
        }
    }, [user]);

    return (
        <div>
            <Popover>
                <PopoverTrigger>
                    {
                        isLoaded ?
                            <div>
                                <div className='flex gap-3  w-[15rem]
                                dark:bg-slate-700
                                dark:hover:bg-slate-600
                                hover:bg-slate-200 p-3 rounded-md cursor-pointer'>
                                    {
                                        theme==='dark'
                                        ?
                                        <Image src='/chalk.svg' alt='SlateFlow' width={20} height={20} />
                                        :
                                        <Image src='/chalk-dark.svg'  alt='SlateFlow' width={20} height={20} />


                                    }

                                    <h2 className='flex gap-2 font-bold text-[17px] items-center'>{activeTeam?.teamNAme}</h2>
                                    <ChevronDown className='' />
                                </div>
                            </div>
                            :
                            <div>
                                <div className='flex items-center gap-3 hover:bg-slate-200 p-3 rounded-md cursor-pointer'>
                                {
                                        theme==='dark'
                                        ?
                                        <Image src='/chalk.svg' alt='SlateFlow' width={20} height={20} />
                                        :
                                        <Image src='/chalk-dark.svg'  alt='SlateFlow' width={20} height={20} />


                                    }
                                    <h2 className='flex gap-2 items-center font-bold text-[17px]'>
                                        <Skeleton className="bg-sky-100 w-[100px] h-[20px] rounded-full" />
                                    </h2>
                                    <ChevronDown />
                                </div>
                            </div>
                    }
                </PopoverTrigger>
                <PopoverContent className='ml-7 p-4 bg-gray-100 dark:bg-gray-800'>
                    {/* Team Section */}
                    <div>
                        {teamList?.map((team, index) => (
                            <div key={index} className={`flex ${activeTeam?._id === team._id && 'bg-blue-500  text-white'} justify-between items-center p-2 hover:bg-blue-500 rounded-lg mb-1 cursor-pointer hover:text-white`}>
                                <h2 className={`flex-grow `} onClick={() => setActiveTeam(team)}>
                                    {team.teamNAme}
                                </h2>

                                <Dialog>
                                    <DialogTrigger><Trash2 className='h-5 w-5 text-red-100   rounded-lg hover:scale-105 hover:text-red-200  cursor-pointer' /></DialogTrigger>
                                    <DialogContent className='max-w-xs flex items-center justify-center'>
                                        <DialogHeader>
                                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                                            <DialogDescription>
                                                <div className='mt-4'>
                                                    {/* <Button className='hover:bg-red-600' onClick={() => deleteTeam(team._id)}><Trash2Icon className='w-4 h-4 mr-2'/>Delete</Button> */}
                                                    {/* <Button  variant={'ghost'} > */}
                                                    <button onClick={() => deleteTeam(team._id)} type="button" className="button rounded-lg">
                                                        <span className="button__text ">Delete</span>
                                                        <span className="button__icon rounded-lg">
                                                            <Trash2Icon className='h-4 w-4 text-white ' />
                                                        </span>
                                                    </button>
                                                    {/* <Toggle  /> */}
                                                    {/* </Button> */}
                                                </div>
                                            </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>

                            </div>
                        ))}
                    </div>
                    <Separator className='mt-2 bg-slate-100' />
                    {/* Option Section */}
                    <div>
                        {freeTier ? (
                            menu.map((item, index) => (
                                <h2 key={index} className='flex gap-2 items-center hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg text-sm p-2 cursor-pointer'
                                    onClick={() => onMenuClick(item)}>
                                    <item.icon className='h-4 w-4' /> {item.name}
                                </h2>
                            ))
                        ) : (
                            // Premium.map((item, index) => (
                            //     <h2 key={index} className='flex gap-2 items-center 
                            //     dark:hover:bg-gray-700
                            //     hover:bg-gray-300 rounded-lg text-sm p-2 cursor-pointer'
                            //         onClick={() => onMenuClick(item)}>
                            //         <item.icon className='h-4 w-4' /> {item.name}
                            //     </h2>
                            // ))

                            <>
                                <h2 className='flex gap-2 items-center bg-gradient-to-r from-red-500 to-orange-500
                             text-white dark:hover:bg-white
                                hover:bg-gray-300 rounded-lg text-sm p-2 my-2 cursor-pointer'
                                    onClick={() => onMenuClick(0)}>
                                    <Crown className='h-4 w-4 text-amber-50' /> Premium
                                </h2>
                                <h2 className='flex gap-2 items-center 
                             text-gray-900 
                             dark:text-neutral-50
                             dark:hover:bg-gray-700
                                hover:bg-gray-300 rounded-lg text-sm p-2 my-2 cursor-pointer'
                                    onClick={() => onMenuClick(1)}>
                                    <Settings className='h-4 w-4 text-gray-900 dark:text-white' /> Settings
                                </h2>
                            </>
                        )}

                        <LogoutLink>
                            <h2 className='flex gap-2 items-center dark:hover:bg-gray-700 hover:bg-gray-300
                        
                            rounded-lg text-sm p-2 cursor-pointer'><LogOut className='h-4 w-4' />Logout</h2>
                        </LogoutLink>
                    </div>
                    <Separator className='mt-2 bg-slate-100' />
                    {/* User Info */}
                    {user && <div className='flex gap-2 items-center mt-2'>
                        <Image src={user?.picture} className='rounded-full mt-2' alt="user" width={30} height={30} />
                        <div>
                            <h2 className='text-[14px] font-bold'>{user?.given_name} {user.family_name}</h2>
                            <h2 className='text-[12px] text-gray-500'>{user.email}</h2>
                        </div>
                    </div>}
                </PopoverContent>
            </Popover>
        </div>
    );
}

export default SideNavTopSection;
