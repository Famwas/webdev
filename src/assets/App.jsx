import React from "react";
import Header from "./header.jsx";
import Listing from "./coffelisting.jsx";
import './index.css';

function App(){
  return(
    <>
    <head>
      <meta charset="UTF-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </head>
    <Header/>
    <div className="cont1">
      <h2> Our Collection</h2>
      <p>Introducing our Coffee Collection, a selection of unique coffee types from different roast types an origins, expertly roasted in small batches and shipped fresh weekly. </p><br></br>
      <div className="tag1">
        <p className="tag">All Products</p>
        <p className="inline">Available Now</p>
      </div>
      <Listing/>
    </div>
    
    
    </>
  )
}
export default App