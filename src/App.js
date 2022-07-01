import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from './routes/Detail';
import Nav from './routes/Nav';
import Subscribe from './routes/Subscribe'

function App() {
  return (
    <Router>
        <Nav />
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={"/movie/:id"} element={<Detail />} />
        <Route path={"/subscribe"} element={<Subscribe />} />
      </Routes>
    </Router>
  );
}

export default App;