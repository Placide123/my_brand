import Placide from "../images/placidebio.png";
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Homepage() {
  return (
    <div className="flex flex-col-reverse m-2 md:flex-row md:m-6 lg:m-8 xl:m-9 h-[90vh] lg:w-[90%]  xl:w-[90%] ">
      <div className="flex flex-col justify-center items-center md:items-start md:w-1/2 xl:w-3/5">
        <h1 className="text-xl md:text-2xl xl:text-5xl font-bold md:ml-12 xl:ml-48 md:mb-4 ml-0 p-2">
         <span className="text-primary mr-1"> Hi, I'm Placide</span>
           TWIRINGIYIMANA.
        </h1>
        <p className=" flex md:ml-12 xl:ml-48 text-base lg:text-xl font-serif md:mb-4 p-2 w-[95%] justify-center items-center text-justify ">
          A Full-Stack Web Developer with a vast experience in front-end and
          back-end development. I have a bachelor's degree in Computer
          engineering. My primary goal in the global IT sector is to provide the most perfect product possible.
        </p>
        <div className="flex md:ml-12 xl:ml-48 gap-5 mb-2 md:mb-4 p-2">
          <a href="https://www.instagram.com/yourusername/" target="_blank" rel="noopener noreferrer" className="text-primary  text-2xl"><FaInstagram/></a>
          <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" className=" text-primary  text-2xl"><FaLinkedin/></a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl"><FaGithub/></a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl"><FaTwitter/></a>
        </div>
        <button className=" md:ml-14 xl:ml-48 p-2 md:p-2 bg-primary font-bold rounded md:w-[45%] lg:w-1/4 xl:w-1/5 text-gray-100 text-xl w-full flex justify-center">Let's talk</button>
      </div>
      <div className="flex justify-center items-center md:justify-center md:items-center lg:w-2/5 xl:w-10/12  ">
        <img src={Placide} alt="bio" className=" flex justify-center items-center xl:items-end object-contain w-10/12 lg:w-11/12 xl:w-9/12 h-[50vh]  rounded md:rounded-full md:object-contain md:h-[60%] border-primary border-4 border-none" />
      </div>
    </div>
  );
} 
