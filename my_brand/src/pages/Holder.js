import Navigation from "../component/Navigation"
import Homepage from "./Homepage"
import AboutUs from "./Aboutus"
import Service from "./Service"
import Message from "./Message"
import Footer from "../component/Footer"

export default function Holder() {
  return (
<>
<Navigation/>
    <Homepage />
    <AboutUs />
    <Service />
    <Message />
    <Footer />
</>
  );
}
