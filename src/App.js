import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      {/* <Services /> */}
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
