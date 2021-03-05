import React from "react";
import HistoricalPrice from "./components/HistoricalPrice";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <HistoricalPrice />;
  }
}

export default App;
