import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboratoin from "./components/Collaboratoin";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import RoudMap from "./components/RoudMap";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboratoin />
        <Services />
        <Pricing />
        <RoudMap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
