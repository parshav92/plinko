import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Game } from "./components/Game";
import { Simulate } from "./components/Simulate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/game" element={<Game />} />
        <Route path="/simulation" element={<Simulate />} />
        {/* <Route path="*" element={<$)$ />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
