import React from "react";
import Nav from "../Components/Nav";
import ClothesCollections from "../Components/ClothesCollections";
import img1 from "/discount.webp";
import img2 from "/discount2.webp";
function Home() {
  return (
    <div>
    <div className=" pl-[5%] pr-[5%] w-full h-[1090px]">
      <h2 className=" text-center text-3xl font-bold mt-2">
        Featured Products
      </h2>
      <div className=" w-full h-screen flex  flex-wrap gap-4">
        <ClothesCollections img={img1} price={300} size={34} />
      </div>
    </div>
      <div className=" pl-[5%] pr-[5%] h-[600px] w-full flex justify-center gap-8  items-center mx-auto">
        <div className=" w-[500px] h-[300px] ">
            <img src={img1} alt="discount" />
        </div>
        <div className=" w-[500px] h-[300px] ">
            <img src={img2} alt="discount" />
        </div>
      </div>
      </div>
  );
}

export default Home;
