import React, { useState } from "react";
import "../Style/button.css"; 

export const Button = () => {
  const [count, setCount] = useState(5);

  const handleIncrement = () => {
    setCount(count + 50);
  };

  return (
    <div>
      <button onClick={handleIncrement}>
        {count}
      </button>
    </div>
  );
};

