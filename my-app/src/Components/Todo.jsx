import { useState } from "react";


function Todo() {
    const [todo, setTodo] = useState('');
    const [warnig, setWarnig] = useState(null);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        const updatedWaring = inputValue.includes('.js') ? 'You must need JavaScript skill to complete the task. Do you have it' : null;

        setTodo(inputValue);
        setWarnig(updatedWaring);
    }
  return (
    <div>
      <p>{todo}</p>
      <p>
        <textarea name='todo' value={todo} onChange={handleChange} />
      </p>
      <hr />
      <h2>{warnig || "Good Choice"}</h2>
    </div>
  );
}

export default Todo;
