import React from "react";

import "./App.css";
import Header from "./components/Header";
import Addform from "./components/Addform";
import Cardbox from "./components/Cardbox";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Addform />
        <Cardbox>hihi</Cardbox>
      </main>
      <footer>풋터</footer>
    </div>
  );
}

export default App;
