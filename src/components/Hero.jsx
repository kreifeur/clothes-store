import img6 from "../assets/he.jpg";
const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${img6})` }}
      className="h-[90vh] w-[100%] bg-red-200 bg-center bg-cover relative"
    >

      {/* page 1 */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.8)] flex items-center flex-col gap-5 justify-center z-[5]">
        <div className="md:w-[40%] w-[90%] h-[50%]  flex flex-col justify-center gap-2 ">
          <div className="text-white font-bold md:text-5xl text-4xl">
            KREIFEUR STORE
          </div>
          <div className="text-white md:text-2xl text-xl text-right">
            Clothes & Accessories
          </div>
        </div>


        {/* next */}
        <div className="flex gap-4 absolute bottom-[10vh]">
          <div className="rounded-[50%] w-[20px] h-[20px] bg-white border-white"></div>
          <div className="rounded-[50%] w-[20px] h-[20px] border border-white"></div>
          <div className="rounded-[50%] w-[20px] h-[20px] border border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
