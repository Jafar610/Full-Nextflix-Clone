import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Detail from "./Pages/Detail";
import TvShow from "./Pages/TvShow";
import Popular from "./Pages/Popular";
import MyListMovie from "./Components/MyListMovie";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tv" element={<TvShow />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/mylist" element={<MyListMovie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
