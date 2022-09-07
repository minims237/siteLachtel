import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import HomePage from "./components/Home";

import Page_accueil from "./pages/Page_accueil";
import Account from "./pages/Account.pages";


function App() {
  return (
    <div className="app">
        <Router>

          <Account />

        </Router>
    </div>
  );
}

export default App;
