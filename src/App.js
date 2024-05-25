import { Route, Routes } from "react-router-dom";
// import "./App.css";
import AppNavbar from "./compnant/AppNavbar";
import Products from "./compnant/Products";
import Cart from "./compnant/Cart";
function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
export default App;
