import { useState } from "react";
import "./App.css";
import { CoinsList } from "./components/CoinsList";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";

function App() {
  const [rows, setRows] = useState(10);
  return (
    <div className="App">
      <Navbar />
      <Main rows={rows} setRows={setRows} />
      <CoinsList rows={rows} setRows={setRows} />
    </div>
  );
}

export default App;
