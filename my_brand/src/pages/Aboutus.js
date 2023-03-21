import Placide from "../images/placidebio.png";

export default function AboutUs() {
  return (
    <div className="md:m-6 xl:m-10 md:h-[90vh] flex flex-col m-0 h-[130vh] justify-center items-center">
      <h2 className="flex justify-center md:text-4xl font-bold md:mb-1 text-2xl mb-2 md:p-24 mt-2">About Me</h2>
      <div className="flex flex-col  md:flex-row justify-center items-center">
        <div className="flex justify-center items-center md:justify-center md:items-center lg:w-10/12">
          <img src={Placide} alt="bio" className="cursor-pointer filter grayscale hover:grayscale-0 object-contain w-10/12 h-[50vh]  rounded md:rounded-full md:object-contain md:h-[60%] border-primary border-4 border-none" />
        </div>
        <div className="flex justify-center items-center md:h-1/2">
          <p className="md:text-base xl:text-xl text-sm font-serif p-2 w-11/12 md:leading-relaxed text-justify">
            I am a Software Engineer with a love of collaborating with great
            minds in achieving realistic solutions. I graduated from the 
            <span className="font-bold text-primary ml-1">University of Rwanda - College of Science and Technology</span> in 2022
            with a bachelor's degree in <span className="font-bold text-primary"> Computer Engineering.</span> I have experience
            in working with startup and intermediate businesses in Tech. I
            attended <span className="font-bold text-primary">Andela </span>, a program that identifies and develops African
            developers to become the best software engineers. I worked on the
            Andela Rwanda internal product, My responsibility in my team was
            front-end development, back-end development, testing coverage,
            resolving conflict, and code reviews and deployment.
            <p className="mt-3 text-primary font-bold font-serif text-sm md:text-base xl:text-xl justify-center">
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
