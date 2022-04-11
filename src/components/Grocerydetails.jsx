import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"

import "./Grocery.css"

const GroceryDetails = ()=>{
//console.log(data)

    return(
        <>
        <h1 id="tittle">Groceries</h1>
        <div className="container">
           {data.map((item,index)=>{
               return <GroceryItem key={item.id} {...item}/>

           })
           }
        </div>
        </>
    )
}
export default GroceryDetails