import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPodcastsByGenre } from "../actions/podcasts";
import { logout } from "../actions/users";
import { navToggle } from "../actions/ui";

const NavContainer = ({ genres }) => {
  const dispatch = useDispatch();
  const navIsOpen = useSelector((state) => state.uiReducer.navIsOpen);

  const handleHomeClick = () => dispatch({ type: "HOME_CLICK", payload: null });

  useEffect(() => {
    // Close nav on logout
    return () => {
      dispatch(navToggle(false));
    };
  }, [dispatch]);

  return (
    <nav className={`nav-container ${navIsOpen ? "open" : "closed"}`}>
      <div className="nav-section">
        <h2>PROFILE</h2>
        <ul className="nav-list">
          <li onClick={() => handleHomeClick()}>Home</li>
          <li>Favorite Podcasts</li>
          <li>Favorite Episodes</li>
          <li>Notes</li>
          <li onClick={() => dispatch(logout())}>Logout</li>
        </ul>
      </div>
      <div className="nav-section" style={{ marginTop: "20px" }}>
        <h2>GENRES</h2>
        <ul className="nav-list">
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
      </div>
    </nav>
  );
};

export default NavContainer;
