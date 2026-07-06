import { Routes, Route, Navigate } from "react-router-dom";
import EmployerLayout from "./components/EmployerLayout.jsx";
import Overview from "./pages/Overview.jsx";
import Jobs from "./pages/Jobs.jsx";
import PostJob from "./pages/PostJob.jsx";
import Candidates from "./pages/Candidates.jsx";
import Interviews from "./pages/Interviews.jsx";
import Messages from "./pages/Messages.jsx";
import Company from "./pages/Company.jsx";
import Profile from "./pages/Profile.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/employer" replace />} />
      <Route path="/" element={<EmployerLayout />}>
        <Route index element={<Overview />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="post-job" element={<PostJob />} />
        <Route path="candidates" element={<Candidates />} />
        <Route path="interviews" element={<Interviews />} />
        <Route path="messages" element={<Messages />} />
        <Route path="company" element={<Company />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
