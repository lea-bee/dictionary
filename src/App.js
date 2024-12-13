import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer className="App-footer">
        <small>Coded by Leah Twigg</small>
      </footer>
    </div>
  );
}

export default App;
