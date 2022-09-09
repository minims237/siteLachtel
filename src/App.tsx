import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import HomePage from "./components/Home";
import Profil from "./components/profil.component";
import Input from "./components/input.component";
import ProfilAc from "./components/profilAc.component";

import Page_accueil from "./pages/Page_accueil";
import Account from "./pages/Account.pages";


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
