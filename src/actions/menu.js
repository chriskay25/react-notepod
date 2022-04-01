export const menuToggle = (bool) => {
  return (dispatch) => {
    dispatch({ type: "MENU_TOGGLE", payload: bool });
  };
};
