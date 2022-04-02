import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { podcastReducer } from "./podcastReducer";
import { genreReducer } from "./genreReducer";
import { episodeReducer } from "./episodeReducer";
import { menuReducer } from "./menuReducer";

export default combineReducers({
  userReducer,
  podcastReducer,
  genreReducer,
  episodeReducer,
  menuReducer,
});
