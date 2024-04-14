const Sidebar = () => {
  return (
    <div className="md:flex hidden flex-col justify-between w-[20vw] h-[58vh]  fixed left-0 px-3">
      <div>
        <div className="text-md font-bold ">Product categories</div>
        <ul>
          <li className="flex items-center gap-2">
            <input type="checkbox" name="" id="" /> T-shirts
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" name="" id="" /> Pants
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" name="" id="" /> Shoes
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" name="" id="" /> Hats
          </li>
        </ul>
      </div>

      <div>
        <div className="text-md font-bold ">Filter by Price</div>
        <div className="flex flex-col gap-1">
          <input
            type="text"
            className="p-1 outline-none border"
            placeholder="Min price"
          />
          <input
            type="text"
            className="p-1 outline-none border"
            placeholder="Max price"
          />
        </div>
      </div>

      <div>
        <div className="text-md font-bold ">Sort by Price</div>
        <ul>
          <li>Lower first</li>
          <li>Heighest first</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
