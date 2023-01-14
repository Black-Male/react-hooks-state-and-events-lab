import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  const Selected = (z) => {
    setSelectedCategory(z.target.value)
  }

  let toBeDisplayed = items.filter((z) => {
    if (selectedCategory === "All"){
      return (true)
    }else{
      return z.category === selectedCategory
    }
  })
  return (
    <div className="ShoppingList" >
      <div className="Filter">
        <select name="filter"  onChange = {Selected}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {toBeDisplayed.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
