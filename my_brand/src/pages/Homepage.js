import Placide from "../images/placidebio.png";
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Homepage() {
  return (
    <div className="flex flex-col-reverse lg:flex-row  m-10 border-2 border-lime-300 h-[90vh] sm:m-2">
      <div className="flex flex-col justify-center lg:w-1/2">
        <h1 className="text-5xl lg:text-7xl font-bold mt-2 sm:text-sm ml-48 mb-4 sm:ml-2">
         <span> Hi, I'm Placide</span> <br />
          TWIRINGIYIMANA.
        </h1>
        <p className="ml-48 text-base lg:text-xl font-serif mb-4 sm:ml-2">
          A Full-Stack Web Developer with a vast experience in front-end and
          back-end development. I have a bachelor's degree in Computer
          engineering. My primary goal in the global IT sector is to provide the most perfect product possible.
        </p>
        <div className="flex ml-48 gap-5 mb-4 sm:ml-2 sm:justify-center">
          <a href="https://www.instagram.com/yourusername/" target="_blank" rel="noopener noreferrer" className="text-primary  text-2xl"><FaInstagram/></a>
          <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" className=" text-primary  text-2xl"><FaLinkedin/></a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl"><FaGithub/></a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl"><FaTwitter/></a>
        </div>
        <button className="ml-48 p-2 bg-primary font-bold rounded w-1/5 text-gray-100 text-xl sm:ml-0 sm:w-full sm:flex sm:justify-center">Let's talk</button>
      </div>
      <div className="flex justify-center items-center lg:w-1/2">
        <img src={Placide} alt="bio" className="object-cover w-96 h-96 rounded lg:rounded-full lg:object-contain lg:h-full border-primary border-4 sm:h-[3/5]" />
      </div>
    </div>
  );
}
