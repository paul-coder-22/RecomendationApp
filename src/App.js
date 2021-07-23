import "./styles.css";

let bookList = ["javaScript", "fiction", "budiness"];
let valueArr = [
  {
    title: "javaScript",
    content: [
      {
        name: "Eloquent",
        rating: "5/5"
      },
      {
        name: "You Don't Know JS",
        rating: "3.5/5"
      }
    ]
  },
  {
    title: "fiction",
    content: [
      {
        name: "Eloquent",
        rating: "5/5"
      },
      {
        name: "You Don't Know JS",
        rating: "3.5/5"
      }
    ]
  },
  {
    title: "budiness",
    content: [
      {
        name: "Eloquent",
        rating: "5/5"
      },
      {
        name: "You Don't Know JS",
        rating: "3.5/5"
      }
    ]
  }
];
export default function App() {
  function getDetails(event) {
    console.log(event.target.id);
  }
  let styles = {
    customButton: {
      margin: "20px"
    }
  };
  return (
    <div className="App">
      <h2>
        <span>📚</span> goodbooks
      </h2>
      <p>Check out my favorite books </p>

      <div>
        {bookList.map((e, k) => (
          <button
            key={k}
            id={k}
            style={styles.customButton}
            onClick={getDetails}
          >
            {e}
          </button>
        ))}
      </div>
    </div>
  );
}
