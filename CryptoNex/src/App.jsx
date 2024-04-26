
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Markets from './Pages/Markets';
import Error from './Pages/Error';
import CoinDetails from './Pages/CoinDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CursorFollower from './Components/CursorFollower'; // Import CursorFollower component

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Markets" element={<Markets />} />
          <Route path="/Markets/:id" element={<CoinDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <CursorFollower /> {/* Render CursorFollower component */}
    </div>
  );
}

export default App;


