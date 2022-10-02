// import logo from './logo.svg';
import axios from "axios";
import { useState } from "react";
import "./App.css";
import { API } from "./Config";

function App() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Need to turn on backend app.
  const requestMessage = async () => {
    await axios

      .get(`${API.USER}/hello-world`, {
        params: { name: name },
      })
      .then((res) => res.data)
      .then((res) => setMsg(res.message))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="input-div">
          <div className="input-div-text">
            <p>Input your name!</p>
          </div>
          <div className="input-div-field">
            <label htmlFor="name" className="input-div-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              maxLength={20}
              onChange={handleNameChange}
              value={name}
              className="input-div-name"
            />
          </div>
        </div>
        <div className="result-div">
          <p className="result-div-msg">{msg}</p>
          <button onClick={requestMessage} className="result-div-btn">
            Click to get message!
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
