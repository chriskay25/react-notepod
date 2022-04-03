export const getPodcasts = () => async (dispatch) => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/v1/search?type=popular"
    );
    const data = await response.json();
    dispatch({ type: "GET_PODCASTS", payload: data.podcasts });
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
