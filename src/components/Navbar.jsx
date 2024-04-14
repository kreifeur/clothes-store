import { BsAlignBottom, BsSearch } from "react-icons/bs";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { menu } from "../features/Close/menu";
const Navbar = () => {
  const dispatch = useDispatch();
  const themenu = useSelector((state) => state.menucounter);
  return (
    <div className="flex items-center justify-between h-[10vh] w-[100%] px-4 fixed top-0 bg-white z-[10] border-b-[1px]  ">
      {/* categories */}
      <ul className="md:flex hidden gap-4 items-center w-[40%] ">
        <Link to={"category/all"}>All</Link>
        <Link to={"category/men"}>Men</Link>
        <Link to={"category/women"}>Women</Link>
        <Link to={"category/children"}>Children</Link>
        <Link to={"category/accessories"}>Accessories</Link>
      </ul>

      {/* logo */}
      {/* <Link to={"/"} className="text-lg font-bold">KREIFEUR</Link> */}
      <Link className="w-[20%] flex justify-center" to={"/"}>
        <img src={logo} className="md:h-[5vh] h-[4vh]" alt="" srcset="" />
      </Link>

      {/* navigation */}
      <div onClick={() => dispatch(menu())} className="md:hidden text-4xl hover:cursor-pointer">
        <MdMenu />
      </div>
      <ul className="md:flex hidden gap-4 items-center w-[40%]  justify-end">
        <Link to={"/"}>Home page</Link>
        <Link to={"/contact"}>Contact us</Link>
        <Link to={"/stores"}>Stores</Link>
        <Link to={"/about"}>About us</Link>
        <li className="flex items-center justify-center">
          <BsSearch />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
