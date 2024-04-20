import React, { useState } from "react";
import "../layouts/Style/button.css"; 

export const Button = (props) => {
  const {text} = props;
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 5);
  };

  return (
    <div>
      <button onClick={handleIncrement}>
        {count}
      </button>
    </div>
  );
};

