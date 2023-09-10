import { STATUSCHANGED, COLORCHANGED } from "./actionType";

export const statuschange = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};

export const colorchange = (color, changeType) => {
  return {
    type: COLORCHANGED,
    payload: {
      color,
      changeType,
    },
  };
};
