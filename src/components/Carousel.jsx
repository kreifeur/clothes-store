import img1 from "../assets/t5.jpg";
import img2 from "../assets/t2.png";
import img3 from "../assets/t3.jpg";
const Carousel = () => {
  return (
    <div  className="h-[90vh]  w-[100%] flex relative gap-8 justify-between hidden">
      <div className="w-[40%]  md:flex hidden items-center justify-center">
        <div className="w-[50%] h-[90%] md:flex flex-col gap-4">
          <img className="h-[70%]" src={img3} alt="" srcset="" />
          <div>1 : T-shirt Nike 200</div>
        </div>
      </div>

      <div className="w-[40%]  md:flex hidden items-center justify-center">
        <div className="w-[50%] h-[90] flex flex-col gap-4">
          <div>2 : Lorem ipsum dolor sit amet consectetur.</div>
          <img className="h-[70%]" src={img1} alt="" srcset="" />
        </div>
      </div>

      <div className="absolute inset-[0] w-[100%]  text-5xl  flex items-center justify-center md:bg-[rgba(0,0,0,0.3)">
        <div className="md:w-[35%] w-[80%] flex flex-col gap-3">
          <div>Exclusive</div>
          <div className="text-right">Collection</div>
          <hr className="border border-2 border-black"/>
          <div className="text-lg text-center">On sale</div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
