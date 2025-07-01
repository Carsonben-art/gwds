import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Services /> */}
      <Footer />
    </div>
  );
}

export default App;
