import { useDarkMode } from "./DarkModeContext";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from "framer-motion";
const Contact = () => {
    const { darkMode } = useDarkMode();
    const { toggleDarkMode } = useDarkMode();

    return ( 
        <div
        style={{
            backgroundColor:darkMode ? "#00090E":"#B3CCFF"
        }} 
        id="contact" className="contact">
             <div className="empty9"></div>
            <p style={{color:darkMode ? "#B3CCFF":"#00090E"}} className='font-extrabold'>CONTACT</p>
            <div className="flex flex-col md:flex-row justify-center sm:justify-evenly mt-16">
                <div className="flex flex-col gap-4 mt-12 justify-center items-center mb-10 sm:mb-0">
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
                    <div className="flex flex-col items-center">

                    <div class="input-container">
                    <input placeholder="Name" 
                  className={`input-field ${darkMode ? 'input-field' : 'input-field2' }`}
                    type="text"/>
                    <label for="input-field" class="input-label">Name</label>
                    <span  className={`input-highlight ${darkMode ? 'input-highlight' : 'input-highlight2' }`}></span>
                    </div>
                    <div class="input-container">
                    <input placeholder="Email" 
                    className={`input-field ${darkMode ? 'input-field' : 'input-field2' }`}
                    type="text"/>
                    <label for="input-field" class="input-label">Email</label>
                    <span  className={`input-highlight ${darkMode ? 'input-highlight' : 'input-highlight2' }`}></span>
                    </div>
                    <div class="input-container">
                    <textarea placeholder="Comment"
                     className={`input-field ${darkMode ? 'input-field' : 'input-field2' }`}
                    type="comment"/>
                    <label for="input-field"
                     
                     className={`input-label ${darkMode ? 'input-label' : 'input-label2' }`}>Comment</label>
                    <span  className={`input-highlight ${darkMode ? 'input-highlight' : 'input-highlight2' }`}></span>
                    </div>
                    <motion.button 
                     whileHover={{ scale: 1.1 }}
                    className="collab pt-2 pr-2 pl-2 pb-2">Let's Collaborate</motion.button>
                    </div>
            </div>
            <div className="empty2"></div>
            <div className="empty2"></div>
        </div>
     );
}
 
export default Contact;