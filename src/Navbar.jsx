import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./Assets/logo.svg";
import iconmenu from "./Assets/iconmenu.svg";
import iconclose from "./Assets/iconclose.svg";
import cart2 from "./Assets/cart2.svg";
import avatar from "./Assets/image-avatar.png";
import product from "./Assets/image-product-1.jpg"
import del from "./Assets/icon-delete.svg"

const Navbar = (productCount) => {
  const [nav, setNav] = useState(false);
  const [cartItems, setCartItems] = useState(1);
  const [viewCart, setViewCart] = useState(true);

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
                <hr className="bg-black" />
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
                <button className="text-zinc-50 bg-orange-500 p-5 rounded-lg check-out">
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
    </>
  );
};

export default Navbar;
