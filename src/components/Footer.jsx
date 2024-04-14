import {
  BsFacebook,
  BsInstagram,
  BsSnapchat,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-[100%] md:h-[22vh] ">
      <div className="w-[100%] flex justify-center bg-black text-white h-[7vh] ">
        <div className="md:w-[60%] w-[90%] flex items-center justify-between">
          <div>Be in touch with us</div>

          <ul className="flex gap-4">
            <BsFacebook />
            <BsInstagram />
            <BsSnapchat />
            <BsTwitter />
            <BsPinterest />
          </ul>
        </div>
      </div>

      <div className="bg-gray-200 px-8 min-h-[15vh] grid  py-2 md:grid-cols-4 grid-cols-2 gap-4">
        <div>
          <div className="font-bold">Categories</div>
          <ul className="text-xs flex gap-2 flex-col md:flex-row">
            <Link to={'category/men'}>Men</Link>
            <Link to={'category/women'}>Women</Link>
            <Link to={'category/children'}>Children</Link>
            <Link to={'category/accessories'}>Accessories</Link>
          </ul>
        </div>
        <div>
          <div className="font-bold">Contact</div>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            maxime distinctio eum eaque cum debitis
          </p>
        </div>
        <div>
          <div className="font-bold">About</div>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            maxime distinctio eum eaque cum debitis
          </p>
        </div>

        <div>
          <div className="font-bold">Developer Contact</div>
          <ul className="text-xs">
            <li>kreifeur669@gmail.com</li>
            <li>+213556347931</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
