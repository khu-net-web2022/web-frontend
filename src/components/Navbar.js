import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "../assets/App.css";
const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const eventHandler = (e) => {
    if (e.key === "Enter") {
      navigate(encodeURI(`/search?query=${query}`));
    }
  };
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        {/* <img src="../assets/logo.png" alt="logo" /> */}
        <h1>{"KHU-kie Market"}</h1>
      </Link>

      <ul>
        <li>
          <input
            type="text"
            className="navbar-input"
            placeholder="중고물품 검색"
            onKeyDown={eventHandler}
            onChange={(e) => setQuery(e.target.value)}
            value={query}></input>
        </li>
        <li>
          <Link to="/login"> 로그인 </Link>
        </li>
        <li>
          <Link to="/signup"> 회원가입 </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
