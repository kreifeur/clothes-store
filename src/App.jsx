import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Category from "./pages/Category";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Adminproducts from "./pages/Adminproducts";
import Adminorder from "./pages/Adminorder";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { useDispatch, useSelector } from "react-redux";
import { menu } from "../src/features/Close/menu";
import { BsX } from "react-icons/bs";
import logo from "../src/assets/logo.png";

const App = () => {
  const dispatch = useDispatch();
  const themenu = useSelector((state) => state.menucounter);
  return (
    <BrowserRouter>
      <div className="w-[100%] min-h-[100vh]  text-[14px]">
        <Navbar />

        <Routes>
          <Route path="/category/:category" element={<Category />}></Route>
          <Route path="/product/:productId" element={<Product />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/admin/products" element={<Adminproducts />}></Route>
          <Route path="/admin/orders" element={<Adminorder />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        {themenu && (
          <div
            onClick={() => dispatch(menu())}
            className="bg-black inset-0 z-[80] fixed flex items-center justify-center md:hidden"
          >
            <ul className="flex flex-col gap-4 text-white text-xl">
              <Link to={"/"}>Home page</Link>
              <Link to={"/contact"}>Contact us</Link>
              <Link to={"/stores"}>Stores</Link>
              <Link to={"/about"}>About us</Link>
              <div className="text-2xl font-bold">Explore our Collections </div>
              <Link to={"category/all"}>All Collections</Link>
              <Link to={"category/men"}>Men Collections</Link>
              <Link to={"category/women"}>Women Collections</Link>
              <Link to={"category/children"}>Children Collections</Link>
              <Link to={"category/accessories"}>Accessories Collections</Link>
            </ul>

            <div className="w-[100%] h-[10vh] text-3xl text-white font-bold absolute top-0 flex items-center justify-between px-4">
              <Link className="w-[20%] flex justify-center" to={"/"}>
               
              </Link>
              <div className="flex items-center justify-center rounded-[50%] border border-white text-4xl hover:cursor-pointer">
                <BsX />
              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
