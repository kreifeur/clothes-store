import axios from "axios";
import { useEffect, useState } from "react";
import { BsCart, BsX } from "react-icons/bs";
import data from "../../algeria_cities.json";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../features/Close/close";

const Popup = (props) => {
  const dispatch = useDispatch();
  const popup = useSelector((state) => state.counter);
  const [wilayas, setWilayas] = useState([]);
  const [order, setOrder] = useState(props.Orderdetail);
  useEffect(() => {
    const uniqueWilayaNames = [
      ...new Set(data.map((entry) => entry.wilaya_name_ascii)),
    ];
    setWilayas(uniqueWilayaNames);
  }, []);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-[20]">
      <div className="md:w-[35%] md:h-[75%]  bg-white py-4 px-8  flex flex-col justify-between w-[90%] h-[60vh] relative ">
        <div className="text-xl font-bold capitalize">Information order</div>
        <p>to complete the order your </p>
        <p className="font-bold">Full Name :</p>
        <input
          value={order.customer_name}
          onChange={(e) =>
            setOrder({ ...order, customer_name: e.target.value })
          }
          placeholder="full name"
          className="p-2 border outline-none"
          type="text"
          name=""
          id=""
        />
        <p className="font-bold">Phone number :</p>
        <input
          value={order.phone}
          onChange={(e) => setOrder({ ...order, phone: e.target.value })}
          placeholder="phone number"
          className="p-2 border outline-none"
          type="text"
          name=""
          id=""
        />

        <label for="cities" class="font-bold">
          Select a city
        </label>
        <select
          value={order.city}
          onChange={(e) => setOrder({ ...order, city: e.target.value })}
          id="cities"
          class="p-2 border outline-none"
        >
          <option selected>Choose city</option>
          {wilayas.map((e) => (
            <option>{e}</option>
          ))}
        </select>

        <label for="adress" className="font-bold">
          Select an adrees
        </label>
        <select
          onChange={(e) => setOrder({ ...order, adress: e.target.value })}
          value={order.adress}
          id="adress"
          class=" border p-2 border outline-none"
        >
          <option selected>Choose an adress</option>
          {data.map((e) =>
            e.wilaya_name_ascii == order.city ? (
              <option>{e.commune_name_ascii}</option>
            ) : null
          )}
        </select>

        <button
          onClick={() => {
            axios.post("https://kreifeur.pythonanywhere.com//api/orders/", order);
            setOrder({ ...order, phone: "", customer_name: "" });
            dispatch(close())
          }}
          className="h-[35px] bg-black text-white  w-[100%] flex items-center justify-center gap-3"
        >
          <BsCart />
          Buy now
        </button>


        {/* close button  */}

        <button onClick={()=>dispatch(close())} className="absolute bg-red-700 top-0 right-0 w-[30px] h-[30px] text-white flex items-center justify-center text-3xl font-bold">
          <BsX/>
        </button>
      </div>
    </div>
  );
};

export default Popup;
