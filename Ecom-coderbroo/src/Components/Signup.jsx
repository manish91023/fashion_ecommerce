import React, { useState } from 'react'

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { username, email, password };

    try {
      const response = await fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setError('');
        alert("user registered")
      } else {
        setError(data.error);
        setMessage('');
        alert("error during registration")
      }
    } catch (err) {
      setError('Error during registration');
      setMessage('');
    }
  };
        return (
          <div className='  bg-amber-300 flex justify-center items-center'>
          <div className="max-w-[350px] bg-gradient-to-b from-white to-[#f4f7fb] rounded-[40px] p-6 border-4 border-white shadow-lg shadow-[#85bdd7e0] m-5">
            {/* Heading */}
            <h2 className="text-center font-extrabold text-2xl text-[#1089d3]">Sign Up</h2>
      
            {/* Form */}
            <form className="mt-5">
              {/* Full Name Input */}
              <input
              onChange={(e)=>{setUsername(e.target.value)}}
                type="text"
                placeholder="Full Name"
                name="username"
                className="w-full bg-white border-none p-4 rounded-xl mt-4 shadow-md shadow-[#cff0ff] focus:outline-none focus:ring-2 focus:ring-[#12b1d1]"
                required
              />
      
             
              <input
              onChange={(e)=>{setEmail(e.target.value)}}
                type="email"
                placeholder="E-mail"
                name="email"
                className="w-full bg-white border-none p-4 rounded-xl mt-4 shadow-md shadow-[#cff0ff] focus:outline-none focus:ring-2 focus:ring-[#12b1d1]"
                required
              />
      
           
              <input
              onChange={(e)=>{setPassword(e.target.value)}}
                type="password"
                placeholder="Password"
                name="password"
                className="w-full bg-white border-none p-4 rounded-xl mt-4 shadow-md shadow-[#cff0ff] focus:outline-none focus:ring-2 focus:ring-[#12b1d1]"
                required
              />
      
            
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirm-password"
                className="w-full bg-white border-none p-4 rounded-xl mt-4 shadow-md shadow-[#cff0ff] focus:outline-none focus:ring-2 focus:ring-[#12b1d1]"
                required
              />
      
           
              <div className="mt-3 flex items-center gap-2">
                <input type="checkbox" id="terms" required className="w-4 h-4" />
                <label htmlFor="terms" className="text-xs text-gray-600">
                  I agree to the <a href="#" className="text-[#0099ff]">Terms & Conditions</a>
                </label>
              </div>
      
         
              <button
                type="submit"
                className="w-full font-bold bg-gradient-to-r from-[#1089d3] to-[#12b1d1] text-white py-3 mt-5 rounded-xl shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                Sign Up
              </button>
            </form>
      
           
      
        
            <div className="mt-4 text-center">
              <a href="#" className="text-xs text-[#0099ff]">Already have an account? Sign In</a>
            </div>
          </div>
          </div>
        );
      }
      


export default Signup