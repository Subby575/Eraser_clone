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


    const [theme, setTheme] = useState('light');
    useEffect(() => {
      const root = document.documentElement;
      const observer = new MutationObserver(() => {
          const isDarkMode = root.classList.contains('dark');
          setTheme(isDarkMode ? 'dark' : 'light');
      });

      observer.observe(root, { attributes: true, attributeFilter: ['class'] });

      return () => observer.disconnect();
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
    theme={theme==='dark'?'dark':'light'}
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
            {theme==='dark'?
             <Image src='/Icon.png' height={500} width={500} alt="logo"/>
            :
            <Image src='/logo-black-trans.png' height={700} width={700} alt="logo"/>
            }

            {/* <Image src='/FullLogo.png' height={500} width={500} alt="logo"/> */}
            <WelcomeScreen.Center.Heading >
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