import cat1 from '../assets/men.jpg'
import cat2 from '../assets/woman.jpg'
import cat3 from '../assets/children.jpg'
import cat4 from '../assets/acc.jpg'
import { Link } from 'react-router-dom'
const Categories = () => {
  return (
    <div className="h-[70vh] grid md:grid-cols-3 grid-cols-1 gap-4 w-[100%]" id='categories'>
      <Link to={"category/women"} style={{backgroundImage:`url(${cat2})`}} className="w-[100%] h-[100%] bg-gray-300 bg-cover bg-center relative ">
          <div className='absolute inset-0 bg-[rgba(0,0,0,0.8)] flex items-center justify-center text-2xl text-white'>
            WOMEN COLLECTION
          </div>
      </Link>
      <Link to={"category/children"}style={{backgroundImage:`url(${cat3})`}} className="w-[100%] h-[100%] bg-gray-300 bg-cover bg-center relative">
      <div className='absolute inset-0 bg-[rgba(0,0,0,0.8)] flex items-center justify-center text-2xl text-white'>
            CHILDREN COLLECTION
          </div>
      </Link>
      <Link to={"category/men"} style={{backgroundImage:`url(${cat1})`}} className="w-[100%] h-[100%] bg-gray-300 md:row-span-2 bg-center bg-cover relative">
      <div className='absolute inset-0 bg-[rgba(0,0,0,0.8)] flex items-center justify-center text-2xl text-white'>
            MEN COLLECTION
          </div>
      </Link>
      <Link to={"category/accessories"} style={{backgroundImage:`url(${cat4})`}} className="w-[100%] h-[100%] bg-gray-300 md:col-span-2 bg-center bg-cover relative">
      <div className='absolute inset-0 bg-[rgba(0,0,0,0.8)] flex items-center justify-center text-2xl text-white'>
            ACCESSORIES COLLECTION
          </div>
      </Link>
      
    </div>
  );
};

export default Categories;
