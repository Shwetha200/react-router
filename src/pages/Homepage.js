import React, { useState,useEffect } from "react";

function Homepage() {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount((count)=>count +1);
        },1000);
   return()=>clearInterval(interval);
    },[]);
  return (
    <div>
        <p>home</p>
        <p>I've rendered {count} seconds ago</p>
     
    </div>
  );
}

export default Homepage;