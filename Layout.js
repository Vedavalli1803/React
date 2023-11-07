import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Lofo from "./Lofo.png";
import Home from "./Home.png";
import Homebottom from "./Homebottom.png";
import "./Layout.css";
import { useState } from "react";

export default function Layout() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    setOpen(false);
  };

  const handleMenuTwo = () => {
    // do something
    setOpen(false);
  };

  const Dropdown = ({ open, trigger, menu }) => {
    return (
      <div className="dropdown">
        {trigger}
        {open ? (
          <ul className="menu">
            {menu.map((menuItem, index) => (
              <li key={index} className="menu-item">
                {menuItem}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  };

  return (
    <div className="main_section">
      <div className="top">
        <img src={Lofo} className="logo" id="logo"></img>
        <Link to="/Softwareservices">Software services</Link>
        <Link to="/Casestudies">Case studies</Link>
        <Link to="/Pricing">Pricing</Link>
        <Link to="/Aboutus">About us</Link>
        <Link to="/Blog">Blog</Link>
        <Dropdown
          open={open}
          trigger={
            <button className="buttonus" id="buttonus" onClick={handleOpen}>
              Contact Us
            </button>
          }
          menu={[
            <button onClick={handleMenuOne}>Call</button>,
            <button onClick={handleMenuTwo}>Chat</button>,
          ]}
        />
      </div>
      <Outlet />
      <div className="middle">
        <div className="middleleft">
          <h1>
            Nearshore & Offshore Software Development Centers for companies in
            Western Europe & USA
          </h1>
          <br />
          <p>
            Whenever you are looking for a full-product development partner, a
            group of engineers, or a trusted party who will help you establish
            your own IT department in Poland – we got you covered.
          </p>
          <button className="buttoncall" id="buttoncall">
            Schedule a call
          </button>
        </div>
        <div className="middleright">
          <img src={Home} className="img" id="img"></img>
        </div>
        <div className="middlebottom">
          <img src={Homebottom} className="img_bottom" id="img_bottom"></img>
        </div>
      </div>
    </div>
  );
}
