import { BrowserRouter } from "react-router-dom";
import Product from "./Product";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Product />
    </div>
    </BrowserRouter>
  );
}

export default App;
