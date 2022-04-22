import MyDateCount from './Components/MyDateCount';
import { useState } from 'react';


function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <div>
          {show && <MyDateCount />}
      </div>
      <p>
        <button type='button' onClick={() => setShow((prevShow) => !prevShow)}>
          {show ? 'Hide post' : 'Show post'}
        </button>
      </p>
      
    </div>
  );
}

export default App;
