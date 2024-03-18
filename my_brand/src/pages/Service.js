import Design from "../images/Design.png";
// import website from "../images/website.png";
// import Mobile from "../images/Mobile.png";

export default function Service() {
  return (
    <div className=" m-2 md:m-6 lg:m-8 xl:m-10">
      <h1 className="flex justify-center items-center font-bold text-2xl p-10 font-serif ">My service</h1>
      <div className="flex justify-between flex-wrap gap-y-2">
        <div className="w-full  md:w-[32%] p-1  hover:bg-primary h-fit rounded">
          <img src={Design} alt="design" className="h-1/2 w-full object-cover" />
          <h1 className="font-bold text-primary mt-2 flex justify-center mb-2 font-serif">Web Design</h1>
          <p className="text-justify text-base font-serif">
            Responsive websites built for an optimal user experience that
            achieves your business goals. Hosting your website and work on SEO
          </p>
        </div>
        <div className="flex flex-col w-full  md:w-[32%] p-1  hover:bg-primary h-fit rounded">
          <img src={Design} alt="website" className="h-[50%] w-full object-cover" />
          <h1 className="font-bold text-primary mt-2 flex justify-center mb-2 text-justify">Website development</h1>
          <p className="text-justify text-base font-serif">
            Awesome mobile application built with conscience as your want it to
            be along with the modern technology. Good testing before production
          </p>
        </div>
        <div className=" flex flex-col  w-full  md:w-[32%] p-1 font-serif hover:bg-primary h-fit rounded">
          <img src={Design} alt="Mobile" className="h-1/2 w-full object-cover text-primary" />
          <h1 className="font-bold text-primary mt-2 flex justify-center mb-2">Mobile development</h1>
          <p className="text-justify text-base font-serif">
            Decentralized application built to run on a blockchain or
            peer-to-peer (P2P) network of computers instead of a single
            computer.
          </p>
        </div>
      </div>
    </div>
  );
}
