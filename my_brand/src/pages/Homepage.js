import Placide from "../images/placidebio.png";
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Homepage() {
  return (
    <div className="flex flex-col-reverse m-2 md:flex-row  md:m-10 border-2 border-primary h-[90vh] ">
      <div className="flex flex-col justify-center items-center md:items-start md:w-1/2">
        <h1 className="text-xl md:text-5xl font-bold mt-2 md:ml-48 md:mb-4 ml-0 p-2">
         <span className="text-primary"> Hi, I'm Placide</span>
           TWIRINGIYIMANA.
        </h1>
        <p className=" flex ml-1 md:ml-48 text-base lg:text-xl font-serif md:mb-4 p-2 w-11/12 justify-center items-center ">
          A Full-Stack Web Developer with a vast experience in front-end and
          back-end development. I have a bachelor's degree in Computer
          engineering. My primary goal in the global IT sector is to provide the most perfect product possible.
        </p>
        <div className="flex md:ml-48 gap-5 mb-2 md:mb-4">
          <a href="https://www.instagram.com/yourusername/" target="_blank" rel="noopener noreferrer" className="text-primary  text-2xl"><FaInstagram/></a>
          <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" className=" text-primary  text-2xl"><FaLinkedin/></a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl"><FaGithub/></a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl"><FaTwitter/></a>
        </div>
        <button className="md:ml-48 md:p-2 bg-primary font-bold rounded md:w-1/5 text-gray-100 text-xl sm:ml-0 w-full sm:flex sm:justify-center xl:w-1/5 xl:ml-48">Let's talk</button>
      </div>
      <div className="flex justify-center items-center md:items-center md:w-11/12">
        <img src={Placide} alt="bio" className="object-contain w-11/12 h-92 rounded md:rounded-full md:object-contain md:h-full border-primary border-4 border-none" />
      </div>
    </div>
  );
} 
