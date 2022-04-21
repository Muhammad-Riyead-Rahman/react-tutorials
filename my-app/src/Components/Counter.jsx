import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  let i = 0;
  const addFive = () => {
    while (i < 5) {
    //   setCount(count + 1);
    setCount((prevState) => prevState + 1)
      i += 1;
    }
  };
  return (
    <div>
      {count}
      <p>
        {/* <button type='button' onClick={() => setCount(count + 1)}>
          Add 1
        </button> */}

        <button
          type='button'
          onClick={() => setCount((prevCount) => prevCount + 1)}>
          Add 1
        </button>
      </p>
      <p>
        <button type='button' onClick={addFive}>
          Add 5
        </button>
      </p>
    </div>
  );
}

export default Counter;
