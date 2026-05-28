import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Detail from "./Pages/Detail";
import Mylist from "./Components/Mylist";
import TvShow from "./Pages/TvShow";
import Popular from "./Pages/Popular";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv" element={<TvShow />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/mylist" element={<Mylist />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
