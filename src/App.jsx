import { useState } from "react";
import InputBox from "./components/InputBox";
import Todo from "./components/Todo";
import styles from "./css/app.module.css";

function App() {
  const [counter, setCounter] = useState(1);
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = () => {
    const newTodos = [
      ...todos,
      {
        todoName: todo,
        id: counter,
      },
    ];

    setCounter(counter + 1);
    setTodos(newTodos);
  };

  const handleDelete = (currentId) => {
    const afterDeleteArray = todos.filter((todoItem) => {
      if (todoItem.id !== currentId) {
        return todoItem;
      }
    });

    setTodos(afterDeleteArray);
  };

  return (
    <div className={styles.container}>
      <InputBox
        handleChange={handleChange}
        value={todo}
        handleClick={handleClick}
      />
      <div className={styles.todoContainer}>
        {todos.length > 0 ? (
          todos.map((todoItem) => {
            return (
              <Todo
                name={todoItem.todoName}
                key={todoItem.id}
                id={todoItem.id}
                handleDelete={handleDelete}
              />
            );
          })
        ) : (
          <h1>There is currently no todo</h1>
        )}
      </div>
    </div>
  );
}

export default App;
