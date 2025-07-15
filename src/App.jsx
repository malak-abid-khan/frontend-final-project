import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { Home, Users, UserCheck, LineChart } from "lucide-react";
import HomePage from "./pages/Home";
import ClientSide from "./pages/ClientSide";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<ClientSide />}>
          <Route path="/dashboard" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
