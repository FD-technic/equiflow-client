import { useStock } from "../../features/stocks/stockApi";
import { DATAPERIODS } from "../../features/stocks/periods";
import ChartArea from "../charts/ChartArea";
import "./Modal.css";

type TickerDetailProps = {
  ticker: string;
}

const TickerDetailContent = ({ ticker }: TickerDetailProps) => {
  const { data, loading, error } =
      useStock(ticker, DATAPERIODS[0].value);
  
  const chartData =
    data?.points?.slice(0).reverse() ?? []; 
  return (
    <>
      <div className="modal-header">
      </div>
      {loading && (
            <div>
              <p>Loading...</p>
              <p>Backend server may take a moment to wake up.</p>
            </div>
          )}
          {error && (
            <div className="big-text">
              <p>
                Data are currently unavailable.
              </p>
              <p>
                Try another ticker or period.
              </p>
            </div>
          )}
      <p className="modal-block">
        <ChartArea
          label={ticker}
          data={chartData}
        />
      </p>
    </>
  );
};

export default TickerDetailContent;
