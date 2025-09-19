import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home"; 
import EventDetails from "./pages/EventDetails"; 
import Profile from "./pages/Profile";
import CreateEvent from "./pages/CreateEvent";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Páginas públicas */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Páginas privadas (solo si estás logueado) */}
          <Route path="/home" element={<Home />} />
          <Route path="/eventid" element={<EventDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-event" element={<CreateEvent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;