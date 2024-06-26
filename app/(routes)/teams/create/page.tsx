"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
function CreateTeam() {
    const router = useRouter();
    const [teamName, setTeamName] = useState('')
    const { user }: any = useKindeBrowserClient();
    const createTeam = useMutation(api.teams.createTeam)
    const createNewTeam = () => {
        createTeam({
            teamNAme: teamName,
            createdBy: user?.email
        }).then(resp => {
            console.log(resp);
            if (resp) {
                // setDone(true)
                router.push('/Dashboard')
                toast('Team created Successfully')
            }
        })
    }
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
    return (
        <>
            <div className='md:px-16 my-16 px-6'>
                {
                    theme==='dark' ? <Image src="/chalk.svg" alt="SlateFlow" width={50} height={100} /> : <Image src="/chalk-dark.svg" alt="SlateFlow" width={50} height={100} />
                }
                {/* <Image src="/Icon.png" alt="SlateFlow" width={100} height={100} /> */}
                <div className='flex flex-col items-center mt-8'>

                    <h2 className='font-bold text-[40px] py-3'>What Should we call your team</h2>
                    <h2 className='text-gray-500'>You can always change this later from </h2>
                    <div className='mt-7 w-[40%]'>
                        <label className='text-gray-500 '>Team Name</label>
                        <Input placeholder="Team Name" className='mt-3'
                            onChange={(e) => setTeamName(e.target.value)}
                        />
                    </div>

                    <Button onClick={createNewTeam} className='bg-blue-500 mt-9 w-[30%] hover:bg-blue-600 dark:text-neutral-100' disabled={!(teamName && teamName?.length > 0)}>Create Team</Button>

                </div>
            </div>


        </>
    )
}

export default CreateTeam