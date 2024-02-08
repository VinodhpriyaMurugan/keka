import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllJobsPage from "./components/AllJobsPage";
import HomePage from "./components/HomePage";
import JobPage from "./components/JobPage";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <>
      <Router basename="/careers">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs/" element={<AllJobsPage />} />
          <Route path="/jobs/:id" element={<JobPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
