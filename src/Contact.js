import { useDarkMode } from "./DarkModeContext";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AnimatePresence, motion } from "framer-motion";
import TextField from '@mui/material/TextField';
import { useState } from "react";
const Contact = () => {
    const { darkMode } = useDarkMode();
    const { toggleDarkMode } = useDarkMode();


    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [comment,setComment]=useState('')
    const [success,setSuccess]=useState(false)
    const [error,setError]=useState(false)


    const handleInput =(e)=>{
        const { name, value } = e.target;
    if (name === 'name') {
        setName(value);
    } else if (name === 'email') {
        setEmail(value);
    } else if (name === 'comment') {
        setComment(value);
    }
    }

    const handleSubmit =()=>{
        if(name.trim() !== '' && email.trim() !== '' && comment.trim() !== ''){
            setSuccess(true)
            setError(false)
            setName('')
            setEmail('')
            setComment('')
        }else{
            setSuccess(false)
            setError(true)
        }
        setTimeout(()=>{
            setSuccess(false)
            setError(false)
        },5000)
    }

    return ( 
        <div
        style={{
            backgroundColor:darkMode ? "#00090E":"#B3CCFF"
        }} 
        id="contact" className="contact">
             <div className="empty9"></div>
            <p style={{color:darkMode ? "#B3CCFF":"#00090E"}} className='font-extrabold'>CONTACT</p>
            <div className="flex flex-col md:flex-row justify-center items-center sm:justify-evenly mt-16">
                <div className="flex flex-col gap-4  justify-center items-center mb-10 sm:mb-0">
                    <a href="https://github.com/EnisZekiqi" target="_blank" rel="noopener noreferrer">
                    <motion.button
                     whileHover={{ scale: 1.1 }}
                    style={{backgroundColor:"transparent"}}><div 
                    style={{backgroundColor:darkMode ? "#B3CCFF":"#00090E"}}
                    className="social1 flex gap-2 justify-center items-center">
                        <GitHubIcon sx={{color:darkMode ? "#00090E":"#B3CCFF"}}/>
                        <p 
                        style={{color:darkMode ? "#00090E":"#B3CCFF"}}
                        className="font-bold">GitHub</p>
                    </div></motion.button>
                    </a>
                        <a href="https://www.instagram.com/eniszekiqi/?next=%2F" target="_blank" rel="noopener noreferrer">
                        <motion.button
                      whileHover={{ scale: 1.1 }}
                    style={{backgroundColor:"transparent"}}><div
                    style={{backgroundColor:darkMode ? "#B3CCFF":"#00090E"}}
                    className="social1 flex gap-2 justify-center items-center">
                        <InstagramIcon sx={{color:darkMode ? "#00090E":"#B3CCFF"}}/>
                        <p
                         style={{color:darkMode ? "#00090E":"#B3CCFF"}}
                        className="font-bold">Instagram</p>
                    </div></motion.button>
                        </a>
                        <a href="https://www.linkedin.com/in/enis-zekiqi-090b692b9/">
                        <motion.button 
                      whileHover={{ scale: 1.1 }}
                    style={{backgroundColor:"transparent"}}><div
                    style={{backgroundColor:darkMode ? "#B3CCFF":"#00090E"}}
                    className="social1 flex gap-2 justify-center items-center">
                        <LinkedInIcon sx={{color:darkMode ? "#00090E":"#B3CCFF"}}/>
                        <p
                         style={{color:darkMode ? "#00090E":"#B3CCFF"}}
                        className="font-bold">LinkedIn</p>
                    </div></motion.button>
                        </a>
                </div>
                   

                    <form method='POST' action="https://getform.io/f/lbkmyllb" className='flex flex-col mt-12 md:mt-0  max-w-[450px] w-full'>
            <input style={{ color: darkMode ? "#B3CCFF" : "#00090E",
          backgroundColor: darkMode ? "#333" : "" }} className='p-2' type="text" placeholder='Name' name='name' />
            <input 
            style={{ color: darkMode ? "#B3CCFF" : "#00090E",
            backgroundColor: darkMode ? "#333" : "" }}
            className='my-4 p-2' type="email" placeholder='Email' name='email' />
            <textarea style={{ color: darkMode ? "#B3CCFF" : "#00090E",
          backgroundColor: darkMode ? "#333" : "" }} className=' p-2' name="message" rows="10" placeholder='Message'></textarea>
            <div className="flex items-center justify-center">
            <motion.button 
                    type="submit"
                    onClick={handleSubmit}
                     whileHover={{ scale: 1.1 }}
                     style={{
                        backgroundColor:darkMode ? "":"#00090E",
                        color:darkMode ? "":"#B3CCFF"
                     }}
                    className="collab pt-2 pr-2 pl-2 pb-2 mt-4">Let's Collaborate</motion.button>
            </div>
        </form>
                    
            </div>
            <div className="empty2"></div>
        </div>
     );
}
 
export default Contact;