import axios from "axios";
import { useState, useEffect } from "react";

const HistoricalPrice = () => {
  const url =
    "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/historical";
  const xpikey = "ykOwd1IKUR3bX1I7O3yWx6QomMSqTOrG2cKUdzhg";

  useEffect(() => {}, []);

  return (
    <div>
      <h2>Price History</h2>
    </div>
  );
};

export default HistoricalPrice;
