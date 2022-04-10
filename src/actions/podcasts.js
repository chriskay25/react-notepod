export const getPodcasts = () => async (dispatch) => {
  // If podcasts in local storage, set state from there instead of making API req
  let state = localStorage.getItem("state");
  let parsedState = state ? JSON.parse(state) : "";
  if (parsedState && parsedState.podcastReducer.podcasts.length > 0) {
    dispatch({
      type: "GET_PODCASTS",
      payload: parsedState.podcastReducer.podcasts,
    });
  } else {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/search?type=popular"
      );
      const data = await response.json();
      dispatch({ type: "GET_PODCASTS", payload: data.podcasts });
    } catch (err) {
      console.log(err);
    }
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

export const getPodcastsByGenre = (genre) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/search?type=popular&genre_id=${genre.id}`
    );
    const data = await response.json();
    dispatch({
      type: "GET_PODCASTS_BY_GENRE",
      payload: { podcasts: data.podcasts, genre: genre },
    });
  } catch (err) {
    console.log(err);
  }
};
