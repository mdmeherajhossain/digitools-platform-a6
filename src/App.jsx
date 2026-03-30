import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import productsData from "./data/products.json"; 
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Stats from "./components/stats";
import ProductCard from "./components/productCard";
import Steps from "./components/steps";
import Pricing from "./components/pricing";
import Footer from "./components/footer";

function App() {
  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [isActive, setIsActive] = useState("products");

  const handleAddToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      toast.warning("Already added to cart!");
    } else {
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart!`);
    }
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.info("Removed from cart");
  };

  const handleCheckout = () => {
    setCart([]);
    setIsActive("products");
    toast.success("Purchase successful!");
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="max-w-[1440px] mx-auto font-poppins">
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />
      
      {/* Products vs Cart Toggle Buttons */}
      <div className="text-center my-20">
        <h2 className="text-4xl font-bold mb-4">Premium Digital Tools</h2>
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

      {/* Main Content Area */}
      <div className="px-4 lg:px-10 pb-20">
        {isActive === "products" ? (
          <>
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} handleAddToCart={handleAddToCart} />
              ))}
            </div>

          
            <Steps />
            <Pricing />
          </>
        ) : (
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold mb-8">Your Cart</h3>
            {cart.length === 0 ? (
              <p className="text-center py-20 text-gray-400 text-xl font-medium">Your cart is empty! 🛒</p>
            ) : (
              <>
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center border p-5 rounded-3xl bg-gray-50">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl bg-white p-3 rounded-2xl shadow-sm">{item.icon}</span>
                        <div>
                          <h4 className="font-bold text-lg">{item.name}</h4>
                          <p className="text-gray-500">${item.price}</p>
                        </div>
                      </div>
                      <button onClick={() => handleRemove(item.id)} className="text-rose-500 font-bold hover:underline">Remove</button>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-6 border-t flex justify-between text-2xl font-bold">
                  <span>Total:</span><span>${totalPrice}</span>
                </div>
                <button onClick={handleCheckout} className="btn w-full bg-[#9538E2] text-white rounded-full mt-8 h-16 text-lg border-none">
                  Proceed to Checkout
                </button>
              </>
            )}
          </div>
        )}
      </div>

      <Footer />

      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />
    </div>
  );
}

export default App;