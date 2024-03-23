import { useState } from 'react';
import {LOGO_URL} from '../utils/constants'
const Header = () => {

  const [btnstate,setBtnstate] = useState(true);
  return (
    <div className="header">
      <div className="logo_container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              setBtnstate(!btnstate);
            }}
          >
            {btnstate? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;