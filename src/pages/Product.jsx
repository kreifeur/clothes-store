import img7 from "../assets/cover1.jpg";
import img1 from "../assets/t1.jpg";
import img2 from "../assets/t2.png";
import img3 from "../assets/t3.jpg";
import img4 from "../assets/t4.jpg";
import img5 from "../assets/t5.jpg";
import img6 from "../assets/t6.jpg";
import { BsCart } from "react-icons/bs";
import Popup from "../components/Popup";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../features/Close/close";
const Product = () => {
  const dispatch = useDispatch();
  const popup = useSelector((state) => state.counter);
  const [pop, setPop] = useState(false);
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const [order, setOrder] = useState({
    product_name: productId,
    quantity: 1,
    color: "",
    size: "",
    price: "1000",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://kreifeur.pythonanywhere.com/api/products/${productId}/`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center my-[10vh] p-4 w-[100%]">
    <div className=" flex min-h-[85vh] md:h-[85vh] gap-8 flex-col md:flex-row md:w-[70%] w-[100%] p-3">
      <div className="flex-[3] flex  gap-2 h-[100%]">
        <div className="flex-1 md:grid hidden grid-rows-4 gap-2 h-[100%]">
          <div  className=" w-[100%] h-[100%]"></div>
          <div  className=" w-[100%] h-[100%]"></div>
          <div  className=" w-[100%] h-[100%]"></div>
          <div  className=" w-[100%] h-[100%]"></div>
        </div>

        <img src={product.image} className="flex-[2]"></img>
      </div>

      <div className="flex-[2] flex flex-col justify-between gap-3 ">
        <div className="font-bold capitalize text-3xl">{product.name}</div>
        <div className="capitalize text-gray-500 text-md">{product.subcategory}</div>
        <div className="font-bold  text-xl">{product.newprice} DA</div>
        <div className="font-bold">Colors </div>
        <div className="flex gap-2">
          {product.colors.map((e) => {
            return (
              <div
                onClick={() => setOrder({ ...order, color: e.colors.name })}
                /*  */
                className={` border h-[30px] w-[30px] flex item-center justify-center cursor-pointer rounded-[50%] ${
                  e.colors.name === "black"
                    ? "bg-black"
                    : `bg-${e.colors.name}-700`
                }  ${
                  e.colors.name === order.color
                    ? "outline outline-green-400"
                    : `border`
                }`}
                
              ></div>
            );
          })}
        </div>
        <div className="font-bold">Tailles </div>
        <div className="flex gap-2">
          {product.sizes.map((e) => {
            return (
              <div
                onClick={() => setOrder({ ...order, size: e.sizes.name })}
                className={` border h-[30px] w-[45px] flex items-center justify-center cursor-pointer ${
                  e.sizes.name === order.size
                    ? "outline outline-green-400"
                    : 'border' 
                }`}
              >
                {e.sizes.name}
              </div>
            );
          })}
        </div>
      

        <div className="font-bold">Quantity </div>
        
        <div className="flex items-center gap-2 justify-between">
          <div className="h-[35px] border  text-2xl md:w-[35px] w-[20%] flex items-center justify-center cursor-pointer" onClick={()=>setOrder({ ...order, quantity: order.quantity-1 })}>-</div>
        <input
          onChange={(e) => setOrder({ ...order, quantity: e.target.value })}
          value={order.quantity}
          placeholder="Quantity"
          className="border outline-none h-[35px] md:w-[200px] w-[50%] text-center"
          type="number"
          name=""
          id=""
        />
        <div className="h-[35px] border  text-2xl md:w-[35px] w-[20%] flex items-center justify-center cursor-pointer" onClick={()=>setOrder({ ...order, quantity: order.quantity+1 })}>+</div>

        </div>
        <button
          onClick={() => {
            dispatch(close());
          }}
          className="h-[35px] bg-black text-white w-[100%] flex items-center justify-center gap-3"
        >
          <BsCart />
          Buy now
        </button>
        
        <hr />
        <div className="font-bold">Description</div>
        <p>{product.description}</p>
        

        
        {popup ? <Popup Orderdetail={order} /> : null}
      </div>
    </div>
    </div>
  );
};

export default Product;
