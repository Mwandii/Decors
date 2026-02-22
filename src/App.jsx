import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Homepage from "./pages/Homepage";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;