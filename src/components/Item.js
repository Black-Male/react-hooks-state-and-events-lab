import React, {useState} from "react";

function Item({ name, category }) {
  const [modified, isModified] = useState('Add to cart')
  const [styler, isStyled] = useState("")

  const btnDown =() => {
    if(modified === 'Add to cart'){
      isModified('Remove from cart')
    }else{
      isModified('Add to cart')
    }

    if (styler === ""){
      isStyled("in-cart")
    }else{
      isStyled("")
    }
  }

  return (
    <li className={styler}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={btnDown} className="add">{modified}</button>
    </li>
  );
}

export default Item;
