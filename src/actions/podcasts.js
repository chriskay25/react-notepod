export const getPodcasts = () => async (dispatch) => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/v1/search?type=popular"
    );
    const data = await response.json();
    console.log("Result of getPodcasts: ", data);
    dispatch({ type: "GET_PODCASTS", payload: data.podcasts });
  } catch (err) {
    console.log(err);
  }
};

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

export const getPodcastsByGenre = (genreId) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/search?type=popular&genre_id=${genreId}`
    );
    const data = await response.json();
    dispatch({ type: "GET_GENRES", payload: data.podcasts });
  } catch (err) {
    console.log(err);
  }
};

export const getPodcast = (podcastId) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/search?type=podcast&podcast_id=${podcastId}`
    );
    const data = await response.json();
    dispatch({ type: "GET_PODCAST", payload: data });
  } catch (err) {
    console.log(err);
  }
};
