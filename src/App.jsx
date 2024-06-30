import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Game from "./components/Game";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/game" element={<Game />} />
        {/* <Route path="/simulation" element={<Simulation />} /> */}
        {/* <Route path="*" element={<$)$ />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
