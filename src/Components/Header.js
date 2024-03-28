import React, { useContext, useState } from "react";
import foodlogo from "../../asset/food logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useContextApi from "../utils/useContextApi";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnstate, setBtnstate] = useState(true);
  const onlinestatus = useOnlineStatus();

  //selector hook
  const cart = useSelector((store) => store.cart.items);
  console.log(cart);
  //usecontext data
  const { userLogged } = useContext(useContextApi);
  return (
    <div className="header flex justify-between shadow-md">
      <div className="logo_container">
        <img className="logo w-24" src={foodlogo} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex gap-6 p-4 m-4 ">
          <li>Online status: {onlinestatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="font-bold text-xl ">
            <Link to="/cart">🛒 - ({cart.length} items)</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="login  bg-green-400 px-2 py-2 border rounded text-white"
            onClick={() => {
              setBtnstate(!btnstate)
            }}
           >Login
          </button>
          <li className="py-2 ">User : {userLogged}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
