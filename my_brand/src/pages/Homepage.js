import Placide from "../images/placidebio.png";
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Homepage() {
  return (
    <div className="flex flex-col-reverse lg:flex-row  m-10 border-2 border-lime-300">
      <div className="flex flex-col justify-center lg:mr-20 lg:w-1/2">
        <h1 className="text-5xl lg:text-7xl font-bold p-4 mt-2 sm:text-sm">
          Hi, I'm Placide <br />
          TWIRINGIYIMANA.
        </h1>
        <p className="p-8 font-sans text-base lg:text-xl">
          A Full-Stack Web Developer with a vast experience in front-end and
          back-end development. I have a bachelor's degree in Computer
          engineering. My primary goal in the global IT sector is to provide the most perfect product possible.
        </p>
        <div className="flex ml-8 gap-5 mb-3">
          <a href="https://www.instagram.com/yourusername/" target="_blank" rel="noopener noreferrer" className="text-primary  text-2xl"><FaInstagram/></a>
          <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" className=" text-primary  text-2xl"><FaLinkedin/></a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl"><FaGithub/></a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary text-2xl"><FaTwitter/></a>
        </div>
        <button className="ml-8 p-2 bg-primary font-bold rounded w-1/5">Let's talk</button>
      </div>
      <div className="flex justify-center items-center lg:w-1/2">
        <img src={Placide} alt="bio" className="object-cover h-2/4 w-2/5 rounded lg:rounded-full lg:object-contain lg:h-full" />
      </div>
    </div>
  );
}
