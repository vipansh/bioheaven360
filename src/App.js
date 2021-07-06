import "./App.css";
import React from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/mainSection/Hero";
import AiAssisted from "./components/mainSection/AiAssisted";
import NewsAndEvent from "./components/mainSection/NewsAndEvent";
import VisionAndMission from "./components/mainSection/VisionAndMission";
import ContactUs from "./components/mainSection/ContactUs";
import Footer from "./components/mainSection/Footer";
import Vajra from "./components/mainSection/Vajra";
import BigData from "./components/mainSection/BigData";
import AboutUs from "./components/mainSection/AboutUs";
import Profile from "./components/mainSection/Profile";

function App() {

  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);;
  return (
    <div className="bg-blue-600"
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500"
    >
      <Navbar />
      <Hero />
      <Profile/>
      <AboutUs/>
      <Vajra/>
      <BigData/>
      <AiAssisted />
      <NewsAndEvent />
      <VisionAndMission />
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
