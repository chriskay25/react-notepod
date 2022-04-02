export const menuReducer = (state = { menuIsOpen: false }, action) => {
  switch (action.type) {
    case "MENU_TOGGLE":
      return {
        ...state,
        menuIsOpen: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        menuIsOpen: false,
      };
    default:
      return state;
  }
};
