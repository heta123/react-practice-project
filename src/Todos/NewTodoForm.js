import React, { useState } from "react";
import './NewTodoForm.css';

const newTodoForm = () => {
    const [inputValue, setInputValue] = useState('');
    return(
        <div className="new-todo-form">
            <input type="text"
            placeholder="type new todo here"
            onChange={e => setInputValue(e.target.value)}
             className="new-todo-input"/>
            <button className="new-todo-button">Create Todo</button>
        </div>
    );
}