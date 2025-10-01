'use-client'

import Image from "next/image";
import HomePage from "./home/HomePage";
import Navbar from "./navbar/navbar";
import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Tools from "./tools/Tools";
// In your Home.js file
export default function Home() {
  return (
    <div className="relative font-sans flex flex-col items-center justify-items-center gap-16">
        <Navbar />
        <HomePage />
        <About />
        <Tools /> 
        <Contact />
        <Footer />
    </div>
  );
}
