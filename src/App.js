import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
     <Hero />
    </div>
    </BrowserRouter>
  );
}

export default App;
