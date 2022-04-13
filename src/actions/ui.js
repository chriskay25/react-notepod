export const menuToggle = (bool) => {
  return (dispatch) => {
    dispatch({ type: "MENU_TOGGLE", payload: bool });
  };
};

export const loadingStatus = (status) => {
  return (dispatch) => {
    dispatch({ type: "LOADING_STATUS", payload: status });
  };
};
