import "./assets/App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ErrorPage from "./pages/ErrorPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route exact path="/login" element={<LoginPage />}></Route>
          <Route exact path="/signup" element={<SignupPage />}></Route>
          <Route exact path="/search" element={<SearchPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
