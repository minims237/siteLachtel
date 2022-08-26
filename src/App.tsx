import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import HomePage from "./components/Home";

function App() {
  return (
    <div className="app">
        <Router>
          <HomePage />
        </Router>
    </div>
  );
}

export default App;
