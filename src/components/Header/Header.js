import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import { signOut } from "firebase/auth";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        {user?.uid && <Link to="/user-information">Emon Morol</Link>}
        {user?.uid ? (
          <Link
            to="/login"
            onClick={() => {
              signOut(auth);
            }}
          >
            Logout
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
