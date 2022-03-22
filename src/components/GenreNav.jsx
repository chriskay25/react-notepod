import Footer from "./Footer";

const GenreNav = ({ genres, getNewGenre }) => {
  return (
    <nav className="genre-nav">
      <h2>GENRES</h2>
      <ul className="genre-list">
        {genres &&
          genres.map((genre) => (
            <li key={genre.id} onClick={() => getNewGenre(genre)}>
              {genre.name}
            </li>
          ))}
      </ul>
      <Footer />
    </nav>
  );
};

export default GenreNav;
