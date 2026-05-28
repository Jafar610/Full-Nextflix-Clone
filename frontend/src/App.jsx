import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Detail from "./Pages/Detail";
import Mylist from "./Components/Mylist";
import TvShow from "./Pages/TvShow";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv" element={<TvShow />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/mylist" element={<Mylist />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
