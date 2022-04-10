export const noteReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case "GET_NOTES":
      return {
        ...state,
        notes: action.payload,
      };
    case "CREATE_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    default:
      return state;
  }
};
