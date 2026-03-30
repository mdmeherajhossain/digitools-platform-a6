import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import productsData from "./data/products.json"; 
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Stats from "./components/stats";
import ProductCard from "./components/productCard";

function App() {
  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [isActive, setIsActive] = useState("products");


  

  return (
    <div className="max-w-[1440px] mx-auto font-poppins">
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />
  

      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />
    </div>
  );
}

export default App;