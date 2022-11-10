import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies();

  const eventHandler = (e) => {
    if (e.key === "Enter") {
      navigate(encodeURI(`/search?query=${query}`));
    }
  };
  const Menu = () => {
    if (cookies.authorization === undefined) {
      return (
        <>
          <li>
            <Link to="/login"> 로그인 </Link>
          </li>
          <li>
            <Link to="/signup"> 회원가입 </Link>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <Link to="/uploadPost"> 판매글 올리기 </Link>
          </li>
          <li>
            <button
              className="navbar-logout"
              onClick={() => {
                removeCookie("authorization");
                navigate("/");
              }}>
              로그아웃
            </button>
          </li>
        </>
      );
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-btn">
          {/* <img src="../assets/logo.png" alt="logo" /> */}
          <h1>{"KHU-kie Market"}</h1>
        </Link>

        <Link to="/posts" className="navbar-btn">
          <h1>{"판매글 구경하기"}</h1>
        </Link>
      </div>

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
        <Menu></Menu>
      </ul>
    </nav>
  );
};
export default Navbar;
