import React, { useState } from "react";
import left from "./Assets/icon-previous.svg";
import right from "./Assets/icon-next.svg";
import minus from "./Assets/icon-minus.svg";
import plus from "./Assets/icon-plus.svg";
import cart from "./Assets/icon-cart.svg"

const Hero = () => {
  const [value, setValue] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  const data = [
      {
        id: 1,
        main: require("./Assets/image-product-1.jpg"),
        thumbnail: require("./Assets/image-product-1-thumbnail.jpg"),
      },
      {
        id: 2,
        main: require("./Assets/image-product-2.jpg"),
        thumbnail: require("./Assets/image-product-2-thumbnail.jpg"),
      },
      {
        id: 3,
        main: require("./Assets/image-product-3.jpg"),
        thumbnail: require("./Assets/image-product-3-thumbnail.jpg"),
      },
      {
        id: 4,
        main: require("./Assets/image-product-4.jpg"),
        thumbnail: require("./Assets/image-product-4-thumbnail.jpg"),
      },
    ];

    const main = data[value].main;
  return (
    <div className="lg:flex justify-center m-auto hero">
      <div className="flex-1 flex justify-between flex-col items-center">
        <div className="carousel flex justify-center items-center ">
          <img
            src={main}
            alt=""
            className="w-[75%] flex-1 rounded-[15px] "
          />
          <button
            className="absolute left-0 cursor-pointer bg-white p-4 rounded-full lg:hidden"
            onClick={() => {
              if (value >= 1) {
                console.log(value);
                setValue(value - 1);
              } else {
                setValue(3);
              }
            }}
          >
            <img src={left} alt="" />
          </button>
          <button
            className="absolute right-0 cursor-pointer  bg-white p-4 rounded-full lg:hidden xl:hidden "
            onClick={() => {
              if (value <= 2) {
                console.log(value);
                setValue(value + 1);
              } else {
                setValue(0);
              }
            }}
          >
            <img src={right} alt="" />
          </button>
        </div>
        <ul className="hidden lg:flex justify-center items-center pt-5">
                {data.map((thumb,index) => (
                    <li
                    key={thumb.id}
                    onClick={() => setValue(index)}
                    className="flex justify-center hover:opacity-[75%]"
                    >
                        <img src={thumb.thumbnail} 
                            className="w-[80%] rounded-[15%]"
                        alt="" />
                    </li>
                ))}
            </ul>
      </div>
      <div className=" flex-1 flex flex-col justify-evenly hero2">
        <h4 className="text-orange-500 pb-1 tracking-widest">SNEAKER COMPANY</h4>
        <h1 className="text-5xl font-bold pb-1">Fall Limited Edition Sneakers</h1>
        <p className="leading-8">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <h1 className="text-5xl font-bold pl-8 price">
          $125
          <span className="text-3xl pl-5 fade">$250</span>
          <span className="text-xl p-2 ml-5 discount">50%</span>
        </h1>

        <div className="lg:flex items-center justify-evenly px-7">
            <div className="mb-2 ml-16 flex w-[180px] p-5 rounded-lg bg-gray-100 justify-evenly items-center md:ml-48 mt-12 lg:ml-0 lg:mt-3">
                    <button
                    className="rounded-sm"
                    onClick={() => {
                        setProductCount(productCount - 1);
                    }}
                    >
                    <img src={minus} alt="" />
                    </button>
                    <span>{productCount}</span>
                    <button
                    onClick={() => {
                        setProductCount(productCount + 1);
                    }}
                    >
                        <img src={plus} alt="" />
                    </button>
               </div>
               <button
               className="cart"
               onClick={() => {
                setCartItems(productCount);
                setProductCount(0);
               }}
               >
                <span className="px-5">
                    <img src={cart} alt="" className="inline pr-2" />
                    Add to Cart
                </span>
               </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
