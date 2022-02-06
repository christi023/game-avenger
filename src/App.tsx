import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
// styles
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />  
      <Routes>
        <Route path="/" element={<Home />} />
         <Route>404 Not Found</Route>
      </Routes>
    </Router>
  );
}

export default App;
