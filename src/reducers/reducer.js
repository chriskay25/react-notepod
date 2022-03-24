export default function reducer(
  state = { podcast: null, podcasts: [], genres: [], genre: null },
  action
) {
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
        genre: action.payload.genre,
      };
    case "GET_PODCAST":
      return {
        ...state,
        podcast: action.payload,
      };
    case "GET_GENRES":
      return {
        ...state,
        genres: action.payload,
      };
    case "SELECTED_GENRE":
      return {
        ...state,
        genre: action.payload,
      };
    default:
      return state;
  }
}
