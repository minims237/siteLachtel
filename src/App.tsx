import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import HomePage from "./components/Home";
import Page_accueil from "./pages/Page_accueil";

function App() {
  return (
    <div className="app">
        <Router>
          <Page_accueil />
        </Router>
    </div>
  );
}

export default App;
