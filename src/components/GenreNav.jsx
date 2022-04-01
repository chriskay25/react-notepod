import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { getPodcastsByGenre } from "../actions/podcasts";

const GenreNav = ({ genres }) => {
  const dispatch = useDispatch();
  const menuIsOpen = useSelector((state) => state.menuIsOpen);

  return (
    <nav className={`nav-container ${menuIsOpen ? "open" : "closed"}`}>
      <div className="genre-nav">
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
      </div>
    </nav>
  );
};

export default GenreNav;
