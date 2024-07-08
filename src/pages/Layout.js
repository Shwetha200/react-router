import React from "react";
import { Link } from "react-router-dom";
function Layout(props) {
  return (
    <>
      <nav className="bg-slate-300 shadow-lg sm:bg-gray-400 md:bg-slate-500 lg:bg-slate-600 xl:bg-slate-700 lg:text-white p-[18px] ">
        <ul className="flex justify-end gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Colorful">Colorful</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Mass">Mass</Link>
          </li>
        </ul>
      </nav>

      <div>{props.children}</div>
    </>
  );
}
export default Layout;
