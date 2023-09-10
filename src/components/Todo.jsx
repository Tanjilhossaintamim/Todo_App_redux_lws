import React from "react";
import CancelImage from "../assets/images/cancel.png";
import { useDispatch } from "react-redux";
import { colorselected, deletetodo, toggletodo } from "../redux/todo/actions";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handelToggleComplate = (todoId) => {
    dispatch(toggletodo(todoId));
  };

  const handelSelectColor = (color, todoId) => {
    dispatch(colorselected(color, todoId));
  };
  const handelDeleteTodo = (todoId) => {
    dispatch(deletetodo(todoId));
  };

  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          todo.compleate && "border-green-500 focus-within:border-green-500"
        }`}
      >
        <input
          type="checkbox"
          className="opacity-0 absolute rounded-full cursor-pointer"
          onChange={() => handelToggleComplate(todo.id)}
        />
        <svg
          className={`${
            !todo.compleate && "hidden"
          } fill-current w-3 h-3 text-green-500 pointer-events-none`}
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>

      <div className={`select-none flex-1 ${todo.compleate && "line-through"}`}>
        {todo.text}
      </div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
          todo.color == "green" ? "bg-green-500" : ""
        }`}
        onClick={() => handelSelectColor("green", todo.id)}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
          todo.color == "yellow" ? "bg-yellow-500" : ""
        }`}
        onClick={() => handelSelectColor("yellow", todo.id)}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
          todo.color == "red" ? "bg-red-500" : ""
        }`}
        onClick={() => handelSelectColor("red", todo.id)}
      ></div>

      <img
        src={CancelImage}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
        onClick={() => handelDeleteTodo(todo.id)}
      />
    </div>
  );
};

export default Todo;
