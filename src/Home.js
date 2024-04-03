import { Button } from "@mui/material";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import laptop3 from './images/pakata-goh-RDolnHtjVCY-unsplash.jpg'
import AddIcon from '@mui/icons-material/Add';
import { useDarkMode } from "./DarkModeContext";

const Home = () => {

    const [hover,setHover] =useState(false)
    const[hover2,setHover2]=useState(false)

    const { darkMode } = useDarkMode();
    const { toggleDarkMode } = useDarkMode();

    
    return ( 
        <div className="home">
            <div className="flex container mx-auto px-2 lg:px-8 flex-col md:flex-row justify-center md:justify-between">
                <div className="name flex flex-col items-start  ml-12 lg:ml-24">
                    <h5 style={{fontSize:25,
                      color:darkMode ? "#B3CCFF" : "#00090E"
                    }} className="font-semibold text-start">Hello i'm</h5>
                    <h1 style={{fontSize:60,
                     color:darkMode ? "#B3CCFF" : "#00090E"
                    }} className="font-extrabold  text-start">Enis <b
                    style={{
                      color:darkMode ? "#66ADCC" : "#2d6b86"
                    }}
                    className="bold">Zekiqi</b></h1>
                    <h4 style={{fontSize:25,
                     color:darkMode ? "#B3CCFF" : "#00090E"
                    }}>A <b 
                    style={{ color:darkMode ? "#B3CCFF" : "#00090E"}}
                    className="bold2 ">Web Developer</b></h4>
                   <div className="flex gap-4 font-semibold mt-4">
                     <button
                    onMouseEnter={()=>setHover(true)}
                    onMouseLeave={()=>setHover(false)}
                    style={{
                      backgroundColor:darkMode ? "#66ADCC4d": "#2d6b86"
                    }}
                    className={`view ${hover === true ? 'view2' : ''}`} >HIRE ME</button>
                    <a href="#portfolio">
                    <button
                     onMouseEnter={()=>setHover2(true)}
                     onMouseLeave={()=>setHover2(false)}
                     style={{
                      color:darkMode ? "#66ADCC4d": "#2d6b86"
                    }}
                     className={`view3 ${hover2 === true ? 'view4' : ''}`}>VIEW MY PORTFOLIO</button>
                    </a>

                    </div>
                    <div className="arrow"/>
                </div>
               <AnimatePresence>
               <motion.div
                animate={{
                    y:[0,-30,0] ,
                    transition: {
                      duration: 2,
                      ease: "linear",
                      times:[0,1],
                      repeat: Infinity,
                      repeatType: "reverse"
                    },
                  }}
                className="photography flex items-center ">
                <svg width="400" height="500" viewBox="0 0 960 1280">
      <defs>
        <clipPath id="blobClip">
          <path fill="#b3ccff" d="M798,614.5Q636,750,459,786Q282,822,187,652.5Q92,483,196,324Q300,165,479,168Q658,171,818,324.5Q978,478,798,614.5Z" />
        </clipPath>
      </defs>
      <image className="inmg" href={laptop3} width="100%" height="100%" clipPath="url(#blobClip)" />
    </svg>
    <div className="flex flex-col absolute gap-4 mt-12 -ml-12">
        <div 
        style={{
          backgroundColor:darkMode ? "#B3CCFF": "#00090E"
        }}
        className="card0 flex items-center gap-2">
            <AddIcon sx={{color:"#398aac" ,scale:"1.5" ,marginLeft:"5px"}}/>
            <p style={{
              color:darkMode ? "#00090E":"#B3CCFF"
            }} className="font-bold text-lg">ATTENTION TO-DETAIL</p>
        </div>
        <div
         style={{
          backgroundColor:darkMode ? "#B3CCFF": "#00090E"
        }}
        className="card0 flex  items-center gap-4">
        <AddIcon sx={{color:"#398aac" ,scale:"1.5" ,marginLeft:"5px"}}/>
            <p style={{  color:darkMode ? "#00090E":"#B3CCFF"}} className="font-bold text-lg">TEAM ORIENTED</p>
        </div>
        <div 
         style={{
          backgroundColor:darkMode ? "#B3CCFF": "#00090E"
        }}
        className="card0 flex items-center gap-2">
        <AddIcon sx={{color:"#398aac" ,scale:"1.5" ,marginLeft:"5px"}}/>
            <p style={{color:darkMode ? "#00090E":"#B3CCFF"}} className="font-bold text-lg">RESPONSIVE DESIGN</p>
        </div>
    </div>
                </motion.div>
               </AnimatePresence>
            </div>
        </div>
     );
}
 
export default Home;