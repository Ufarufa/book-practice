import logo from "./logo.svg";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useCallback, useRef, useState } from "react";
import TodoListVirtualized from "./components/TodoListVirtualized";

const createBulkTodos = () => {
  const array = [];
  for (let i = 1; i < 2500; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false,
    });
  }
  return array;
};

function App() {
  const initialState = [
    {
      id: 1,
      text: "리액트의 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "리액트 스타일링 해보기",
      checked: true,
    },
    {
      id: 3,
      text: "일정 앱 만들어보기",
      checked: false,
    },
  ];
  const [todos, setTodos] = useState(createBulkTodos);
  const nextId = useRef(4);

  const onInsert = useCallback((text) => {
    const todo = {
      text,
      id: nextId.current,
      checked: false,
    };
    setTodos((prev) => prev.concat(todo));
    nextId.current++;
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      })
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoListVirtualized
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
      ></TodoListVirtualized>
    </TodoTemplate>
  );
}

export default App;
