import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { AnimatePresence, motion } from "framer-motion";
import { AppBar } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { useDarkMode } from "./DarkModeContext";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
const Navbar = () => {

    const [show,setShow]=useState(false)
    const [show1,setShow1]=useState(false)
    const [show2,setShow2]=useState(false)
    const [show3,setShow3]=useState(false)

    const [drawer,setDrawer]=useState(false)

    const toggleDrawer =()=>{
        setDrawer(true);
    }

    const { darkMode } = useDarkMode();
    const { toggleDarkMode } = useDarkMode();

    const handleClick = () => {
      toggleDarkMode();
    };


    return ( 
        <div 
        style={{ backgroundColor: darkMode ? "#00090E" : "#B3CCFF" }}
         className="navbar justify-between flex gap-2">
            <h1 className="Intro ml-4">Enis.dev</h1>
            <div className="flex">
            <div className="nonomi3">
                  <button style={{backgroundColor:"transparent"
              ,display:darkMode ? "block":"none"
              }} onClick={handleClick}><LightModeIcon sx={{color:"#B3CCFF"}}/></button>
                {darkMode ? (
                  <button style={{backgroundColor:"transparent",position:"absolute"}} onClick={handleClick}><DarkModeIcon sx={{color:"#00090E"}}/></button>
                ) :<button style={{backgroundColor:"transparent"}} onClick={handleClick}><DarkModeIcon sx={{color:"#00090E"}}/></button>
                }
                  </div>
            <div className="nonomi flex gap-4 mr-4">
                <div className="flex flex-col">
                <a  onMouseEnter={()=>setShow(true)}
              onMouseLeave={()=>setShow(false)} href="">Home</a>
                <span 
                style={{
                  transform: show ? "scaleX(1)": "scaleX(0)",
                  backgroundColor:darkMode ? "#B3CCFF" : "#00090E"
                }}
                className='line  origin-left h-1 rounded-full transition-transform duration-300 ease-out'></span>
                </div>
                    <div className="flex flex-col">
                    <a   onMouseEnter={()=>setShow1(true)}
              onMouseLeave={()=>setShow1(false)} href="#about">About</a>
              <span 
                style={{
                  transform: show1 ? "scaleX(1)": "scaleX(0)",
                  backgroundColor:darkMode ? "#B3CCFF" : "#00090E"
                }}
                className='line  origin-left h-1 rounded-full transition-transform duration-300 ease-out'></span>
                    </div>
                    <div className="flex flex-col">
                    <a   onMouseEnter={()=>setShow2(true)}
              onMouseLeave={()=>setShow2(false)} href="#portfolio">Portfolio</a>
                    <span 
                style={{
                  transform: show2 ? "scaleX(1)": "scaleX(0)",
                  backgroundColor:darkMode ? "#B3CCFF" : "#00090E"
                }}
                className='line  origin-left h-1 rounded-full transition-transform duration-300 ease-out'></span>
                    </div>
                    <div className="flex flex-col">

                    <a   onMouseEnter={()=>setShow3(true)}
              onMouseLeave={()=>setShow3(false)} href="#contact">Contact</a>
              <span 
                style={{
                  transform: show3 ? "scaleX(1)": "scaleX(0)",
                  backgroundColor:darkMode ? "#B3CCFF" : "#00090E"
                }}
                className='line   origin-left h-1 rounded-full transition-transform duration-300 ease-out'></span>
                    </div> 
            </div>
            </div>
            <div className="hamburger relative">
              
                    <button onClick={toggleDrawer}><MenuIcon/> </button>
                    <AnimatePresence>
                    {drawer && (
          <>
          
           

            <div onClick={() => setDrawer(false)} className="backdrop">
            <motion.div
             initial={{opacity:0}}
             animate={{opacity:1 }}
             exit={{opacity:0}}
             transition={{
               duration:0.5
             }}
              className=""
              onClick={() => setDrawer(false)} // Close drawer when backdrop is clicked
            >
              <div className="nonomi2 flex items-center justify-center flex-col flex-gap gap-4 mr-4">
                <div className="flex items-center justify-center flex-col mt-16">
                <a  style={{fontSize:35}}  onMouseEnter={()=>setShow(true)}
              onMouseLeave={()=>setShow(false)} href="">Home</a>
                <span 
                style={{
                  transform: show ? "scaleX(1)": "scaleX(0)"
                }}
                className='line2 flex   origin-left h-1 rounded-full transition-transform duration-300 ease-out'></span>
                </div>
                    <div className="flex items-center justify-center flex-col">
                    <a style={{fontSize:35}}  onMouseEnter={()=>setShow1(true)}
              onMouseLeave={()=>setShow1(false)} href="#about">About</a>
              <span 
                style={{
                  transform: show1 ? "scaleX(1)": "scaleX(0)"
                }}
                className='line2  origin-left  h-1 rounded-full transition-transform duration-300 ease-out'></span>
                    </div>
                    <div className="flex items-center justify-center flex-col">
                    <a style={{fontSize:35}}  onMouseEnter={()=>setShow2(true)}
              onMouseLeave={()=>setShow2(false)} href="#portfolio">Portfolio</a>
                    <span 
                style={{
                  transform: show2 ? "scaleX(1)": "scaleX(0)"
                }}
                className='line2  origin-left h-1 rounded-full transition-transform duration-300 ease-out'></span>
                    </div>
                    <div className="flex items-center justify-center flex-col">

                    <a  style={{fontSize:35}} onMouseEnter={()=>setShow3(true)}
              onMouseLeave={()=>setShow3(false)} href="#contact">Contact</a>
              <span 
                style={{
                  transform: show3 ? "scaleX(1)": "scaleX(0)"
                }}
                className='line2   origin-left h-1 rounded-full transition-transform duration-300 ease-out'></span>
                    </div> 
            </div>
            </motion.div>
            </div>
            
          </>
          
        )}
        
                    </AnimatePresence>
                    </div>
                    
        </div>
     );
}
 
export default Navbar;