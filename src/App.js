import About from "./components/About/About";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import NavBar from "./components/HomeScreen/NavBar";
import Options from "./components/Options/Options";
import Artists from "./components/Artists/Artists";
import  './main.css';
import Gallery from "./components/Gallery/Gallery";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeScreen />
      <About />
      <Options />
      <Artists />
      <Gallery />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
