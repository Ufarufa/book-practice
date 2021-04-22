import TodoListItem from "./TodoListItem";
import "./TodoList.scss";
import React from "react";

function TodoList({ todos, onRemove, onToggle }) {
  return (
    <div className="TodoLIst">
      {todos.map((todo) => {
        return (
          <TodoListItem
            todo={todo}
            key={todo.id}
            onRemove={onRemove}
            onToggle={onToggle}
          ></TodoListItem>
        );
      })}
    </div>
  );
}

export default React.memo(TodoList);
