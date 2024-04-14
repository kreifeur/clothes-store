import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsX } from "react-icons/bs";

const AddProduct = () => {
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    category: "",
    subcategory: "",
    newprice: 0,
    oldprice: 0,
    image: null,
    colors: [],
    sizes: [],
  });

  const [availableColors, setAvailableColors] = useState([]);
  const [availableSizes, setAvailableSizes] = useState([]);

  useEffect(() => {
    // Fetch available colors and sizes when the component mounts
    fetchAvailableColors();
    fetchAvailableSizes();
  }, []);

  const fetchAvailableColors = async () => {
    try {
      const response = await axios.get("https://kreifeur.pythonanywhere.com//api/colors/");
      setAvailableColors(response.data);
    } catch (error) {
      console.error("Error fetching colors:", error);
    }
  };

  const fetchAvailableSizes = async () => {
    try {
      const response = await axios.get("https://kreifeur.pythonanywhere.com/api/sizes/");
      setAvailableSizes(response.data);
    } catch (error) {
      console.error("Error fetching sizes:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProductData({
      ...productData,
      [name]: name === "image" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", productData.name);
      formData.append("description", productData.description);
      formData.append("category", productData.category);
      formData.append("subcategory", productData.subcategory);
      formData.append("newprice", productData.newprice);
      formData.append("oldprice", productData.oldprice);
      formData.append("image", productData.image);

      // Append color and size data to the form data
      formData.append("colors", colors);
      formData.append("sizes", sizes);

      // Send a POST request to your Django backend to add the product
      console.log(formData);
      await axios
        .post("https://kreifeur.pythonanywhere.com/api/add/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => console.log(res));

      // Clear the form after a successful submission
      setProductData({
        name: "",
        description: "",
        category: "",
        subcategory: "",
        newprice: 0,
        oldprice: 0,
        image: null,
        colors: [],
        sizes: [],
      });
      setColors([]);
      setSizes([]);

      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product. Please try again.");
    }
  };

  return (
    <div className=" text-black bg-red-200 w-[100%] flex flex-col fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="w-[50%] h-[70%] bg-white p-4  relative">
        <form
          className="flex flex-col justify-between h-[100%] items-center"
          onSubmit={handleSubmit}
        >
          <h2>Add Product</h2>
          <label className="w-[90%] flex justify-between">
            Name:
            <input className="w-[70%] border px-2 py-1 outline-none "
              type="text"
              name="name"
              value={productData.name}
              onChange={handleChange}
            />
          </label>
          
          <label className="w-[90%] flex justify-between">
            Description:
            <input className="w-[70%] border px-2 py-1 outline-none "
              name="description"
              value={productData.description}
              onChange={handleChange}
            />
          </label>
          
          <label className="w-[90%] flex justify-between">
            Category:
            <input className="w-[70%] border px-2 py-1 outline-none "
              type="text"
              name="category"
              value={productData.category}
              onChange={handleChange}
            />
          </label>
          
          <label className="w-[90%] flex justify-between">
            Subcategory:
            <input className="w-[70%] border px-2 py-1 outline-none "
              type="text"
              name="subcategory"
              value={productData.subcategory}
              onChange={handleChange}
            />
          </label>
          
          <label className="w-[90%] flex justify-between">
            New Price:
            <input className="w-[70%] border px-2 py-1 outline-none "
              type="number"
              name="newprice"
              value={productData.newprice}
              onChange={handleChange}
            />
          </label>
          
          <label className="w-[90%] flex justify-between">
            Old Price:
            <input className="w-[70%] border px-2 py-1 outline-none "
              type="number"
              name="oldprice"
              value={productData.oldprice}
              onChange={handleChange}
            />
          </label>
          
          <label className="w-[90%] flex justify-between">
            Image:
            <input className="w-[70%] border px-2 py-1 outline-none " type="file" name="image" onChange={handleChange} />
          </label>
          <label className="w-[90%] flex justify-between">
            Colors:
            <div className="flex gap-8">
              {availableColors.map((color) => (
                <div className="flex gap-2">
                <input type="checkbox"
                  onClick={() => setColors([...colors, color.id])}
                  key={color.id}
                  value={color.id}
                />
                  <div>
                  {color.name}
                </div>
                </div>
              ))}
            </div>
          </label>
          <label className="w-[90%] flex justify-between">
            Sizes:
            <div className="flex gap-8">
              {availableSizes.map((size) => (
                <div className="flex gap-2">
                <input type="checkbox"
                  onClick={() => setSizes([...sizes, size.id])}
                  key={size.id}
                  value={size.id}
                />
                  <div>
                  {size.name}
                </div>
                </div>
                
              ))}
            </div>
          </label>
          <button className="py-1 px-4 rounded bg-black text-white" type="submit">Add Product</button>
        </form>
        <button className="absolute bg-red-700 top-0 right-0 w-[30px] h-[30px] text-white flex items-center justify-center text-3xl font-bold">
          <BsX/>
        </button>
      </div>
      
    </div>
  );
};

export default AddProduct;
