export const podcastReducer = (
  state = { podcasts: [], podcast: null },
  action
) => {
  switch (action.type) {
    case "GET_PODCASTS":
      return {
        ...state,
        podcasts: action.payload,
      };
    case "GET_PODCASTS_BY_GENRE":
      return {
        ...state,
        podcasts: action.payload.podcasts,
        // genre: action.payload.genre,
      };
    case "GET_PODCAST":
      return {
        ...state,
        podcast: action.payload,
      };
    case "HOME_CLICK":
      return {
        ...state,
        podcast: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        podcasts: [],
        podcast: null,
      };
    default:
      return state;
  }
};
