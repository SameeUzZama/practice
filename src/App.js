import "./App.css";
import { ClassComp } from "./components/ClassComponents/ClassComp";
import { Funcomp } from "./components/FuntionalComponent/Funcomp";
import { ProductList } from "./components/Products/ProductList";

function App() {
  return (
    <div className="App">
      <ClassComp />
      <Funcomp />
      <ProductList />
    </div>
  );
}

export default App;
