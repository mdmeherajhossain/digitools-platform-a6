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
        <div className="text-center my-20">
        <h2 className="text-4xl font-bold mb-4">Premium Digital Tools</h2>
        <p className="text-gray-500 mb-10 max-w-lg mx-auto">
          Choose from our curated collection to boost your productivity.
        </p>
        
        <div className="inline-flex bg-gray-100 p-2 rounded-2xl gap-2">

          <button 
            onClick={() => setIsActive("products")} 
            className={`btn rounded-xl px-12 ${isActive === "products" ? "bg-[#9538E2] text-white border-none" : "btn-ghost text-gray-500"}`}
          >
            Products
          </button>
          
          <button 
            onClick={() => setIsActive("cart")} 
            className={`btn rounded-xl px-12 ${isActive === "cart" ? "bg-[#9538E2] text-white border-none" : "btn-ghost text-gray-500"}`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>
  

      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />
    </div>
  );
}

export default App;