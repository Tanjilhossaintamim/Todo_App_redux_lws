import {
  ADDED,
  CLEARCOMPLEATED,
  TOGOLLED,
  COLORCHANGED,
  DELETE,
  ALLCOMPLEATE,
} from "./actionTypes";
// initial state
const initialState = [
  { id: 1, text: "I learn react", compleate: true },
  { id: 2, text: "I am learning redux", compleate: false, color: "green" },
];

const findNextId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), 0);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: findNextId(state),
          text: action.payload,
          compleate: false,
        },
      ];
    case TOGOLLED:
      return state.map((todo) => {
        if (todo.id == action.payload) {
          return {
            ...todo,
            compleate: !todo.compleate,
          };
        }
        return todo;
      });

    case COLORCHANGED:
      const { color, todoId } = action.payload;
      return state.map((todo) => {
        if (todo.id == todoId) {
          return {
            ...todo,
            color: color,
          };
        }
        return todo;
      });

    case DELETE:
      return state.filter((todo) => todo.id != action.payload);
    case ALLCOMPLEATE:
      return state.map((todo) => {
        return {
          ...todo,
          compleate: true,
        };
      });
    case CLEARCOMPLEATED:
      return state.filter((todo) => !todo.compleate);
    default:
      return state;
  }
};
export default reducer;
