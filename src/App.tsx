import "./style.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import StockDashboard from "./component/StockDashboard";

function App() {
  
  return (
    <>
      <Header />
      <h2>EquiFlow - dashboard</h2>
         <StockDashboard />
      
      <Footer />
    </>
  );
}

export default App;
