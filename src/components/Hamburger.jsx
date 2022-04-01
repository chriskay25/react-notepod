import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../actions/menu";

const Hamburger = () => {
  const dispatch = useDispatch();
  const menuIsOpen = useSelector((state) => state.menuIsOpen);

  const toggleMenu = (bool) => {
    dispatch(menuToggle(bool));
  };

  return (
    <span className="menu-hamburger" onClick={() => toggleMenu(!menuIsOpen)}>
      <svg
        width="40px"
        height="40px"
        strokeWidth="2px"
        stroke={menuIsOpen ? "#000" : "#fff"}
        strokeLinecap="round"
      >
        <path d={menuIsOpen ? "m 0 10, 25 20" : "m 0 10, 25 0"} />
        <path d="m 0 18, 25 0" style={{ opacity: menuIsOpen ? 0 : 1 }} />
        <path d={menuIsOpen ? "m 0 30, 25 -20" : "m 0 26, 25 0"} />
      </svg>
    </span>
  );
};

export default Hamburger;
