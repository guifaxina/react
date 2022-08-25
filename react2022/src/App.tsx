import Counter from "./components/Counter";
import Head from "./components/Head";
import { useState, useEffect } from "react";

function App() {
  return (
    <div>
      <Head name='Samara'></Head>
      <Counter count={1}></Counter>
    </div>
  );
}

export default App;
