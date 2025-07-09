import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Teams from "./components/Teams";
import CallToAction from "./components/CallToAction";
import Pricing from "./components/Pricing";

function App() {
  const [activePlan, setActivePlan] = useState("monthly");

  function togglePlan() {
    setActivePlan((prev) => (prev === "monthly" ? "yearly" : "monthly"));
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Teams />
      <CallToAction />
      <Pricing activePlan={activePlan} togglePlan={togglePlan} />
      <Footer />
    </div>
  );
}

export default App;
