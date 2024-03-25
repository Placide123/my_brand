import Navigation from "../component/Navigation"
import Homepage from "./Homepage"
import AboutUs from "./Aboutus"
import Service from "./Service"
import Message from "./Message"
import Footer from "../component/Footer"
import Mywork from "../component/Mywork"


export default function Holder() {
  return (
    <div className="flex flex-col gap-y-2 bg-gray-100">
      <Navigation />
      <Homepage />
     <AboutUs />
      <Service />
      <Mywork />
      <Message />
      <Footer /> 
    </div>
  );
}
