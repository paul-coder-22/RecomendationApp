import React from "react";

function buttonRender({ dataRender, listOfValue }) {
  console.log(listOfValue);
  const buttonStyle = {
    border: "1px solid #C8A2C8",
    padding: "0.5rem 0.3rem",
    cursor: "pointer",
    margin: "2%",
    borderRadius: "1rem",
    background: "#00BFFF"
  };

  return (
    <>
      <div>
        {Object.keys(listOfValue).map((b) => (
          <button onClick={() => dataRender(b)} key={b} style={buttonStyle}>
            {b}
          </button>
        ))}
      </div>
    </>
  );
}

export default buttonRender;
