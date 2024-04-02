import { useState } from "react";
import { useAnimate,motion,AnimatePresence } from "framer-motion";
import LaunchIcon from '@mui/icons-material/Launch';

const Portfolio = () => {

    const [scope, animate] = useAnimate(true) /// all button 
    const [all,setAll]=useState(true) /// all content 

    const handleone = async() =>{
        animate(scope.current, { scale:1.1 , duration: 1 ,backgroundColor:"#00090E",color:"#6699CC"} )
        animation(scope1.current, { scale:1 , duration: 1 ,backgroundColor:"#6699CC",color:"#00090E"} )
        animacion(scope2.current, { scale:1 , duration: 1 ,backgroundColor:"#6699CC",color:"#00090E"} )
        setAll(true)
        setReact(false)
        setHtml(false)
    } /// all animation 
  

    const [scope1,animation]=useAnimate() ///react button 
    const [react,setReact]=useState(false) /// react content 

    const handletwo = async ()=>{
        animation(scope1.current, { scale:1.1 , duration: 1 ,backgroundColor:"#00090E",color:"#6699CC"} )
        animate(scope.current, { scale:1 , duration: 1 ,backgroundColor:"#6699CC",color:"#00090E"} )
        animacion(scope2.current, { scale:1 , duration: 1 ,backgroundColor:"#6699CC",color:"#00090E"} )
        setAll(false)
        setReact(true)
        setHtml(false)
    } /// react animation 


    const [scope2,animacion]=useAnimate()
    const [html,setHtml]=useState(false)

    const handlethree =async()=>{
        animate(scope.current, { scale:1 , duration: 1 ,backgroundColor:"#6699CC",color:"#00090E"} )
        animation(scope1.current, { scale:1 , duration: 1 ,backgroundColor:"#6699CC",color:"#00090E"} )
        animacion(scope2.current, { scale:1.1 , duration: 1 ,backgroundColor:"#00090E",color:"#6699CC"} )
        setAll(false)
        setReact(false)
        setHtml(true)
    }

    return ( 
        <div id="portfolio" className="Portfolio">
            <div className="empty9"></div>
            <p style={{color:"#00090E"}} className='font-extrabold'>PORTFOLIO </p>
            <div className="flex items-center justify-center gap-8 mt-10">
                <button ref={scope} 
                style={{
                    backgroundColor: all ? "#00090E" : "#6699CC",
                    color:all ? "#6699CC": "#00090E",
                    scale:all ? "1.1" :"1"
                }}
                onClick={handleone} className="pfbtn pl-2 pr-2" >All</button>
                <button ref={scope1} onClick={handletwo} className="pfbtn  pl-2 pr-2">React</button>
                <button ref={scope2} onClick={handlethree} className="pfbtn  pl-2 pr-2">HTML/CSS</button>
            </div>
          <div className="flex flex-col justify-center items-center h-full">
          <AnimatePresence>
            {all && 
           
            <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1 , duration:2,delay:0.5}}
                    exit={{opacity:0, duration:1,delay:1,display:""}}
                    className="mt-16 w-full"
                    >
                    <div className="flex flex-col sm:flex-row gap-14 sm:gap-8 justify-center items-center">
                    <div class="card" 
                     //// autoz project
                    >
                        <div class="first-content">
                           
                        </div>
                        <div class="second-content flex flex-col items-center justify-start">
                        <span style={{color:"#00090E"}} className="font-extrabold">AutoZ</span>
                        <p style={{color:"#00324d"}} className="font-bold text-sm mt-4">
                            AutoZ is a car choosing website is an online platform that allows users to choose different type of car , different type of brand and different type of fuel
                        </p>
                        <div className="flex mt-4 gap-4">
                            <div className="flex flex-col items-center">
                                    <svg
                                    viewBox="0 0 24 24"
                                    fill="#00090E"
                                    height="25px"
                                    width="25px"
                                    className=""
                                >
                                    <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z" />
                                </svg>
                                <p style={{color:"#00090E"}} className="font-semibold text-sm text-center">React</p>
                            </div>
                            <div className="flex flex-col items-center">
                                 <svg
                                viewBox="0 0 24 24"
                                fill="#00090E"
                                height="25px"
                                width="25px"
                                className=""
                                >
                                <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
                                </svg>
                                <p style={{color:"#00090E"}} className="font-semibold text-sm text-center">Tailwind</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <svg
                                viewBox="0 0 32 32"
                                fill="#B3CCFF"
                                height="25px"
                                width="25px"
                                className=""
                            >
                                <path
                                fill="#00090E"
                                d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"
                                />
                            </svg>
                            <p style={{color:"#00090E"}} className="font-semibold text-sm text-center">CSS</p>
                            </div>
                        </div>
                        <div className="flex mt-8 gap-4">
                            <div className="flex">
                            <motion.a
                            initial={{scale:1}}
                            whileHover={{scale:1.1 ,transition:1 ,delay:0.5}}
                            className="flex gap-2" href="https://github.com/EnisZekiqi/AutoZ.github.io/tree/master" target="_blank" rel="noopener noreferrer">
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="#00090E"
                                height="25px"
                                width="25px"
                                >
                                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                                </svg>
                                <p style={{color:"#00090E"}} className="font-bold text-sm mt-1">Code</p></motion.a> 
                            </div>
                            <div className="flex">
                            <motion.a
                             initial={{scale:1}}
                             whileHover={{scale:1.1 ,transition:1 ,delay:0.5}}
                            className="flex gap-2" href="https://h593h5-3000.csb.app/" target="_blank" rel="noopener noreferrer">
                            <LaunchIcon sx={{color:"#00090E"}}/>
                            <p style={{color:"#00090E"}} className="font-bold text-sm text-center mt-1">Live Demo</p>
                              </motion.a>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div class="card2"
                         //// KeepCo project
                        >
                        <div class="first-content2">
                           
                        </div>
                        <div class="second-content flex flex-col items-center justify-start">
                        <span style={{color:"#00090E"}} className="font-extrabold">KeepCo</span>
                        <p style={{color:"#00324d"}} className="font-bold text-sm mt-4">
                           KeepCo is my first react project that i put everything i learned into it . It is a website that allows you to see all the features that you can put into the files to edit including texts,images,etc
                        </p>
                        <div className="flex mt-4 gap-4">
                            <div className="flex flex-col items-center">
                                    <svg
                                    viewBox="0 0 24 24"
                                    fill="#00090E"
                                    height="25px"
                                    width="25px"
                                    className=""
                                >
                                    <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z" />
                                </svg>
                                <p style={{color:"#00090E"}} className="font-semibold text-sm text-center">React</p>
                            </div>
                            <div className="flex flex-col items-center">
                            <svg
                                viewBox="0 0 24 24"
                                fill="#00090E"
                                height="25px"
                                width="25px"
                                className=""
                            >
                                <path d="M11.79 11.5H9.72V8.19h2.47c1.26 0 1.96.56 1.96 1.59 0 1.12-.83 1.72-2.36 1.72m.37 1.13H9.72v3.64h2.56c1.56 0 2.38-.63 2.38-1.83s-.85-1.81-2.5-1.81M22 5.31v13.38C22 20.5 20.5 22 18.69 22H5.31C3.5 22 2 20.5 2 18.69V5.31C2 3.5 3.5 2 5.31 2h13.38C20.5 2 22 3.5 22 5.31m-6 9.19c0-1.38-.92-2.37-2.33-2.55v-.06c1-.18 1.79-1.18 1.79-2.26 0-1.55-1.2-2.58-2.96-2.58H8.43v10.36h4.04c2.21 0 3.53-1.09 3.53-2.91z" />
                            </svg>
                                <p style={{color:"#00090E"}} className="font-semibold text-sm text-center">Bootstrap</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <svg
                                viewBox="0 0 32 32"
                                fill="#B3CCFF"
                                height="25px"
                                width="25px"
                                className=""
                            >
                                <path
                                fill="#00090E"
                                d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"
                                />
                            </svg>
                            <p style={{color:"#00090E"}} className="font-semibold text-sm text-center">CSS</p>
                            </div>
                        </div>
                        <div className="flex mt-8 gap-4">
                            <div className="flex">
                            <motion.a
                            initial={{scale:1}}
                            whileHover={{scale:1.1 ,transition:1 ,delay:0.5}}
                            className="flex gap-2" href="https://github.com/EnisZekiqi/KeepCo" target="_blank" rel="noopener noreferrer">
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="#00090E"
                                height="25px"
                                width="25px"
                                >
                                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                                </svg>
                                <p style={{color:"#00090E"}} className="font-bold text-sm mt-1">Code</p></motion.a> 
                            </div>
                            <div className="flex">
                            <motion.a
                             initial={{scale:1}}
                             whileHover={{scale:1.1 ,transition:1 ,delay:0.5}}
                            className="flex gap-2" href="https://6ptm47-3000.csb.app/" target="_blank" rel="noopener noreferrer">
                            <LaunchIcon sx={{color:"#00090E"}}/>
                            <p style={{color:"#00090E"}} className="font-bold text-sm text-center mt-1">Live Demo</p>
                              </motion.a>
                            </div>
                        </div>
                        </div>
                        </div>
                        
                    </div>
                        <div className="flex mt-8 gap-8 justify-center">
                        <div class="card3 ">
                        <div class="first-content3">
                           
                        </div>
                        <div class="second-content flex flex-col items-center justify-start">
                        <span style={{color:"#00090E"}} className="font-extrabold">Kasamil</span>
                        <p style={{color:"#00324d"}} className="font-bold text-sm mt-4">
                           This project was in the early days of becoming front-end developer , i putted effort on the backgrounds in the colors and also into the animations
                        </p>
                        <div className="flex mt-8 gap-4">
                            <div className="flex flex-col items-center">
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="#00090E"
                                height="25px"
                                width="25px"
                                className=""
                            >
                                <path d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z" />
                            </svg>
                                <p style={{color:"#00090E"}} className="font-semibold text-sm text-center">HTML</p>
                            </div>
                            <div className="flex flex-col items-center">
                            <svg
                                viewBox="0 0 24 24"
                                fill="#00090E"
                                height="25px"
                                width="25px"
                                className=""
                            >
                                <path d="M11.79 11.5H9.72V8.19h2.47c1.26 0 1.96.56 1.96 1.59 0 1.12-.83 1.72-2.36 1.72m.37 1.13H9.72v3.64h2.56c1.56 0 2.38-.63 2.38-1.83s-.85-1.81-2.5-1.81M22 5.31v13.38C22 20.5 20.5 22 18.69 22H5.31C3.5 22 2 20.5 2 18.69V5.31C2 3.5 3.5 2 5.31 2h13.38C20.5 2 22 3.5 22 5.31m-6 9.19c0-1.38-.92-2.37-2.33-2.55v-.06c1-.18 1.79-1.18 1.79-2.26 0-1.55-1.2-2.58-2.96-2.58H8.43v10.36h4.04c2.21 0 3.53-1.09 3.53-2.91z" />
                            </svg>
                                <p style={{color:"#00090E"}} className="font-semibold text-sm text-center">Bootstrap</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <svg
                                viewBox="0 0 32 32"
                                fill="#B3CCFF"
                                height="25px"
                                width="25px"
                                className=""
                            >
                                <path
                                fill="#00090E"
                                d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"
                                />
                            </svg>
                            <p style={{color:"#00090E"}} className="font-semibold text-sm text-center">CSS</p>
                            </div>
                        </div>
                        <div className="flex mt-8 gap-4">
                            <div className="flex">
                            <motion.a
                            initial={{scale:1}}
                            whileHover={{scale:1.1 ,transition:1 ,delay:0.5}}
                            className="flex gap-2" href="https://github.com/EnisZekiqi/Kasamil" target="_blank" rel="noopener noreferrer">
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="#00090E"
                                height="25px"
                                width="25px"
                                >
                                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                                </svg>
                                <p style={{color:"#00090E"}} className="font-bold text-sm mt-1">Code</p></motion.a> 
                            </div>
                            <div className="flex">
                            <motion.a
                             initial={{scale:1}}
                             whileHover={{scale:1.1 ,transition:1 ,delay:0.5}}
                            className="flex gap-2" href="https://jh5cv3.csb.app/" target="_blank" rel="noopener noreferrer">
                            <LaunchIcon sx={{color:"#00090E"}}/>
                            <p style={{color:"#00090E"}} className="font-bold text-sm text-center mt-1">Live Demo</p>
                              </motion.a>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                    </motion.div>
           
            }
            </AnimatePresence>
                <AnimatePresence>
                    {react && 
                    <motion.div /// autoz project
                    initial={{opacity:0}}
                    animate={{opacity:1 , duration:2,delay:0.5}}
                    exit={{opacity:0, duration:1,delay:0,display:""}}
                    className="mt-16 w-full "
                    >
                    <div className="flex flex-col sm:flex-row justify-center items-center  gap-14 sm:gap-8">
                    <div class="card">
                        <div class="first-content">
                           
                        </div>
                        <div class="second-content flex flex-col items-center justify-start">
                        <span style={{color:"#00090E"}} className="font-extrabold">AutoZ</span>
                        <p style={{color:"#00324d"}} className="font-bold text-sm mt-4">
                            AutoZ is a car choosing website is an online platform that allows users to choose different type of car , different type of brand and different type of fuel
                        </p>
                        <div className="flex mt-4 gap-4">
                            <div className="flex flex-col items-center">
                                    <svg
                                    viewBox="0 0 24 24"
                                    fill="#00090E"
                                    height="25px"
                                    width="25px"
                                    className=""
                                >
                                    <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z" />
                                </svg>
                                <p style={{color:"#00090E"}} className="font-semibold text-sm text-center">React</p>
                            </div>
                            <div className="flex flex-col items-center">
                                 <svg
                                viewBox="0 0 24 24"
                                fill="#00090E"
                                height="25px"
                                width="25px"
                                className=""
                                >
                                <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
                                </svg>
                                <p style={{color:"#00090E"}} className="font-semibold text-sm text-center">Tailwind</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <svg
                                viewBox="0 0 32 32"
                                fill="#B3CCFF"
                                height="25px"
                                width="25px"
                                className=""
                            >
                                <path
                                fill="#00090E"
                                d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"
                                />
                            </svg>
                            <p style={{color:"#00090E"}} className="font-semibold text-sm text-center">CSS</p>
                            </div>
                        </div>
                        <div className="flex mt-8 gap-4">
                            <div className="flex">
                            <motion.a
                            initial={{scale:1}}
                            whileHover={{scale:1.1 ,transition:1 ,delay:0.5}}
                            className="flex gap-2" href="https://github.com/EnisZekiqi/AutoZ.github.io/tree/master" target="_blank" rel="noopener noreferrer">
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="#00090E"
                                height="25px"
                                width="25px"
                                >
                                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                                </svg>
                                <p style={{color:"#00090E"}} className="font-bold text-sm mt-1">Code</p></motion.a> 
                            </div>
                            <div className="flex">
                            <motion.a
                             initial={{scale:1}}
                             whileHover={{scale:1.1 ,transition:1 ,delay:0.5}}
                            className="flex gap-2" href="https://h593h5-3000.csb.app/" target="_blank" rel="noopener noreferrer">
                            <LaunchIcon sx={{color:"#00090E"}}/>
                            <p style={{color:"#00090E"}} className="font-bold text-sm text-center mt-1">Live Demo</p>
                              </motion.a>
                            </div>
                        </div>
                        </div>
                        <div className="absolute bg-transparent h-8"></div>
                        </div>
                        <div class="card2">
                        <div class="first-content2">
                           
                        </div>
                        <div class="second-content flex flex-col items-center justify-start">
                        <span style={{color:"#00090E"}} className="font-extrabold">KeepCo</span>
                        <p style={{color:"#00324d"}} className="font-bold text-sm mt-4">
                           KeepCo is my first react project that i put everything i learned into it . It is a website that allows you to see all the features that you can put into the files to edit including texts,images,etc
                        </p>
                        <div className="flex mt-4 gap-4">
                            <div className="flex flex-col items-center">
                                    <svg
                                    viewBox="0 0 24 24"
                                    fill="#00090E"
                                    height="25px"
                                    width="25px"
                                    className=""
                                >
                                    <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z" />
                                </svg>
                                <p style={{color:"#00090E"}} className="font-semibold text-sm text-center">React</p>
                            </div>
                            <div className="flex flex-col items-center">
                            <svg
                                viewBox="0 0 24 24"
                                fill="#00090E"
                                height="25px"
                                width="25px"
                                className=""
                            >
                                <path d="M11.79 11.5H9.72V8.19h2.47c1.26 0 1.96.56 1.96 1.59 0 1.12-.83 1.72-2.36 1.72m.37 1.13H9.72v3.64h2.56c1.56 0 2.38-.63 2.38-1.83s-.85-1.81-2.5-1.81M22 5.31v13.38C22 20.5 20.5 22 18.69 22H5.31C3.5 22 2 20.5 2 18.69V5.31C2 3.5 3.5 2 5.31 2h13.38C20.5 2 22 3.5 22 5.31m-6 9.19c0-1.38-.92-2.37-2.33-2.55v-.06c1-.18 1.79-1.18 1.79-2.26 0-1.55-1.2-2.58-2.96-2.58H8.43v10.36h4.04c2.21 0 3.53-1.09 3.53-2.91z" />
                            </svg>
                                <p style={{color:"#00090E"}} className="font-semibold text-sm text-center">Bootstrap</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <svg
                                viewBox="0 0 32 32"
                                fill="#B3CCFF"
                                height="25px"
                                width="25px"
                                className=""
                            >
                                <path
                                fill="#00090E"
                                d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"
                                />
                            </svg>
                            <p style={{color:"#00090E"}} className="font-semibold text-sm text-center">CSS</p>
                            </div>
                        </div>
                        <div className="flex mt-8 gap-4">
                            <div className="flex">
                            <motion.a
                            initial={{scale:1}}
                            whileHover={{scale:1.1 ,transition:1 ,delay:0.5}}
                            className="flex gap-2" href="https://github.com/EnisZekiqi/KeepCo" target="_blank" rel="noopener noreferrer">
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="#00090E"
                                height="25px"
                                width="25px"
                                >
                                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                                </svg>
                                <p style={{color:"#00090E"}} className="font-bold text-sm mt-1">Code</p></motion.a> 
                            </div>
                            <div className="flex">
                            <motion.a
                             initial={{scale:1}}
                             whileHover={{scale:1.1 ,transition:1 ,delay:0.5}}
                            className="flex gap-2" href="https://6ptm47-3000.csb.app/" target="_blank" rel="noopener noreferrer">
                            <LaunchIcon sx={{color:"#00090E"}}/>
                            <p style={{color:"#00090E"}} className="font-bold text-sm text-center mt-1">Live Demo</p>
                              </motion.a>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    </motion.div>
                    }
                </AnimatePresence>
                <AnimatePresence>
                    {html && 
                    <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1 , duration:2,delay:0.5}}
                    exit={{opacity:0, duration:1,delay:1,display:""}}
                    className=" mt-16  w-full"
                    >
                        <div className="flex flex-col sm:flex-row gap-14 sm:gap-8 justify-center items-center">
                        <div class="card3">
                        <div class="first-content3">
                           
                        </div>
                        <div class="second-content flex flex-col items-center justify-start">
                        <span style={{color:"#00090E"}} className="font-extrabold">Kasamil</span>
                        <p style={{color:"#00324d"}} className="font-bold text-sm mt-4">
                           This project was in the early days of becoming front-end developer , i putted effort on the backgrounds in the colors and also into the animations
                        </p>
                        <div className="flex mt-8 gap-4">
                            <div className="flex flex-col items-center">
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="#00090E"
                                height="25px"
                                width="25px"
                                className=""
                            >
                                <path d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z" />
                            </svg>
                                <p style={{color:"#00090E"}} className="font-semibold text-sm text-center">HTML</p>
                            </div>
                            <div className="flex flex-col items-center">
                            <svg
                                viewBox="0 0 24 24"
                                fill="#00090E"
                                height="25px"
                                width="25px"
                                className=""
                            >
                                <path d="M11.79 11.5H9.72V8.19h2.47c1.26 0 1.96.56 1.96 1.59 0 1.12-.83 1.72-2.36 1.72m.37 1.13H9.72v3.64h2.56c1.56 0 2.38-.63 2.38-1.83s-.85-1.81-2.5-1.81M22 5.31v13.38C22 20.5 20.5 22 18.69 22H5.31C3.5 22 2 20.5 2 18.69V5.31C2 3.5 3.5 2 5.31 2h13.38C20.5 2 22 3.5 22 5.31m-6 9.19c0-1.38-.92-2.37-2.33-2.55v-.06c1-.18 1.79-1.18 1.79-2.26 0-1.55-1.2-2.58-2.96-2.58H8.43v10.36h4.04c2.21 0 3.53-1.09 3.53-2.91z" />
                            </svg>
                                <p style={{color:"#00090E"}} className="font-semibold text-sm text-center">Bootstrap</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <svg
                                viewBox="0 0 32 32"
                                fill="#B3CCFF"
                                height="25px"
                                width="25px"
                                className=""
                            >
                                <path
                                fill="#00090E"
                                d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"
                                />
                            </svg>
                            <p style={{color:"#00090E"}} className="font-semibold text-sm text-center">CSS</p>
                            </div>
                        </div>
                        <div className="flex mt-8 gap-4">
                            <div className="flex">
                            <motion.a
                            initial={{scale:1}}
                            whileHover={{scale:1.1 ,transition:1 ,delay:0.5}}
                            className="flex gap-2" href="https://github.com/EnisZekiqi/Kasamil" target="_blank" rel="noopener noreferrer">
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="#00090E"
                                height="25px"
                                width="25px"
                                >
                                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                                </svg>
                                <p style={{color:"#00090E"}} className="font-bold text-sm mt-1">Code</p></motion.a> 
                            </div>
                            <div className="flex">
                            <motion.a
                             initial={{scale:1}}
                             whileHover={{scale:1.1 ,transition:1 ,delay:0.5}}
                            className="flex gap-2" href="https://jh5cv3.csb.app/" target="_blank" rel="noopener noreferrer">
                            <LaunchIcon sx={{color:"#00090E"}}/>
                            <p style={{color:"#00090E"}} className="font-bold text-sm text-center mt-1">Live Demo</p>
                              </motion.a>
                            </div>
                        </div>
                        </div>
                        </div> <div class="card3">
                        <div class="first-content3">
                           
                        </div>
                        <div class="second-content flex flex-col items-center justify-start">
                        <span style={{color:"#00090E"}} className="font-extrabold">Kasamil</span>
                        <p style={{color:"#00324d"}} className="font-bold text-sm mt-4">
                           This project was in the early days of becoming front-end developer , i putted effort on the backgrounds in the colors and also into the animations
                        </p>
                        <div className="flex mt-8 gap-4">
                            <div className="flex flex-col items-center">
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="#00090E"
                                height="25px"
                                width="25px"
                                className=""
                            >
                                <path d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z" />
                            </svg>
                                <p style={{color:"#00090E"}} className="font-semibold text-sm text-center">HTML</p>
                            </div>
                            <div className="flex flex-col items-center">
                            <svg
                                viewBox="0 0 24 24"
                                fill="#00090E"
                                height="25px"
                                width="25px"
                                className=""
                            >
                                <path d="M11.79 11.5H9.72V8.19h2.47c1.26 0 1.96.56 1.96 1.59 0 1.12-.83 1.72-2.36 1.72m.37 1.13H9.72v3.64h2.56c1.56 0 2.38-.63 2.38-1.83s-.85-1.81-2.5-1.81M22 5.31v13.38C22 20.5 20.5 22 18.69 22H5.31C3.5 22 2 20.5 2 18.69V5.31C2 3.5 3.5 2 5.31 2h13.38C20.5 2 22 3.5 22 5.31m-6 9.19c0-1.38-.92-2.37-2.33-2.55v-.06c1-.18 1.79-1.18 1.79-2.26 0-1.55-1.2-2.58-2.96-2.58H8.43v10.36h4.04c2.21 0 3.53-1.09 3.53-2.91z" />
                            </svg>
                                <p style={{color:"#00090E"}} className="font-semibold text-sm text-center">Bootstrap</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <svg
                                viewBox="0 0 32 32"
                                fill="#B3CCFF"
                                height="25px"
                                width="25px"
                                className=""
                            >
                                <path
                                fill="#00090E"
                                d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"
                                />
                            </svg>
                            <p style={{color:"#00090E"}} className="font-semibold text-sm text-center">CSS</p>
                            </div>
                        </div>
                        <div className="flex mt-8 gap-4">
                            <div className="flex">
                            <motion.a
                            initial={{scale:1}}
                            whileHover={{scale:1.1 ,transition:1 ,delay:0.5}}
                            className="flex gap-2" href="https://github.com/EnisZekiqi/Kasamil" target="_blank" rel="noopener noreferrer">
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="#00090E"
                                height="25px"
                                width="25px"
                                >
                                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                                </svg>
                                <p style={{color:"#00090E"}} className="font-bold text-sm mt-1">Code</p></motion.a> 
                            </div>
                            <div className="flex">
                            <motion.a
                             initial={{scale:1}}
                             whileHover={{scale:1.1 ,transition:1 ,delay:0.5}}
                            className="flex gap-2" href="https://jh5cv3.csb.app/" target="_blank" rel="noopener noreferrer">
                            <LaunchIcon sx={{color:"#00090E"}}/>
                            <p style={{color:"#00090E"}} className="font-bold text-sm text-center mt-1">Live Demo</p>
                              </motion.a>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                    </motion.div>
                    }
                </AnimatePresence>
          </div>
            <div className="empty2"></div>
            <div className="empty2"></div>
        </div>
     );
}
 
export default Portfolio;