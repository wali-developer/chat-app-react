import { Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/feed" element={<Feed />} />
    </Routes>
  );
}

export default App;
