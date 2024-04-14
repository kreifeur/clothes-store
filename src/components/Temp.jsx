// ProductForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [productName, setProductName] = useState('ff');
  const [desc, setDesc] = useState('nnnnnn');
  const [colors, setcolors] = useState([1,2]);
  const [price, setPrice] = useState(19);
  const [selectedColors, setSelectedColors] = useState([]);
  const [availableColors, setAvailableColors] = useState([]);

  useEffect(() => {
    // Fetch available colors when the component mounts
    fetchAvailableColors();
  }, []);

  const fetchAvailableColors = async () => {
    try {
      const response = await axios.get('https://kreifeur.pythonanywhere.com//api/colors/');
      setAvailableColors(response.data);
    } catch (error) {
      console.error('Error fetching colors:', error);
    }
  };

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleColorChange = (e) => {
    const colorId = parseInt(e.target.value);
    const color = availableColors.find((c) => c.id === colorId);

    setSelectedColors((prevColors) => [...prevColors, color]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your Django backend to add the product
      await axios.post('https://kreifeur.pythonanywhere.com//api/products/', {
        name: productName,
        description:desc,
        newprice:price,
        colors: colors
      });

      // Clear the form after a successful submission
      setProductName('');
      setSelectedColors([]);

      alert('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={handleProductNameChange}
          />
        </label>

        <br />
        <label>
          Product description:
          <input
            type="text"
            
          />
        </label>
        <br />


        <br />
        <label>
          Product price:
          <input
            type="number"
            
          />
        </label>
        <br />


        <label>
          Select Colors:
          <select multiple onChange={handleColorChange}>
            {availableColors.map((color) => (
              <option key={color.id} value={color.id}>
                {color.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
