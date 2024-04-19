import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES IMPORTS
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
      <BrowserRouter basename="/ok-robot-persist-task1">
    <div className="flex flex-col justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
