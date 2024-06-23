"use client"
import Image from "next/image";
import Header from "./_Components/Header";
import Hero from "./_Components/Hero";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";
import LandingPage from "./Test/page";

export default function Home() {
  const {user}=useKindeBrowserClient();
  useEffect(()=>{
    console.log("--",user)
  
  },[user])
  return (
    <>
   <LandingPage/>
    </>
  );
}
