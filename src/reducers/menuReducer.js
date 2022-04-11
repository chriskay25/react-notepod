export const menuReducer = (state = { menuIsOpen: false }, action) => {
  switch (action.type) {
    case "MENU_TOGGLE":
      return {
        ...state,
        menuIsOpen: action.payload,
      };
    case "HOME_CLICK":
      return {
        ...state,
        menuIsOpen: false,
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
