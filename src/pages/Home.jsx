import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Features from "../components/Features";
import axios from "axios";
import Hero from "../components/Hero";

const Home = () => {
    const [newProducts, setNewProducts]= useState([])
    const [category, setCategory]= useState('men')
  useEffect(()=>{
    /* new products -- update the url later */
    axios.get(`https://kreifeur.pythonanywhere.com/api/products/?category=${category}`).then((res)=>setNewProducts(res.data))
  })
    return ( <div className="my-[10vh] w-[100%] min-h-[85vh] flex flex-col gap-[5vh] items-center">
        <div className="flex w-[100%]">
        <Carousel/>
        <Hero/>

        </div>
        
        <div className="  w-[80%] text-black flex items-center justify-between">
            <div className="text-3xl mt-[7vh] text-center w-[100%] md:text-left  ">NEW PRODUCTS</div>
            {/* <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam harum, ex accusamus perferendis hic modi?</div> */}
        </div>
        <Features Products={newProducts.slice(0, 4)}/>
        <div className="  w-[80%] text-black flex items-center justify-between">
            <div className="text-3xl mt-[7vh] text-center w-[100%] md:text-left  ">EXPLORE OUR COLLECTIONS</div>
            {/* <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam harum, ex accusamus perferendis hic modi?</div> */}
        </div>
        <Categories/>
        <div className="  w-[80%] text-black flex items-center justify-between">
            <div className="text-3xl mt-[7vh] text-center w-[100%] md:text-left  ">TREND PRODUCTS</div>
            {/* <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam harum, ex accusamus perferendis hic modi?</div> */}
        </div>
        <Features Products={newProducts.slice(0, 4)}/>
    </div> );
}
 
export default Home;