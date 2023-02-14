import Navigation from "./component/Navigation"
import Homepage from "./pages/Homepage"
import AboutUs from "./pages/Aboutus"
import Service from "./pages/Service"
import Message from "./pages/Message"
import Footer from "./component/Footer"

export default function App() {
  return (
    <>
    <Navigation/>
    <Homepage />
    <AboutUs />
    <Service />
    <Message />
    <Footer />
    </>

  )
}