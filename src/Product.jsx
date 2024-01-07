import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./Assets/logo.svg";
import iconmenu from "./Assets/iconmenu.svg";
import iconclose from "./Assets/iconclose.svg";
import cart2 from "./Assets/cart2.svg";
import avatar from "./Assets/image-avatar.png";
import product from "./Assets/image-product-1.jpg"
import del from "./Assets/icon-delete.svg"

import left from "./Assets/icon-previous.svg";
import right from "./Assets/icon-next.svg";
import minus from "./Assets/icon-minus.svg";
import plus from "./Assets/icon-plus.svg";
import cart from "./Assets/icon-cart.svg"

const Product = () => {
  const [nav, setNav] = useState(false);
  const [viewCart, setViewCart] = useState(true);

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

  const handleNav = () => {
    setNav(!nav);
  };

  const links = [
    { id: 1, path: "/", text: "Collections" },
    { id: 2, path: "/", text: "Men" },
    { id: 3, path: "/", text: "Women" },
    { id: 4, path: "/", text: "About" },
    { id: 5, path: "/", text: "Contact" },
  ];

  return (
    <>
    <div className="flex items-center h-24 max-w-7xl mx-auto px-6 lg:px-20 lg:max-w-full lg:my-2">
      <div onClick={handleNav}>
        <img src={iconmenu} alt="" />
      </div>
      <div className="ml-10">
        <img src={logo} alt="" />
      </div>

      <div className="flex ml-12 lg:pr-80">
        <ul className="hidden md:hidden lg:flex space-x-4 ">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} className="hover:text-orange-500 nav ">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="ml-16 md:ml-80 lg:ml-96">
        <button
        onClick={() => {
            setViewCart((prev) => !prev);
        }}
        >
            <span
              className={
                cartItems === 0
                  ? "hidden"
                  : "rounded-full bg-red-500 p-1"
              }
            >
              {cartItems === 0 ? "" : 1}
            </span>
      <img src={cart2} alt="" className="h-11 w-11" />
      
      </button>
      </div>
      <div className="h-14 w-14 ml-4">
        <img src={avatar} alt="" />
      </div>
{/* here */}
      <div
            className={
              viewCart
                ? "z-50 cart-div absolute p-5 top-14 right-3 rounded-md shadow-lg w-[390px] h-[330px] bg-white cart-div flex justify-between flex-col   hidden"
                : " z-50 cart-div absolute p-5 top-14 right-3 rounded-md shadow-lg w-[390px] h-[330px] bg-white cart-div flex justify-between flex-col "
            }
          >
           
            {cartItems === 0 ? (
              <h4 className="flex justify-center items-center mt-3 font-bold">
                Your cart is empty
              </h4>
            ) : (
              <>
                <h4 className="p-2 font-bold text-xl">cart</h4>
                <hr />
                <div className="flex justify-center">
                  <img className="w-20 h-20 mt-2 " src={product} alt="" />
                  <p className="p-5 text-zinc-600">
                    fall limited edition... <br /> $125 * {cartItems}
                    <span className=" font-bold text-xl ml-2">
                      {"    "}${cartItems * 125}{" "}
                      <button onClick={() => setCartItems(0)} className="pl-3 ">
                        <img src={del} className="w-4" alt="" />
                      </button>
                    </span>
                  </p>
                </div>
                <button className="text-zinc-50 bg-orange-500 p-5 rounded-lg">
                  Checkout
                </button>
              </>
            )}
          </div>
{/* here */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[50%] h-full border-r  bg-white ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div onClick={handleNav} className="m-4 p-4 ">
          <img src={iconclose} alt="" />
        </div>
        <ul className="uppercase p-4">
          {links.map((link) => (
            <li key={link.id} className="p-4  border-gray-600">
              <NavLink to={link.path} className="nav2 ">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
    <hr />

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
    </>
  );
};

export default Product;
