import { useState } from "react";
import "./styles.css";

let data = {
  sprinter: [
    {
      name: "Usain Bolt",
      achievement: "8 Olympic golds and 11 World  Championship golds"
    },
    {
      name: "Carl Lewis",
      achievement: " 6 Olympic golds and 6 World Championship golds"
    }
  ],
  swimmer: [
    {
      name: "Michael Phelps",
      achievement: "50 gold 7 silver and 2 bronze spanning the Olympics"
    },
    {
      name: "Mark Spitz",
      achievement: "9 Olympic golds and  1 silver and 1 bronze"
    }
  ],
  shuttler: [
    {
      name: "Lin Dan",
      achievement: "2 Olympic and 5 world championship"
    },
    {
      name: "Lee Chong Wei",
      achievement: "2 Olympics Silver "
    }
  ]
};
export default function App() {
  const textStyle = {
    color: "black",
    textAlign: "center",
    fontSize: "1.2rem",
    fontWeight: "bolder"
  };
  const buttonStyle = {
    border: "1px solid #C8A2C8",
    padding: "0.5rem 0.3rem",
    cursor: "pointer",
    margin: "2%",
    borderRadius: "1rem",
    background: "#C8A2C8"
  };
  const listElement = {
    listStyle: "none",
    padding: "1rem",
    border: "1px dashed #C8A2C8",
    borderRadius: "2%",
    margin: "1rem 0rem",
    width: "70%"
  };
  const [book, bookName] = useState("sprinter");

  function bookDeatils(b) {
    bookName(b);
  }

  return (
    <>
      <div className="App" style={textStyle}>
        <div>
          <h2>🎊 Olympics🎊</h2>
          <p>Check out your favorite athlete History records </p>
        </div>

        <div style={{ textAlign: "left" }}>
          <ul style={{ textAlign: "-webkit-center" }}>
            {data[book].map((e, k) => (
              <li key={k} style={listElement}>
                <div style={{ fontSize: "larger" }}>{e.name}</div>
                <div style={{ fontSize: "small" }}>{e.achievement}</div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {Object.keys(data).map((b) => (
            <button onClick={() => bookDeatils(b)} key={b} style={buttonStyle}>
              {b}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
