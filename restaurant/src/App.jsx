import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Dishes from "./components/Dishes/Dishes";
import About from "./components/About/About";
import Mission from "./components/Mission/Mission";
import Expertise from "./components/Expertise/Expertise";
import Review from "./components/Review/Review";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <Navbar />
      <Dishes />
      <About />
      <Mission />
      <Expertise />
      <Review />
      <Contact />
    </main>
  );
};

export default App;
