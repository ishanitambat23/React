import { useState } from "react";
import "./Todo.css";
import { TodoDate } from "./TodoDate";
import { Todoform } from "./TodoForm";
import { TodoList } from "./TodoList";
import{getLocalStorageTodoDate, setLocalStorageTodoDate} from "./TodoLocalStorage";

export const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoDate());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    if (!content) return;

    const isTodoContentMatched = task.find((curTask) => curTask.content === content);
    if (isTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked: checked || false }]);
  };

  //todo add data to localstorage
  setLocalStorageTodoDate(task);
  

  //todo handleDeleteTodo function
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

  //todo handleClearTodoData function
  const handleClearTodoData = () => {
    setTask([]);
  };

  //todo handleCheckedTodoData function
  const handleCheckedTodoData = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      }
      return curTask;
    });
    setTask(updatedTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>

      <Todoform onAddTodo={handleFormSubmit} />

      <section className="myUnordList">
        <ul>
          {task.map((curTask) => (
            <TodoList
              key={curTask.id}
              data={curTask.content}
              checked={curTask.checked} // Pass the checked status
              onHandleDeleteTodo={handleDeleteTodo}
              onHandleCheckedTodo={handleCheckedTodoData}
            />
          ))}
        </ul>
      </section>
      <section className="clear-btn" onClick={handleClearTodoData}>
        Clear all
      </section>
    </section>
  );
};
