import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

export default function Casestudies(props) {
  return (
    <div className="main_section">
      <h1>{props.title}</h1>
    </div>
  );
}
