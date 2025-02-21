import React from 'react'
import bg1 from "/bg1.webp"
const Clothes = ({price,title,image}) => {

  const handleAddToCart = async () => {
    const item = {
      title,
      price,
      image,
    };

    try {
      // Send POST request to backend to add the item to the cart
      const response = await fetch('http://127.0.0.1:5000/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Item added to cart:', data);
        alert("addded to cart")

      } else {
        console.error('Failed to add item to cart');
        alert("error occured ")
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  return (
    <div className="flex flex-col gap-3 p-4 w-76 bg-[#AEB1B7] rounded-xl shadow-lg">
      {/* Image Container */}
      <div className="relative mx-auto w-[200px] h-[200px] bg-purple-800 rounded-lg overflow-hidden cursor-pointer">
        <img className='  w-full h-full object-cover' src={image} alt="product" />
      </div>

      {/* Title */}
      <div className="text-lg font-semibold text-white">
        <span>{title}</span>
      </div>

      {/* Size Selection */}
      <div className="text-sm text-gray-300">
        <span>Size</span>
        <ul className="flex gap-2 mt-2">
          {[37, 38, 39, 40, 41].map((size) => (
            <li key={size}>
              <button
                className="px-3 py-1 bg-zinc-800 text-white text-xs rounded-md border-2 border-zinc-800 hover:border-white focus:bg-purple-700 focus:border-purple-900 transition"
              >
                {size}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Action - Price and Add to Cart Button */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-xl font-bold text-white">${price}</div>
        <button onClick={handleAddToCart} className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg shadow-md hover:scale-105 transition-transform">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  )
}

export default Clothes