import { useState } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

function TodoInsert({ onInsert }) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form
      className="TodoInsert"
      onSubmit={(e) => {
        onInsert(value);
        setValue("");
        e.preventDefault();
      }}
    >
      <input
        type="text"
        placeholder="할일을 입력하세요"
        onChange={onChange}
        value={value}
      ></input>
      <button type="submit">
        <MdAdd></MdAdd>
      </button>
    </form>
  );
}

export default TodoInsert;
