import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
