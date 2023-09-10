import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const { status, colors } = useSelector((state) => state.filter);
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter((todo) => {
          switch (status) {
            case "Compleate":
              return todo.compleate;

            case "Incompleate":
              return !todo.compleate;

            default:
              return true;
          }
        })
        .filter((todo) => {
          if (colors.length > 0) {
            return colors.includes(todo.color);
          }
          return true;
        })
        .map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
    </div>
  );
};

export default TodoList;
