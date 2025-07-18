import { LOGO_URL } from "../utils/constants";
import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnnameReact, setbtnnameReact ] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-amber-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-30" src={LOGO_URL} alt="App Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4"> Online Status : {onlineStatus ? "✅" : "🔴" } </li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to ="/contact">Contact Us</Link></li>
          <li className="px-4 font-bold text-xl"><Link to='/cart'>Cart - ({cartItems.length} items)</Link></li>
          <button 
          className="px-4"
          onClick={() =>{
            setbtnnameReact(btnnameReact === "Login" ? "Logout" : "Login");
          }}>{btnnameReact}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;