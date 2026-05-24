import "./style.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import ChartCard from "./component/ChartCard";
import ChartForm from "./component/ChartForm";
import { useEffect, useState } from "react";
import { getApi } from "./api/getApi";

function App() {
  const [ticker, setTicker] = useState("QQQ");
  const [data, setData] = useState([]);

  useEffect (() => {
    const fetchData = async () => {
      const fetchedData = await getApi(`/api/av/stocks?ticker=${ticker}&interval=MONTHLY`);

      setData(fetchedData);
      console.log("Fetched Data: ", fetchedData);
    };

    fetchData();    
  }, [ticker]);

  return (
    <>
      <Header />
      <h2>EquiFlow - dashboard</h2>
      <div className="layout">
        <aside className="sidebar">
          <ChartForm />
        </aside>
        <main className="content">
          <ChartCard
            data={data}
          />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;
