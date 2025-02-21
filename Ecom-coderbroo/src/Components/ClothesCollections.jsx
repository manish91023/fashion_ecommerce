import React from 'react'
import Clothes from './Clothes'
import image1 from "/bg1.webp"
import image2 from "/bg2.webp"
import image3 from "/bg3.webp"
import image4 from "/b4.jpg"
import image5 from "/bg5.jpg"
import image6 from "/p6.jpg"
import image7 from "/p7.webp"
import image8 from "/p8.webp"
import image9 from "/p9.webp"
import image10 from "/p10.webp"
function ClothesCollections() {
  return (
    
    <div className=' flex flex-wrap justify-center gap-4'>
        <Clothes price={200} title={"New Denim Jeans"} image={image1}/>
        <Clothes price={500} title={"New Denim Jeans"} image={image2}/>
        <Clothes price={600} title={"New Denim Jeans"} image={image9}/>
        <Clothes price={300} title={"New Denim Jeans"} image={image4}/>
        <Clothes price={100} title={"New Denim Jeans"} image={image5}/>
        <Clothes price={300} title={"New Denim Jeans"} image={image6}/>
        <Clothes price={400} title={"New Denim Jeans"} image={image7}/>
        <Clothes price={300} title={"New Denim Jeans"} image={image8}/>
    </div>
  )
}

export default ClothesCollections