import { useState } from 'react';

function TodoList() {
// Initialize state with useState hook
const [tasks, setTasks] = useState([]);
const [input, setInput] = useState('');

// Function to add a new task
function addTask() {
if (input.trim() !== '') {
setTasks([...tasks, input]);
setInput('');
}
}

// Function to remove a task
function removeTask(index) {
const newTasks = tasks.filter((task, i) => i !== index);
setTasks(newTasks);
}

return (
<div>
<input className='input'
type="text"
value={input}
onChange={(event) => setInput(event.target.value)}
placeholder="Enter a new recipe"
/>

<button className='button' onClick={addTask}>Add</button>
<ul className='list'>
{tasks.map((task, index) => (
<li key={index}>
{task} <button className='button' onClick={() => removeTask(index)}>Remove</button>
</li>
))}
</ul>
</div>
);
}
export default TodoList;