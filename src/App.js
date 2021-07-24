import { useState } from "react";
import "./styles.css";

let data = {
  sprinter: [
    {
      name: "Usain Bolt",
      achievement: "8 Olympic golds and 11 World Championship golds"
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
  const [book, bookName] = useState("sprinter");

  function bookDeatils(b) {
    bookName(b);
  }

  return (
    <>
      <div className="App" style={{ textAlign: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h2>
            <span>📚</span> Olympics
          </h2>
          <p>Check out your favorite athlete History records </p>
        </div>
        <div style={{ textAlign: "center" }}>
          {Object.keys(data).map((b) => (
            <button
              onClick={() => bookDeatils(b)}
              key={b}
              style={{
                border: "1px solid #C8A2C8",
                cursor: "pointer",
                margin: "1% 3%",
                borderRadius: "2px",
                padding: "4px",
                background: "#C8A2C8"
              }}
            >
              {b}
            </button>
          ))}
        </div>
        <hr></hr>
        <div style={{ textAlign: "left" }}>
          <ul style={{ textAlign: "-webkit-center" }}>
            {data[book].map((e, k) => (
              <li
                key={k}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px dashed #C8A2C8",
                  borderRadius: "2%",
                  margin: "1rem 0rem",
                  width: "70%"
                }}
              >
                <div style={{ fontSize: "larger" }}>{e.name}</div>
                <div style={{ fontSize: "small" }}>{e.achievement}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
