export default function ButtonGroup({ selectedButton, setSelectedButton }) {
  const buttonText = ["$2k", "$5k", "No limit"];
  const altStyles = {
    border: "none",
    color: "#745E5E",
    background: "white"
  };
  return (
    <div className="button-group">
      {buttonText.map((btnText, i) => (
        <button
          onClick={() => setSelectedButton(i)}
          style={selectedButton === i ? altStyles : {}}
        >
          {btnText}
        </button>
      ))}
    </div>
  );
}
