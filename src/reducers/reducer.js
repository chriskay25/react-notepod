export default function reducer(
  state = { podcast: null, podcasts: [], genres: [] },
  action
) {
  switch (action.type) {
    case "GET_PODCASTS":
      return {
        ...state,
        podcasts: action.payload,
      };
    case "GET_GENRES":
      return {
        ...state,
        genres: action.payload,
      };
    case "GET_PODCAST":
      return {
        ...state,
        podcast: action.payload,
      };
    default:
      return state;
  }
}
