import { useState, useEffect } from "react";
import "./App.css";
function App(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    document.title = "What time is it?";
    let clockUpdateHandler = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(clockUpdateHandler);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div className="App">
      <h1>
        It is <span class="text-purple">{date.toLocaleTimeString()}</span>.
      </h1>
    </div>
  );
}

export default App;
