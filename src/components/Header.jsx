import React, { useState } from "react";
import NoteImage from "../assets/images/notes.png";
import DoubleTicImage from "../assets/images/double-tick.png";
import PlusImage from "../assets/images/plus.png";
import { useDispatch } from "react-redux";
import { addtodo, allcompleate, clearcompleated } from "../redux/todo/actions";

const Header = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const handelCompleateAllTask = () => {
    dispatch(allcompleate());
  };
  const handelClearCompleate = () => {
    dispatch(clearcompleated());
  };
  const handelAddTodo = (e) => {
    e.preventDefault();
    if (todoText != "") {
      dispatch(addtodo(todoText));
      setTodoText("");
    }
  };
  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={handelAddTodo}
      >
        <img src={NoteImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${PlusImage}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          className="flex space-x-1 cursor-pointer"
          onClick={handelCompleateAllTask}
        >
          <img className="w-4 h-4" src={DoubleTicImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={handelClearCompleate}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
