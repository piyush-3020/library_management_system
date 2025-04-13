import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";

function Header({ onSearch }) {
  const [menutoggle, setMenutoggle] = useState(false);
  const [search, setSearch] = useState("");

  const toggle = () => setMenutoggle(!menutoggle);
  const closeMenu = () => setMenutoggle(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="header">
      <div className="logo-nav">
        <Link to="/" className="logo">
          LIBRARY
        </Link>
        <ul className="nav-left">
          <li className="left-option">
            <Link to="/roadmap">Roadmap</Link>
          </li>
          <li className="left-option">
            <Link to="/recommendations">Recommendations</Link>
          </li>
        </ul>
      </div>

      <div className="nav-right">
        
        <ul className={menutoggle ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMenu}>
            <Link to="/">Home</Link>
          </li>
          <li className="option" onClick={closeMenu}>
            <Link to="/books">Books</Link>
          </li>
          <li className="option" onClick={closeMenu}>
            <Link to="/signin">SignIn</Link>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={toggle}>
        {menutoggle ? (
          <ClearIcon className="menu-icon" style={{ fontSize: 40 }} />
        ) : (
          <MenuIcon className="menu-icon" style={{ fontSize: 40 }} />
        )}
      </div>
    </div>
  );
}

export default Header;