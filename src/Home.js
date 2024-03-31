import { Button } from "@mui/material";
import { useState } from "react";

import laptop3 from './images/pakata-goh-RDolnHtjVCY-unsplash.jpg'
import AddIcon from '@mui/icons-material/Add';

const Home = () => {

    const [hover,setHover] =useState(false)
    const[hover2,setHover2]=useState(false)


    return ( 
        <div className="home">
            <div className="flex container mx-auto px-2 lg:px-8 flex-col md:flex-row justify-center md:justify-between">
                <div className="name flex flex-col items-start  ml-12 lg:ml-24">
                    <h5 style={{fontSize:25}} className="font-semibold text-start">Hello i'm</h5>
                    <h1 style={{fontSize:60}} className="font-extrabold  text-start">Enis <b className="bold">Zekiqi</b></h1>
                    <h4 style={{fontSize:25}}>A <b className="bold2 ">Web Developer</b></h4>
                   <div className="flex gap-4 font-semibold mt-4">
                     <button
                    onMouseEnter={()=>setHover(true)}
                    onMouseLeave={()=>setHover(false)}
                    className={`view ${hover === true ? 'view2' : ''}`} >HIRE ME</button>
                    <button
                     onMouseEnter={()=>setHover2(true)}
                     onMouseLeave={()=>setHover2(false)}
                     className={`view3 ${hover2 === true ? 'view4' : ''}`}>VIEW MY PORTFOLIO</button>
                    </div>
                    <div className="arrow"/>
                </div>
                <div className="photography flex items-center ">
                <svg width="400" height="500" viewBox="0 0 960 1280">
      <defs>
        <clipPath id="blobClip">
          <path fill="#b3ccff" d="M798,614.5Q636,750,459,786Q282,822,187,652.5Q92,483,196,324Q300,165,479,168Q658,171,818,324.5Q978,478,798,614.5Z" />
        </clipPath>
      </defs>
      <image className="inmg" href={laptop3} width="100%" height="100%" clipPath="url(#blobClip)" />
    </svg>
    <div className="flex flex-col absolute gap-4 mt-12 -ml-12">
        <div className="card0 flex items-center gap-2">
            <AddIcon sx={{color:"#398aac" ,scale:"1.5" ,marginLeft:"5px"}}/>
            <p style={{color:"#00090E"}} className="font-bold text-lg">ATTENTION TO-DETAIL</p>
        </div>
        <div className="card0 flex  items-center gap-4">
        <AddIcon sx={{color:"#398aac" ,scale:"1.5" ,marginLeft:"5px"}}/>
            <p style={{color:"#00090E"}} className="font-bold text-lg">TEAM ORIENTED</p>
        </div>
        <div className="card0 flex items-center gap-2">
        <AddIcon sx={{color:"#398aac" ,scale:"1.5" ,marginLeft:"5px"}}/>
            <p style={{color:"#00090E"}} className="font-bold text-lg">RESPONSIVE DESIGN</p>
        </div>
    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;