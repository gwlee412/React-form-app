import ButtonGroup from "./ButtonGroup";
import { useState } from "react";
import TextInput from "./TextInput";
const labelText = [
  "Apply to work with our agency",
  "What's your budget",
  "Anything else we should know?",
  "Thank you!"
];

export default function LeftContainer({ stage, setStage }) {
  const [selectedButton, setSelectedButton] = useState(0);
  const [email, setEmail] = useState("");
  let content;
  if (stage === 0) {
    content = (
      <TextInput updateValue={setEmail} placeholder="What's your email?" />
    );
  } else if (stage === 1) {
    content = (
      <ButtonGroup
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
    );
  } else if (stage === 2) {
    content = <input type="text" />;
  } else if (stage === 3) {
    content = <h4>{email}</h4>;
  }
  return (
    <div className="left-container">
      <div className="stage-1-content">
        <h3 id="agency-text">{labelText[stage]}</h3>
        {content}
        {stage !== 3 && (
          <button className="nextBtn" onClick={() => setStage(stage + 1)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}
