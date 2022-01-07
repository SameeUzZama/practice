import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { DataList } from "./components/Axios/DataList";
// import { ClassLifeComp02 } from "./components/ClassComponents/ClassLifeComp02";
// import { ApiPrac04 } from "./components/Axios/ApiPac04";
// import { ApiPrac05 } from "./components/Axios/ApiPrac05";
import { ClassLifeComp } from "./components/ClassComponents/ClassLifeComp";
// import { ApiCallPractice } from "./components/Axios/ApiCallPractice";
// import { ApiPrac01 } from "./components/Axios/ApiPrac01";
// import { ApiPractice } from "./components/AxiosPractice/ApiPractice";
// import { ApiCall } from "./components/Axios/ApiCall";
// import { ClassComp } from "./components/ClassComponents/ClassComp";
// import { Funcomp } from "./components/FuntionalComponent/Funcomp";
import { ProductList } from "./components/Products/ProductList";
import { NavBar } from "./NavBar";
import { ToggleClr } from "./JS/ToggleClor";
// import { BikeList } from "./components/SalesApp/BikeList";
// import { DataList } from "./components/SalesApp/DataList";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ClassLifeComp />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/backclr" element={<ToggleClr />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
