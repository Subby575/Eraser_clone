import React, { useEffect, useState } from 'react'
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import {FILE} from '@/app/(routes)/Dashboard/_Components/FileList' ;
import { useMutation } from 'convex/react';
import Image from 'next/image';
import { api } from '@/convex/_generated/api';
function Canvas({onSaveTrigger,fileId,fileData}:{onSaveTrigger:any,fileId:any,fileData:FILE}) {
    console.log(fileData)
    const [whiteBoardData,setWhiteBoardData]=useState<any>();
    
    const updateWhiteboard=useMutation(api.files.updateWhiteboard)
    useEffect(()=>{
        onSaveTrigger&&saveWhiteboard();
    },[onSaveTrigger])
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setDarkMode(savedTheme === 'dark');
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDark);
        document.documentElement.classList.toggle('dark', prefersDark);
      }
    }, []);

    const saveWhiteboard=()=>{
        updateWhiteboard({
            _id:fileId,
            whiteboard:JSON.stringify(whiteBoardData)
        }).then(resp=>console.log(resp))
    }
    return (

        
    <div style={{ height: "670px" }}>
   {fileData&& <Excalidraw 
    theme={darkMode?'dark':'light'}
    initialData={{
        elements:fileData?.whiteboard&&JSON.parse(fileData?.whiteboard)
    }}
     onChange={(excalidrawElements, appState, files)=>
        setWhiteBoardData(excalidrawElements)}
    UIOptions={{
        canvasActions:{
            saveToActiveFile:false,
            loadScene:false,
            export:false,
            toggleTheme:false

        }
    }}
    >
        <MainMenu>
            <MainMenu.DefaultItems.ClearCanvas/>
            <MainMenu.DefaultItems.SaveAsImage/>
            <MainMenu.DefaultItems.ChangeCanvasBackground/>
        </MainMenu>
        <WelcomeScreen>
            <WelcomeScreen.Hints.MenuHint/>
            <WelcomeScreen.Hints.ToolbarHint/>
          <WelcomeScreen.Center>
            {/* <WelcomeScreen.Center.Logo /> */}
            <Image src='/FullLogo.png' height={500} width={500} alt="logo"/>
            <WelcomeScreen.Center.Heading>
              Welcome to SlateFlow!
            </WelcomeScreen.Center.Heading>
            <WelcomeScreen.Center.Menu>
              <WelcomeScreen.Center.MenuItemHelp />
            </WelcomeScreen.Center.Menu>
          </WelcomeScreen.Center>
          <WelcomeScreen.Hints.HelpHint/>
        </WelcomeScreen>
        </Excalidraw>}
  </div>
  )
}

export default Canvas