import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="app__counterbox">
      <span className="app__counterbox_span">{count}</span>
      <button className="app__counterbox_button" onClick={updateCount}>
        +1
      </button>
    </div>
  );
}

export default Counter;
