import React, { useState } from "react";

function Counter() {
  const [count, setcount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setcount(count + 0);
        }}
      >
        Count:{count}
      </button>
    </div>
  );
}

export default Counter;
