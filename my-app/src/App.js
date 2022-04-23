import React, { useReducer } from "react";
import ComplexCounter from "./Components/ComplexCounter";
import ComplexCounter2 from "./Components/ComplexCounter2";
import ComponentA from "./Components/ContextA";

export const counterContext = React.createContext();

const initialState = 5;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='App'>
      <div>Count - {count}</div>
      <button type='button' onClick={() => dispatch("increment")}>
        Increment
      </button>
      <button type='button' onClick={() => dispatch("decrement")}>
        Decrement
      </button>

      <ComplexCounter />
      <ComplexCounter2 />

      <counterContext.Provider value={{ countDispatch: dispatch }}>
        <ComponentA />
      </counterContext.Provider>
    </div>
  );
}

export default App;



