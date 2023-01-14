import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  //const[val, setVal] = useState(false)
  const [toggle, isToggling] = useState(false)

  const appClass = toggle ? "App dark" : "App light"


  let btnDown = () => {
    console.log(toggle)
    isToggling((z) => !z)
  }
  // const guess = () => {
  //   setVal((val) => !val)
  // }

  
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={btnDown}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
