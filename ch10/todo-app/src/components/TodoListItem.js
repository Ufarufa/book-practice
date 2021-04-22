import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import "./TodoListItem.scss";
import cn from "classnames";
import React from "react";

function TodoListItem({ todo, onRemove, onToggle, style }) {
  const { text, checked, id } = todo;
  return (
    <div style={style}> {/* style 을 꼭!!! 자식의 첫번째 element 에 전달해줘야 정상작동한다 !!!  */}
      <div className="TodoListItem">
        <div
          className={cn("checkbox", { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}

          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline></MdRemoveCircleOutline>
        </div>
      </div>
    </div>
  );
}

export default React.memo(TodoListItem);
//export default TodoListItem;
