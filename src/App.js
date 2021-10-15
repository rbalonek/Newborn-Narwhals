import "./App.css";
import Bubbles from "./components/Bubbles/Bubbles";
import Nav from "./components/Nav/Nav";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionTwo from "./components/SectionTwo/SectionTwo";

function App() {
  return (
    <div className="App">
      <Nav />
      <SectionOne />

      <SectionTwo />
      <Bubbles />
    </div>
  );
}

export default App;
