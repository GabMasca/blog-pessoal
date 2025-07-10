import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Navbar from "./components/Navbar";

function App() {
  return (
   <BrowserRouter>
  <Navbar />
  <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:slug" element={<Post />} />
    </Routes>
  </main>
</BrowserRouter>

  );
}

export default App;
