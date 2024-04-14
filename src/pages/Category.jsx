import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import img7 from "../assets/cover1.jpg";
import img1 from "../assets/t1.jpg";
import img2 from "../assets/t2.png";
import img3 from "../assets/t3.jpg";
import img4 from "../assets/t4.jpg";
import img5 from "../assets/t5.jpg";
import img6 from "../assets/t6.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const Category = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);
  const { category } = useParams();
  const [subcategory, setSubcategory] = useState("");
  const [subcategorylist, setSubcategorylist] = useState();
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  useEffect(() => {
    const fetCategoriest = async () => {
      try {
        const response = await axios.get(
          `https://kreifeur.pythonanywhere.com/api/category/?category=${category}`
        );
        setSubcategorylist(response.data);
        setSubcategory("");
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetCategoriest();
  }, [category]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (category == 'all'){
          let response = await axios.get(
            `https://kreifeur.pythonanywhere.com/api/products/?subcategory=${subcategory}&min=${min}&max=${max}`
          );
          setProducts(response.data);}
          else{
            let response = await axios.get(
              `https://kreifeur.pythonanywhere.com/api/products/?category=${category}&subcategory=${subcategory}&min=${min}&max=${max}`
              
            );
            setProducts(response.data);
          }
        
        
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [category, subcategory, min, max]);
  return (
    <div className="flex min-h-[90vh] w-[100%] px-2  mt-[10vh]">
      {/* SIDEBAR */}
      <div className="md:flex hidden flex-col justify-between w-[20vw] h-[58vh]  fixed left-0 px-3 py-8">
        <div>
          <div className="text-md font-bold mb-2">Product categories</div>
          <ul>
            {subcategorylist &&
              subcategorylist.subcategories.map((e) => {
                return (
                  <li
                    key={e}
                    className="flex items-center gap-2 capitalize"
                    name="category"
                  >
                    <input
                      id={e}
                      onClick={() =>
                        subcategory != e
                          ? setSubcategory(e)
                          : setSubcategory("")
                      }
                      type="radio"
                      name=""
                      checked={subcategory === e}
                    />{" "}
                    {e}
                  </li>
                );
              })}
          </ul>
        </div>

        <div>
          <div className="text-md font-bold mb-2 ">Filter by Price</div>
          <div className="flex flex-col gap-1">
            <input
              onChange={(e) => setMin(e.target.value)}
              type="number"
              className="py-1 px-2 outline-none border rounded"
              placeholder="Min price"
            />
            <input
              onChange={(e) => setMax(e.target.value)}
              type="number"
              className="py-1 px-2 outline-none border rounded"
              placeholder="Max price"
            />
          </div>
        </div>
      </div>

      {/* <Sidebar /> */}
      <div className="md:w-[80vw] w-[100vw] grid md:grid-cols-4 gid-cols-1 gap-10 md:px-8 px-4 md:ml-[20vw] border-l py-8">
        <div className="md:col-span-4 bg-gray-400 md:h-[25vh] h-[15vh] flex p-2">
          <div className="md:flex flex-1 hidden"></div>
          <div className="flex-[2] flex flex-col justify-center h-[100%] font-bold text-xl">
            <div className="capitalize">{category} New Collections</div>
            <hr className="border border-3 border-black" />
          </div>
        </div>

        {products
          ? products.map((e) => {
              return (
                <div
                  onClick={() => navigate(`/product/${e.id}`)}
                  className="h-[50vh] flex flex-col justify-between cursor-pointer "
                >
                  <img src={e.image} className="h-[80%] w-[100%]" />
                  <div className="font-bold">{e.name}</div>
                  <div className="flex gap-4">
                    {e.oldprice != 0 && (
                      <div className="line-through text-gray-400">
                        {e.oldprice} DA
                      </div>
                    )}
                    <div className="font-bold">{e.newprice} DA</div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Category;
