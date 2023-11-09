import About from "./components/About/About";
import HomeScreen from "./components/HomeScreen/HomeScreen";
// import NavBar from "./components/HomeScreen/NavBar";
import Options from "./components/Options/Options";
import Artists from "./components/Artists/Artists";
import  './main.css';
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <HomeScreen />
      <About />
      <Options />
      <Artists />
      <Gallery />
    </div>
  );
}

export default App;
