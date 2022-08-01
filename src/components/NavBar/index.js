import { BsSearch } from "react-icons/bs";
import "./index.css";

const NavBar = (props) => {
  const { onEnterSearch, searchInput } = props;

  const onChangeSearchInput = (event) => {
    onEnterSearch(event.target.value);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-adminUi">AdminUi</h1>
      <div className="search-delete-cont">
        <div className="search-cont">
          <input
            placeholder="Search By Name"
            value={searchInput}
            onChange={onChangeSearchInput}
            className="search-bar"
            type="search"
          />
          <BsSearch className="search-icon" />
        </div>
        <button className="nav-del-button">Delete Selected</button>
      </div>
    </nav>
  );
};

export default NavBar;
