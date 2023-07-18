import styles from "../css/todo.module.css";

function Todo({ name, id, handleDelete, completed, todos, setTodos }) {
  const handleCheckboxChange = () => {
    const newTodos = todos.map((todoItem) => {
      if (todoItem.id == id) {
        return {
          ...todoItem,
          completed: !todoItem.completed,
        };
      } else {
        return todoItem;
      }
    });

    setTodos(newTodos);
  };

  return (
    <div className={styles.flexContainer}>
      <div className={styles.left}>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCheckboxChange}
        />
        <p className={completed ? styles.checked : styles.title}>{name}</p>
      </div>

      <div className={styles.right}>
        <button className={styles.btn} onClick={() => handleDelete(id)}>
          <img src="src\assets\bin.png" />
        </button>
      </div>
    </div>
  );
}

export default Todo;
