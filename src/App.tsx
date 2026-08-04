
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PortfolioDashboard from "./features/portfolios/PortfolioDashboard";
import StockDashboard from "./features/stocks/StockDashboard";
import HomePage from "./components/pages/HomePage";
import NotFound from "./components/pages/NotFound";

function App() {
  
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stock" element={<StockDashboard />} />
        <Route path="/portfolio" element={<PortfolioDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
