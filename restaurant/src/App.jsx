import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Dishes from "./components/Dishes/Dishes";
import { About } from "./components/About/About";
import Mission from "./components/Mission/Mission";

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <Navbar />
      <Dishes />
      <About />
      <Mission />
    </main>
  );
};

export default App;
