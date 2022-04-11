import { useState } from "react";
// keep the add to cart component here
const CartButton = () => {

    //manage state of the count 
    const [count,setCount]=useState(0)
    const handleInc=()=>
    {
      setCount(count+1)
    }
    const handleDec=()=>
    {
      if(count>0)
      {
      setCount(count-1)
      }
    }
  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div id="AddTocart">
      <button onClick={()=>handleDec()}>-</button>
      <p className="count-item">{count}</p>
      <button onClick={()=>handleInc()}>+</button>
  </div>
  </>;
};
export default CartButton
