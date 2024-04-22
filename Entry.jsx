import React,{useState} from "react";
import Avatar from "./Avatar";

function Entry(props) {
  const [btnText,setBtnText] = useState(false)
  function Handleclick(){
    setBtnText(!btnText)
  }
 
  return (
    <div className="term">
      <dt>
       <Avatar img = {props.image} />
          <span>{props.name}</span>
      </dt>
      <dd>$ {props.price}</dd>
      <dd>{props.description}</dd>
      <button  
      onClick = {Handleclick}>{btnText?"Add to cart":"Remove from cart"}</button>
    </div>
  );
}


export default Entry;
