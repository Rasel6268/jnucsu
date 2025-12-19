import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import HackerTracker from "./components/HackerTracker";
import CandidateTracker from "./components/CandidateTracker";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CandidateTracker></CandidateTracker>
    </>
  );
}

export default App;
