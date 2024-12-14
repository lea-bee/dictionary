import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>Dictionary 🕮</section>
      </header>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer className="App-footer">
        <small>
          Coded by{" "}
          <strong>
            <a
              href="https://github.com/lea-bee"
              target="_blank"
              rel="noreferrer"
            >
              Leah Twigg
            </a>
          </strong>{" "}
          and is{" "}
          <strong>
            <a
              href="https://github.com/lea-bee/dictionary"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced.
            </a>
          </strong>
        </small>
      </footer>
    </div>
  );
}

export default App;
