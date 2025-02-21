import React from 'react'

function Sign() {
  return (
        <div className='  flex justify-center items-center bg-[#FFC554]'>
          <div className="max-w-[350px] bg-gradient-to-b from-white to-[#f4f7fb] rounded-[40px] p-6 border-4 border-white shadow-lg shadow-[#85bdd7e0] m-5">
          
            <h2 className="text-center font-extrabold text-2xl text-[#1089d3]">Sign In</h2>
      
  
            <form className="mt-5">
      
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                className="w-full bg-white border-none p-4 rounded-xl mt-4 shadow-md shadow-[#cff0ff] focus:outline-none focus:ring-2 focus:ring-[#12b1d1]"
                required
              />
      
              
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="w-full bg-white border-none p-4 rounded-xl mt-4 shadow-md shadow-[#cff0ff] focus:outline-none focus:ring-2 focus:ring-[#12b1d1]"
                required
              />
      
           
              <div className="mt-2 text-left">
                <a href="#" className="text-xs text-[#0099ff]">Forgot Password?</a>
              </div>
      
              
              <button
                type="submit"
                className="w-full font-bold bg-gradient-to-r from-[#1089d3] to-[#12b1d1] text-white py-3 mt-5 rounded-xl shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                Sign In
              </button>
            </form>
      
           
           
          </div>
          </div>
        );
      }
      


export default Sign