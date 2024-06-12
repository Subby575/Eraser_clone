"use client"
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import { api } from '@/convex/_generated/api'
import { useConvex, useMutation, useQuery } from 'convex/react'
import { createUser } from '@/convex/user'
import Header from './_Components/Header'
import FileList from './_Components/FileList'
const Dashboard = () => {

  const convex=useConvex();
  const createUser=useMutation(api.user.createUser);

  const {user}:any = useKindeBrowserClient();
  // const getUser=useQuery(api.user.getUser,{email:user?.email})


  useEffect(()=>{   
    if(user)
      {
        checkUser(); 
      }
  },[user])

const checkUser=async()=>{
  const result=await convex.query(api.user.getUser,{email:user?.email});
  if(!result?.length)
    {
      createUser({
        name:user.given_name,
        email:user.email,
        image:user.picture
      
      }).then(resp=>{
        console.log(resp)
      })
    }
}

  return (
    <>
    <div className='p-8'>

   <Header/>
   <FileList/>
    </div>
    
    </>
  )
}

export default Dashboard