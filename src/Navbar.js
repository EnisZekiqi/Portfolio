import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { AnimatePresence, motion } from "framer-motion";
import { AppBar } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { useDarkMode } from "./DarkModeContext";
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

    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
      width: 62,
      height: 34,
      padding: 7,
      '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
          color: '#fff',
          transform: 'translateX(22px)',
          '& .MuiSwitch-thumb:before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
              '#fff',
            )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
          },
          '& + .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
          },
        },
      },
      '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&::before': {
          content: "''",
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
      },
      '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
      },
    }));
    
    return ( 
        <div 
        style={{ backgroundColor: darkMode ? "#00090E" : "#B3CCFF" }}
         className="navbar justify-between flex gap-2">
            <h1 className="Intro ml-4">Enis.dev</h1>
            <div className="nonomi flex gap-4 mr-4">
                <FormControlLabel
                 onClick={handleClick}
                  control={<MaterialUISwitch sx={{ m: 1 ,marginTop:-0.5}} defaultChecked />}
                 
                />
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
              onMouseLeave={()=>setShow3(false)} href="">Contact</a>
              <span 
                style={{
                  transform: show3 ? "scaleX(1)": "scaleX(0)",
                  backgroundColor:darkMode ? "#B3CCFF" : "#00090E"
                }}
                className='line   origin-left h-1 rounded-full transition-transform duration-300 ease-out'></span>
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
              onMouseLeave={()=>setShow2(false)} href="">Portfolio</a>
                    <span 
                style={{
                  transform: show2 ? "scaleX(1)": "scaleX(0)"
                }}
                className='line2  origin-left h-1 rounded-full transition-transform duration-300 ease-out'></span>
                    </div>
                    <div className="flex items-center justify-center flex-col">

                    <a  style={{fontSize:35}} onMouseEnter={()=>setShow3(true)}
              onMouseLeave={()=>setShow3(false)} href="">Contact</a>
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