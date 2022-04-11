// reusable card component

import React from "react";
import CartButton from "./CartButton";
import "./Grocery.css"
const GroceryItem = (props) => {
  console.log(props)
  const {id,title,imgURL,discount,sellingPrice,mrp}=props
  return( 
  
    <div id="main">
    
      <img className="images" src={imgURL} alt=""/>
      <h5>{title}</h5>
    <div className="prices"><p>{sellingPrice}</p>
    <p><span>MRP  :</span><span className="mrp" >{mrp}</span></p></div>
    
    
      <CartButton/>
    </div>
   


 
  )
};
export default GroceryItem;
