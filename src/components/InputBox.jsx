import styles from "../css/input.module.css";

function InputBox({ handleChange, value, handleClick }) {
  return (
    <div className={styles.flexbox}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.inputBox}
          onChange={handleChange}
          value={value}
        />
        <button className={styles.btn} onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
}

export default InputBox;
