import "./styles.css";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightImage";
import { useState } from "react";
export default function App() {
  const [stage, setStage] = useState(0);

  return (
    <div className="App">
      <LeftContainer stage={stage} setStage={setStage} />
      <RightContainer stage={stage} />
    </div>
  );
}
