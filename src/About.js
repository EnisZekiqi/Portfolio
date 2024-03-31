import llaptop from './images/llaptopo.jpg'
import profil from './images/profile2.jpg'
const About = () => {
    return ( 
        <div id="about" className="about flex w-full justify-center gap-20 ">
           <div className=" w-fit mt-16">
                <div className="flex flex-col gap-4">
                    <div className="flex">
                    <svg
                     className='mt-24 mr-6'
                    fill="#66ADCC"
                    viewBox="0 0 16 16"
                    height="20px"
                    width="20px"
                    >
                    <path d="M0 2a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2z" />
                    </svg>
                        <img style={{borderRadius:20}} src={llaptop} alt="" />
                    </div>
                    <div className="flex">
                        <img style={{borderRadius:20}} className='profili -mt-14 -ml-20' src={profil} alt="" />
                        <svg
                    className='ml-16 mt-2 md:ml-16 md:mt-2 '
                    fill="#00090E"
                    viewBox="0 0 16 16"
                    height="30px"
                    width="30px"
                    >
                    <path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" />
                    </svg>
                    </div>
                </div>
           </div>
           <div className="w-1/2 sm:w-1/4">
           <div className="flex flex-col">
                    <div className="aboutme mt-16 ">
                        <p style={{color:"#00090E" ,width:'max-content'}} className='font-extrabold'>ABOUT ME </p>
                    </div>
                    <div className="tekxti mt-6 text-start">
                        <p style={{color:"#265c73"}}>I am a junior Front-End Developer from Kosovo i am excited to create new stunning websites. My experties lies crafting dynamic , engaging interfaces and stylish designs . I am also a team player who thrives in collaborating with the team</p>
                    </div>
                </div>
           </div>
        </div>
     );
}
 
export default About;