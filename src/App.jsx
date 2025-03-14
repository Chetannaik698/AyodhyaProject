import FoodPage from "./compenents/FoodMenu/FoodPage";
import Navbar from "./compenents/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VegmainPage from "./compenents/vegmain-course/VegmainPage";
import RefreshmentPage from "./compenents/Refreshment/RefreshmentPage";
import VegStater from "./compenents/vegstater/VegStater";
import Tagline from "./compenents/Tagline";

function App() {
  return (
    <BrowserRouter>
      <Tagline />
      <Navbar />
      <Routes>
        <Route path="/" element={<FoodPage />}></Route>
        <Route path="/refreshment" element={<RefreshmentPage />}></Route>
        <Route path="/stater" element={<VegStater />}></Route>
        <Route path="/vegmain" element={<VegmainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
