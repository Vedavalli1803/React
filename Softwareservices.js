import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

export default function Softwareservices(props) {
  return (
    <div className="main_section">
      <div className="middle">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}
