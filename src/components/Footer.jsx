import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { statuschange, colorchange } from "../redux/filter/actions";

const numberOfTask = (no_of_task) => {
  switch (no_of_task) {
    case 0:
      return "No Task";
    case 1:
      return "1 Task";

    default:
      return `${no_of_task} Tasks`;
  }
};

const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const { status, colors } = useSelector((state) => state.filter);
  const remainingTodo = todos.filter((todo) => !todo.compleate).length;
  const dispatch = useDispatch();

  const handelStatusChange = (status) => {
    dispatch(statuschange(status));
  };
  const handelChangeColor = (color) => {
    if (colors.includes(color)) {
      dispatch(colorchange(color, "remove"));
    } else {
      dispatch(colorchange(color, "add"));
    }
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTask(remainingTodo)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === "All" && "font-bold"}`}
          onClick={() => handelStatusChange("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            status === "Incompleate" && "font-bold"
          }`}
          onClick={() => handelStatusChange("Incompleate")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Compleate" && "font-bold"}`}
          onClick={() => handelStatusChange("Compleate")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
          onClick={() => handelChangeColor("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => handelChangeColor("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => handelChangeColor("yellow")}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
