import React, { useState } from "react";
import Product from "./Product";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const name = ["Wa ", "Tristan ", "Terrence ", "Ryan "];

  return (
    <div>
      <h1>Counter</h1>
      <p>Total count: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <hr />
      <div>List of names</div>
      <p>{name}</p>
      <div style={{ paddingTop: "5px" }}>Input a new name</div>
      <input type="text" name="" id="" placeholder="input new name" />
      <hr />
      <div className="product-container">
        <Product
          name="Iphone 10"
          description="This is a description column"
          price="$567"
        />
        <Product
          name="Iphone 8"
          description="This is a Iphone 8 column"
          price="$267"
        />
        <Product
          name="Iphone 14"
          description="This is a Iphone 14"
          price="$867"
        />
      </div>
    </div>
  );
}

export default App;
