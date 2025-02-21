import React, { useState } from "react";
import bg2 from "/bg2.webp";
import { Link } from "react-router-dom";
import Search from "../Components/Search";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleAddressClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" w-full max-h-screen relative ">
      <div className=" banner mt-[70px]">
        <img className=" " src={bg2} alt="banner" />
      </div>

    <div className=" fixed z-100 w-full h-[70px] text-white top-0 left-0 flex justify-around items-center bg-[#102950]">
        <div>
          <ul className=" flex gap-3 text-2xl">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/home">Shop</Link>
            </li>
            <li>
              <Link to="/home">Product</Link>
            </li>
            <li>
              <Link to="/home">Contacts</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className=" text-4xl font-bold">Coderbroo</h2>
        </div>
        <div className=" flex justify-center items-center pt-4 gap-5">
          <Search />
          <div className=" relative">
           <Link to="/cart" ><i class="fa-solid fa-cart-shopping text-red-500 text-2xl cursor-pointer"></i></Link>
            <div className=" text-center absolute w-[20px] h-[20px] top-[-20px] left-0 rounded-full bg-blue-400">
              3
            </div>
          </div>
          <div className=" relative">
            <i
              class="fa-regular fa-address-card text-cyan-600 text-2xl cursor-pointer"
              onClick={handleAddressClick}
            ></i>

            <div
              className={`{hidden absolute top-9 right-[-70px] w-[200px]  bg-white rounded-bl-2xl rounded-br-2xl ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <div className=" p-3 text-left text-black">
                <div className=" flex justify-center items-center text-center font-bold">
                  <img
                    className=" w-[60px] h-[60px] rounded-full border-2 border-b-black"
                    src="/vite.svg"
                    alt="picture"
                  />
                </div>
                <div className=" font-bold pt-3 ">
                  <h1>
                    <i className="fa-solid fa-user text-blue-600 "></i> Manish
                    Kumar
                  </h1>
                  <p>
                    <i className="fa-solid fa-id-badge text-green-400"></i>{" "}
                    manishgga09
                  </p>
                  <div>
                    <i class="fa-solid fa-user-plus text-yellow-400"></i>{" "}
                    <Link to="/signup">signUp</Link>
                  </div>
                  <div>
                    <i class="fa-solid fa-right-to-bracket text-orange-400"></i>{" "}
                    <Link to="/signin">signIn</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    </div>
            <div className=" absolute top-[120px] left-[90px] ">
                <h1 className=" text-7xl font-extrabold font-mono">Winter <br />Big Sale 2025</h1>
            </div>

    </div>
  );
};

export default Nav;
