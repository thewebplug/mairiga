import logo from "./logo.svg";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Poetry from "./pages/Poetry";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poetry" element={<Poetry />} />
      </Routes>
    </Router>
  );
}

export default App;
