import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {

    const [show,setShow]=useState(false)
    const [show1,setShow1]=useState(false)
    const [show2,setShow2]=useState(false)
    const [show3,setShow3]=useState(false)

    const [drawer,setDrawer]=useState(false)

    const toggleDrawer =()=>{
        setDrawer(true);
    }

    return ( 
        <div className="navbar justify-between flex gap-2">
            <h1 className="Intro ml-4">Enis.dev</h1>
            <div className="nonomi flex gap-4 mr-4">
                <div className="flex flex-col">
                <a  onMouseEnter={()=>setShow(true)}
              onMouseLeave={()=>setShow(false)} href="">Home</a>
                <span 
                style={{
                  transform: show ? "scaleX(1)": "scaleX(0)"
                }}
                className='line  origin-left h-1 rounded-full transition-transform duration-300 ease-out'></span>
                </div>
                    <div className="flex flex-col">
                    <a   onMouseEnter={()=>setShow1(true)}
              onMouseLeave={()=>setShow1(false)} href="#about">About</a>
              <span 
                style={{
                  transform: show1 ? "scaleX(1)": "scaleX(0)"
                }}
                className='line  origin-left h-1 rounded-full transition-transform duration-300 ease-out'></span>
                    </div>
                    <div className="flex flex-col">
                    <a   onMouseEnter={()=>setShow2(true)}
              onMouseLeave={()=>setShow2(false)} href="">Portfolio</a>
                    <span 
                style={{
                  transform: show2 ? "scaleX(1)": "scaleX(0)"
                }}
                className='line  origin-left h-1 rounded-full transition-transform duration-300 ease-out'></span>
                    </div>
                    <div className="flex flex-col">

                    <a   onMouseEnter={()=>setShow3(true)}
              onMouseLeave={()=>setShow3(false)} href="">Contact</a>
              <span 
                style={{
                  transform: show3 ? "scaleX(1)": "scaleX(0)"
                }}
                className='line   origin-left h-1 rounded-full transition-transform duration-300 ease-out'></span>
                    </div> 
            </div>
            <div className="hamburger relative">
                    <button onClick={toggleDrawer}><MenuIcon/> </button>
                    <AnimatePresence>
                    {drawer && (
          <>
          
           <motion.div
             initial={{opacity:0}}
             animate={{opacity:1 }}
             exit={{opacity:0}}
             transition={{
               duration:0.5
             }}
              className="drawer"
              onClick={() => setDrawer(false)} // Close drawer when backdrop is clicked
            >
              <div className="nonomi2 flex flex-col flex-gap gap-4 mr-4">
                <div className="flex flex-col mt-10">
                <a    onMouseEnter={()=>setShow(true)}
              onMouseLeave={()=>setShow(false)} href="">Home</a>
                <span 
                style={{
                  transform: show ? "scaleX(1)": "scaleX(0)"
                }}
                className='line2  origin-left h-1 rounded-full transition-transform duration-300 ease-out'></span>
                </div>
                    <div className="flex flex-col">
                    <a   onMouseEnter={()=>setShow1(true)}
              onMouseLeave={()=>setShow1(false)} href="#about">About</a>
              <span 
                style={{
                  transform: show1 ? "scaleX(1)": "scaleX(0)"
                }}
                className='line2  origin-left  h-1 rounded-full transition-transform duration-300 ease-out'></span>
                    </div>
                    <div className="flex flex-col">
                    <a   onMouseEnter={()=>setShow2(true)}
              onMouseLeave={()=>setShow2(false)} href="">Portfolio</a>
                    <span 
                style={{
                  transform: show2 ? "scaleX(1)": "scaleX(0)"
                }}
                className='line2  origin-left h-1 rounded-full transition-transform duration-300 ease-out'></span>
                    </div>
                    <div className="flex flex-col">

                    <a   onMouseEnter={()=>setShow3(true)}
              onMouseLeave={()=>setShow3(false)} href="">Contact</a>
              <span 
                style={{
                  transform: show3 ? "scaleX(1)": "scaleX(0)"
                }}
                className='line2   origin-left h-1 rounded-full transition-transform duration-300 ease-out'></span>
                    </div> 
            </div>
            </motion.div>

            <div onClick={() => setDrawer(false)} className="backdrop"></div>
          </>
        )}
                    </AnimatePresence>
                    
                    </div>
        </div>
     );
}
 
export default Navbar;