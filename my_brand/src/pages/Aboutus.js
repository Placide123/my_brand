import Placide from "../images/placidebio.png";

export default function AboutUs() {
  return (
    <div className=" m-10 border-2 border-lime-300">
      <h2 className="flex justify-center text-2xl font-bold mb-1">About Me</h2>
      <div className="flex flex-col sm:flex-row">
        <div className="flex justify-center items-center mb-5 sm:mb-0">
          <img src={Placide} alt="bio" className="object-cover h-2/5 w-3/5 rounded-full cursor-pointer filter grayscale hover:grayscale-0" />
        </div>
        <div className="flex justify-center items-center">
          <p className="text-lg">
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
            <p className="mt-3 text-lime-400">
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
