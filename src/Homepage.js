import React from "react";
import {Link} from 'react-router-dom'
function Homepage() {
  return (
    <div>
     <nav>
        <ul>
            <li>
                <Link to="/">Homepage</Link>
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
    </div>
  );
}

export default Homepage;