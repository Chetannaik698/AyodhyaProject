import FoodPage from "./compenents/FoodMenu/FoodPage";
import Navbar from "./compenents/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VegmainPage from "./compenents/vegmain-course/VegmainPage";
import RefreshmentPage from "./compenents/Refreshment/RefreshmentPage";
import VegStater from "./compenents/vegstater/VegStater";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/foodmenu" element={<FoodPage />}></Route>
        <Route path="/refreshment" element={<RefreshmentPage />}></Route>
        <Route path="/stater" element={<VegStater />}></Route>
        <Route path="/vegmain" element={<VegmainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
