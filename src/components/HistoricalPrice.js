import axios from "axios";
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const HistoricalPrice = () => {
  const [data, setData] = useState([]);
  //const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const InitalizeChart = (dat) => {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      let arr = [];

      for (var i in dat) {
        let val = dat[i];
        var date = new Date(val.timestamp * 1000);
        var year = date.getFullYear();
        var month = months[date.getMonth()];
        var day = date.getDate();

        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();

        var time =
          day +
          " " +
          month +
          " " +
          year +
          " " +
          hours +
          ":" +
          minutes.substr(-2) +
          ":" +
          seconds.substr(-2);

        arr.push({ ...val, timestamp: time });
      }

      console.log(arr);
      setData(arr);

      //arr.push([{ type: "date", label: "Day" }, "TTK"]);
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
        //setData(response.data);
        InitalizeChart(response.data);
      });
    };

    fetchHistoricalPrice();
  }, []);

  //console.log(chartData);

  return (
    <div
      className="container"
      style={{
        width: "1200px",
        height: "500px",
        alignItems: "center",
      }}
    >
      <h2>TTK Price History</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={1000}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis dataKey="price" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
      {
        <table>
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
        </table>
      }
    </div>
  );
};

export default HistoricalPrice;
