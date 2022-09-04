import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import HomePage from "./components/Home";
import Profil from "./components/profil.component";
import Input from "./components/input.component";
import ProfilAc from "./components/profilAc.component";

function App() {
  return (
    <div className="app">
        <Router>
          <ProfilAc/>
        </Router>
    </div>
  );
}

export default App;
