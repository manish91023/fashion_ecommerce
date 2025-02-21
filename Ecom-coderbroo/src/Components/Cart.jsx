import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);  // State to store the cart items
  const [loading, setLoading] = useState(true);  // State to handle loading state
  const [item,setItem]=useState("");

  // Fetch cart items when the component mounts
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/get-cart");
        const data = await response.json();
        if (response.ok) {
          console.log(data.cart)
          setCart(data.cart); 
          
        } else {
          console.error("Failed to fetch cart items:", data.error);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      } finally {
        setLoading(false);  // Set loading to false when the fetch is complete
      }
    };

    fetchCartItems();  // Call the function to fetch cart items
  }, []);  // Empty dependency array means it runs once when the component mounts

  if (loading) {
    return <p>Loading...</p>;  // Show a loading message while fetching data
  }

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  };

 

  return (
    <div className='w-full min-h-screen bg-[#F77A18] p-4'>
      <h1 className='text-4xl font-bold text-white text-center mb-6'>Your Cart</h1>

      {cart.length === 0 ? (
        <p className='text-xl text-gray-700 text-center'>
          Your cart is currently empty. Add some items to it!
        </p> // Message when the cart is empty
      ) : (
        <div>
          <h2 className='text-2xl font-semibold text-white mb-4'>Your Cart Items:</h2>
          
          {/* Cart Items List */}
          <ul className='space-y-6'>
            {cart.map((item) => (
              <li key={item.id} className='bg-white p-4 rounded-lg shadow-md'>
                <div className='flex items-center justify-between space-x-4'>
                  <div className='flex items-center space-x-4'>
                    <img src={item.image} alt={item.title} className='w-32 h-32 object-cover rounded-md' />
                    <div className='flex-1'>
                      <h3 className='text-xl font-semibold'>{item.title}</h3>
                      <p className='text-sm text-gray-500'>Color: {item.color}, Size: {item.size}</p>
                      <p className='text-lg font-bold text-blue-600'>${item.price}</p>
                    </div>
                  </div>
                  <div className='flex space-x-4'>
                    {/* Edit Button */}
                    <button
                      
                      className=' cursor-pointer text-yellow-500 hover:text-yellow-600 transition duration-200'>
                      Edit
                    </button>
                    {/* Remove Button */}
                    <button
                      
                      className=' cursor-pointer text-red-500 hover:text-red-600 transition duration-200'>
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Total Price */}
          <div className='mt-8 flex justify-between items-center'>
            <p className='text-xl text-white font-semibold'>Total:</p>
            <p className='text-2xl text-white font-bold'>${calculateTotal()}</p>
          </div>

          {/* Checkout Button */}
          <div className='mt-6 text-center'>
            <button className='bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-200'>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
