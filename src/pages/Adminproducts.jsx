import axios from "axios";
import { useEffect, useState } from "react";
import Addproduct from "../components/Addproduct";
import ProductForm from "../components/Temp";

const Adminproducts = () => {
  const [products, setProducts] = useState();
  const [supp, setSupp] = useState(true);
  useEffect(() => {
    const fetCategoriest = async () => {
      try {
        const response = await axios.get(`https://kreifeur.pythonanywhere.com/api/products/`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetCategoriest();
  }, [supp]);
  return (
    <div className="my-[10vh] min-h-[85vh] w-[100%] flex flex-col gap-4 items-center ">
      {products &&
        products.map((e) => {
          return (
            <dir className="flex justify-between items-center w-[90%] h-[20vh]">
              <img
                className="h-[20vh] w-[20vh]"
                src={e.image}
                alt=""
                srcset=""
              />
              <div>{e.id}</div>
              <div>{e.category}</div>
              <div>{e.subcategory}</div>
              <div>
                {e.colors.map((color) => {
                  return (
                    <div>
                      <div>{color.colors.name}</div>
                    </div>
                  );
                })}
              </div>

              <div>
                {e.sizes.map((size) => {
                  return (
                    <div>
                      <div>{size.sizes.name}</div>
                    </div>
                  );
                })}
              </div>

              <div>{e.oldprice}</div>

              <div>{e.newprice}</div>
              <div className="bg-yellow-700 p-2 text-white font-bold">
                Modifier
              </div>

              <div
                onClick={() => {
                  axios.delete(`https://kreifeur.pythonanywhere.com/api/products/${e.id}/`);
                  setSupp(!supp)
                }}
                className="bg-red-700 p-2 text-white font-bold"
              >
                Supprimer
              </div>

              
            </dir>
          );
        })}
        <Addproduct/>
        {/* <ProductForm/> */}
    </div>
  );
};

export default Adminproducts;
