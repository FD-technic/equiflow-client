
import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import PortfolioDashboard from "./component/PortfolioDashboard";
import StockDashboard from "./component/StockDashboard";

function App() {
  
  return (
    <>
      <Header />

      <Routes>
        <Route path="/stock-dashboard" element={<StockDashboard />} />
        <Route path="/portfolio-dashboard" element={<PortfolioDashboard />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
