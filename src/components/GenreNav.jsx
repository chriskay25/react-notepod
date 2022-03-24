import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { getPodcastsByGenre } from "../actions/podcasts";

const GenreNav = ({ genres }) => {
  const dispatch = useDispatch();
  return (
    <nav className="genre-nav">
      <h2>GENRES</h2>
      <ul className="genre-list">
        {genres &&
          genres.map((genre) => (
            <li
              key={genre.id}
              onClick={() => dispatch(getPodcastsByGenre(genre))}
            >
              {genre.name}
            </li>
          ))}
      </ul>
      <Footer />
    </nav>
  );
};

export default GenreNav;
