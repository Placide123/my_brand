import Design from "../images/Design.png";
import website from "../images/website.png";
import Mobile from "../images/Mobile.png";

export default function Service() {
  return (
    <div className=" m-10 border-2 border-lime-300">
      <h1 className="flex justify-center items-center font-bold text-2xl">My service</h1>
      <div className="flex justify-between flex-wrap">
        <div className="w-full sm:w-auto md:w-1/3 p-3">
          <img src={Design} alt="design" className="h-1/2 w-full object-contain" />
          <h1 className="font-bold text-lime-400 mt-2 flex justify-center mb-2">Web Design</h1>
          <p>
            Responsive websites built for an optimal user experience that
            achieves your business goals. Hosting your website and work on SEO
          </p>
        </div>
        <div className="w-full sm:w-auto md:w-1/3 p-3">
          <img src={website} alt="website" className="h-1/2 w-full object-contain" />
          <h1 className="font-bold text-lime-400 mt-2 flex justify-center mb-2">Website development</h1>
          <p>
            Awesome mobile application built with conscience as your want it to
            be along with the modern technology. Good testing before production
          </p>
        </div>
        <div className="w-full sm:w-auto md:w-1/3 p-3">
          <img src={Mobile} alt="Mobile" className="h-1/2 w-full object-contain" />
          <h1 className="font-bold text-lime-400 mt-2 flex justify-center mb-2">Mobile development</h1>
          <p>
            Decentralized application built to run on a blockchain or
            peer-to-peer (P2P) network of computers instead of a single
            computer.
          </p>
        </div>
      </div>
    </div>
  );
}
