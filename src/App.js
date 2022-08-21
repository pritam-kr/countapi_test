import "./styles.css";
import countapi from "countapi-js";
import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    (async () => {
      const { value } = await countapi.visits();
      setCount(value);
    })();
  }, []);

  return (
    <div className="App">
      <h1>Page View count: {count}</h1>
    </div>
  );
}
