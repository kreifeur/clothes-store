import axios from "axios";
import { useEffect, useState } from "react";

const Adminorder = () => {
  const [orders, setorders] = useState();
  useEffect(() => {
    const fetCategoriest = async () => {
      try {
        const response = await axios.get(`https://kreifeur.pythonanywhere.com/api/orders/`);
        setorders(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetCategoriest();
  }, [orders]);
  return (
    <div className="my-[10vh] min-h-[85vh] w-[100%] flex flex-col items-center ">
      {orders &&
        orders.map((e) => {
          return (
            <dir className="flex justify-between items-center w-[90%] h-[10vh] border-b items-center">
              <div>{e.adress}</div>
              <div>{e.phone}</div>
              <div>{e.customer_name}</div>
              <div>
                {e.product_name}
              </div>

              <div>
                {e.size}
              </div>

              <div>{e.color}</div>
              <div>{e.quantity}</div>
              <div>{e.price}</div>
              <div className="bg-yellow-700 p-2 text-white font-bold">
                Modifier
              </div>

              <button
                onClick={() => {
                  axios.delete(`https://kreifeur.pythonanywhere.com/api/orders/${e.id}/`);
                  
                }}
                className="bg-red-700 p-2 text-white font-bold"
              >
                Supprimer
              </button>
              
            </dir>

                
          );
        })}
    </div>
  );
};

export default Adminorder;
