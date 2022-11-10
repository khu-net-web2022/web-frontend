import axios from "axios";
import { useRef } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const userId = useRef();
  const userPw = useRef();
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();

  const tryLogin = async () => {
    const resp = await axios
      .post("http://localhost:3000/auth/login", {
        id: userId.current.value,
        pw: userPw.current.value,
      })
      .then((resp) => resp.data)
      .catch((resp) => resp.response.data);
    if (resp.success === true) {
      setCookie("authorization", "Bearer " + resp.accessToken);
      navigate("/");
    }
  };

  return (
    <div className="content-block">
      <div className="login-form">
        <label htmlFor="userId">ID</label>
        <input type={"text"} name="userId" ref={userId}></input>
        <label htmlFor="userPw">PW</label>
        <input type={"password"} name="userPw" ref={userPw}></input>
        <button onClick={tryLogin}>로그인</button>
      </div>
    </div>
  );
}
