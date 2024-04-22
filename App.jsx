import React,{useState} from "react";
import Entry from "./Entry";
import products from "../products";
import Welcome from "./welcome";

function createEntry(product) {
  return (
    <Entry
      key={product.id}
      image = {product.image}
      name={product.title}
      price={product.price}
      description={product.description}
    />
  );
}

function App() {

  return ( 
    <div>
   
       <Welcome />
      <h1>
        <span>Products</span>
      </h1>
      <dl className="dictionary">{products.map(createEntry)}</dl>
     
    </div>
  );
}

export default App;
