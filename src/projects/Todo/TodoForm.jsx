import { useState } from "react";

export const Todoform = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (value) => {
    setInputValue({id: value, content: value, checked: false});
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({id: "", content: "", checked: false}); // Correct way to reset inputValue
  };
  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue.content}
            onChange={(event) => handleInputChange(event.target.value)}
          />
        </div>
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </section>
  );
};
