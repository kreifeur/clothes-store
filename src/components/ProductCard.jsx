import { useNavigate } from "react-router-dom";
import img2 from "../assets/t5.jpg";
const ProductCard = (props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(`/product/${props.productInfo.id}`, {
          state: {
            userId: props.productInfo.id,
          },
        })
      }
      className="h-[50vh] flex flex-col justify-between cursor-pointer w-[100%] overflow-hidden"
    >
      <img src={props.productInfo.image} className="h-[80%] w-[100%] hover:scale-150 duration-150 ease-in-out" />
      <div className="font-bold">{props.productInfo.name}</div>
      <div className="flex gap-4">
        {props.productInfo.oldprice != 0 && <div className="line-through text-gray-400">
          {props.productInfo.oldprice} DA
        </div>}
        <div className="font-bold">{props.productInfo.newprice} DA</div>
      </div>
    </div>
  );
};

export default ProductCard;
