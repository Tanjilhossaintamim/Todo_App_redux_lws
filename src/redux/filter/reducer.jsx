import { STATUSCHANGED, COLORCHANGED } from "./actionType";

const initialState = {
  status: "All",
  colors: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };

    case COLORCHANGED:
      const { color, changeType } = action.payload;

      switch (changeType) {
        case "add":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "remove":
          return {
            ...state,
            colors: state.colors.filter((exitsColor) => exitsColor != color),
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default reducer;
