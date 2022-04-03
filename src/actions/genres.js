export const getGenres = () => async (dispatch) => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/v1/search?type=genres"
    );
    const data = await response.json();
    dispatch({ type: "GET_GENRES", payload: data.genres });
  } catch (err) {
    console.log(err);
  }
};

export const selectedGenre = (genre) => {
  return (dispatch) => {
    dispatch({ type: "SELECTED_GENRE", payload: genre });
  };
};
