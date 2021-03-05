import axios from "axios";
import { Chart } from "react-charts";
import { useState, useEffect, useMemo } from "react";

const HistoricalPrice = () => {
  //   const url =
  //     "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/historical";
  //   const xpikey = "ykOwd1IKUR3bX1I7O3yWx6QomMSqTOrG2cKUdzhg";
  //   const accountKey = "";

  // const response = await axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login", payload, { headers : {'x-api-key' : "ykOwd1IKUR3bX1I7O3yWx6QomMSqTOrG2cKUdzhg"}})
  // console.log(response);
  // sessionStorage.setItem("accountKey", response.data.accountKey);
  // }
  //const accountKey = sessionStorage.getItem("accountKey")

  //const [response, setResponse] = useState();
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const InitalizeChart = (data) => {
      let arr = [];

      console.log(data);

      data.forEach((d) => {
        let date = new Date(d.timestamp * 1000);
        // Hours part from the timestamp
        let hours = date.getHours();
        // Minutes part from the timestamp
        let minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        let seconds = "0" + date.getSeconds();

        // Will display time in 10:30:23 format
        let formattedTime =
          hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

        let item = {
          price: d.price,
          timestamp: formattedTime,
        };
        arr.push(item);
      });

      let chart_data = [
        {
          label: "TTK",
          data: arr,
        },
      ];

      setChartData(chart_data);
    };

    const fetchHistoricalPrice = async () => {
      const response = axios.post(
        "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/historical",
        {},
        {
          headers: {
            "x-api-key": "ykOwd1IKUR3bX1I7O3yWx6QomMSqTOrG2cKUdzhg",
          },
        }
      );

      response.then((response) => {
        setData(response.data);
        InitalizeChart(response.data);
      });
    };

    fetchHistoricalPrice();
  }, []);

  const axes = useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  console.log(chartData);

  return (
    <div
      style={{
        width: "400px",
        height: "300px",
      }}
    >
      <h2>Price History</h2>
      <Chart data={chartData} axes={axes} />
      {/* <table>
        <tr key={"header"}>
          <th>Price</th>
          <th>Asset Symbol</th>
          <th>Time</th>
        </tr>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default HistoricalPrice;
