import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/home/Hero";
import OurBenefits from "./components/home/OurBenefits";
import Services from "./components/home/Services";
import WhoWeAre from "./components/home/WhoWeAre";
import WhyUs from "./components/home/WhyUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <WhoWeAre />
      <WhyUs />
      <OurBenefits />
      <Footer />
    </div>
  );
}

export default App;
