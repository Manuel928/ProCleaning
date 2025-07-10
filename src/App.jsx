import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Teams from "./components/Teams";
import CallToAction from "./components/CallToAction";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

function App() {
  const [activePlan, setActivePlan] = useState("monthly");

  function setPlan(plan) {
  setActivePlan(plan);
}


  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Teams />
      <CallToAction />
      <Pricing activePlan={activePlan} setPlan={setPlan} />
      <Testimonials/>
      <Blog/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
