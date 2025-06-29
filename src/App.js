import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";
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
    </div>
  );
}

export default App;
