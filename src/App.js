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

function App() {

  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);;
  return (
    <div className="bg-gray-300"
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500"
    >
      <Navbar />
      <Hero />
      <AiAssisted />
      <NewsAndEvent />
      <VisionAndMission />
      <Vajra/>
      <BigData/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
