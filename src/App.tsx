import { useState } from "react";
import useFirebase from "./hooks/useFirebase";

const App = () => {
  const { writeToDb } = useFirebase();

  const [result, setResult] = useState<string>("idle");

  const writeToDbTest = () => {
    setResult("loading...");

    writeToDb("albums", {
      album_id: "test",
    })
      .then(() => {
        setResult("success");
      })
      .catch((err) => {
        setResult(err);
      });
  };

  return (
    <div className="App">
      <button onClick={writeToDbTest}>Write to DB</button>
      <p>{result}</p>
    </div>
  );
};

export default App;
