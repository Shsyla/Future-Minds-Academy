import React, { useState } from 'react';

const Additem = () => {
    const [items, setItems] = useState([]);
    const [task, setTask] = useState("");

    return (
        <div>
            <input 
                onChange={(e) => setTask(e.target.value)} 
                type='text' 
                id='task' 
            />

            <button 
                onClick={() => setItems([...items, task])} 
                id='add'
            >
                Add
            </button>

            <ul>
                {items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Additem;
