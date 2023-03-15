import Placide from "../images/placidebio.png";

export default function AboutUs() {
  return (
    <div className=" m-10 border-2 border-primary h-[90vh] flex flex-col sm:m-0 sm:h-[110vh]">
      <h2 className="flex justify-center text-4xl font-bold mb-1 sm:text-2xl sm:mb-2">About Me</h2>
      <div className="flex flex-row sm:flex-col">
        <div className=" mb-5 sm:mb-0 ">
          <img src={Placide} alt="bio" className="object-contain h-96 w-96 rounded-full cursor-pointer filter grayscale hover:grayscale-0 sm:h-72" />
        </div>
        <div className="flex justify-center items-center">
          <p className="text-lg sm:text-sm font-serif sm:p-2">
            I am a Software Engineer with a love of collaborating with great
            minds in achieving realistic solutions. I graduated from the
            University of Rwanda - College of Science and Technology in 2022
            with a bachelor's degree in Computer Engineering. I have experience
            in working with startup and intermediate businesses in Tech. I
            attended Andela, a program that identifies and develops African
            developers to become the best software engineers. I worked on the
            Andela Rwanda internal product, My responsibility in my team was
            front-end development, back-end development, testing coverage,
            resolving conflict, and code reviews and deployment.
            <p className="mt-3 text-primary font-bold font-serif ">
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
