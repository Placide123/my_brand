import Placide from "../images/placidebio.png";

export default function AboutUs() {
  return (
    <div className="flex md:justify-center md:items-center">

      <div className="flex flex-col md:flex-row ">
        <div className="md:w-[20%] flex justify-center items-center mt-5">
          <img src={Placide} alt="bio" className="w-36 h-36 rounded-full" />
        </div>
        <div className="md:w-[80%] md:p-32 p-4">
          <h2 className="flex justify-center text-bold text-3xl mb-5 ">About Me</h2>
          <p className="text-base font-normal text-justify md:text-lg font-serif">
            I am a Software Engineer with a love of collaborating with great
            minds in achieving realistic solutions. I graduated from the
            <span className="font-bold text-primary ml-1">University of Rwanda - College of Science and Technology</span> in 2022
            with a bachelor's degree in <span className="font-bold text-primary"> Computer Engineering.</span> I have experience
            in working with startup and intermediate businesses in Tech. I
            attended <span className="font-bold text-primary">Andela </span>, a program that identifies and develops African
            developers to become the best software engineers. I worked on the
            Andela Rwanda internal product, My responsibility in my team was
            front-end development, back-end development, testing coverage,
            resolving conflict, and code reviews and deployment. I also joined <span className="font-bold text-primary ml-1">VisionFund Rwanda </span>as an 
            <span className="font-bold text-primary ml-1">IT Support</span>, where I gained experience in Oracle database management using SQL and learned how to generate reports with data stored in the database.
            <p className="mt-5 text-base text-primary font-bold">
              My skills include:- ReactJs - Tailwind - Typescript - NodeJs - GraphQL - HTML5 & CSS3
              Socket.io - Apollo Server - Figma & UI/UX Design - MongoDB -
              PostgreSQL - API integration - REST APIs - Heroku, Netlify,
              - Git, Github, Trello.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
