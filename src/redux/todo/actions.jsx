import {
  ADDED,
  CLEARCOMPLEATED,
  ALLCOMPLEATE,
  COLORCHANGED,
  TOGOLLED,
  DELETE,
} from "./actionTypes";

export const addtodo = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const clearcompleated = () => {
  return {
    type: CLEARCOMPLEATED,
  };
};

export const allcompleate = () => {
  return {
    type: ALLCOMPLEATE,
  };
};

export const deletetodo = (todoId) => {
  return {
    type: DELETE,
    payload: todoId,
  };
};
export const toggletodo = (todoId) => {
  return {
    type: TOGOLLED,
    payload: todoId,
  };
};

export const colorselected = (color, todoId) => {
  return {
    type: COLORCHANGED,
    payload: {
      color,
      todoId,
    },
  };
};
