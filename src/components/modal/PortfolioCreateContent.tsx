import { useState } from "react";
import "./Modal.css";
import Select from "../Select";

type PortfolioEditProps = {
  isOpen: boolean;
};

const PortfolioEditContent = ({ isOpen }: PortfolioEditProps) => {
  const tickers = [
    { label: "Apple", value: "AAPL" },
    { label: "Microsoft", value: "MSFT" },
    { label: "Google", value: "GOOG" },
  ];
  const [ticker, setTicker] = useState(tickers[0]);

  return (
    <>
      <div>
        <p className="modal-block">
          <Select
            id={"ticker"}
            name={"Ticker"}
            label={"ticker"}
            values={tickers}
            value={ticker.value}
            onChange={setTicker}
          />
        </p>
      </div>
      <div>
        <h3>select {isOpen}</h3>
        <div className="modal-block"></div>
      </div>
    </>
  );
};

export default PortfolioEditContent;
