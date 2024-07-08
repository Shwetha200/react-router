import React from "react";
import classes from "./style.module.css";
import "./style.css";
function Contact() {
  return (
    <div>
     Contact
     <p className="demo-para">External css</p>
     <p className={classes.module_css}>Module css</p>
     <p className={`${classes.module_css} font-bold`}>both css</p>
    </div>
  );
}

export default Contact;