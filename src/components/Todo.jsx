import styles from "../css/todo.module.css";

function Todo({ name, id, handleDelete }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.left}>
        <p className={styles.title}>{name}</p>
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
