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
    </nav>
  );
};

export default GenreNav;
