import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import HomePage from "./components/Home";
import ProduitDetail from "./components/produitDetail.component";
import Produit from "./components/nosProduits.component";

function App() {
  return (
    <div className="app">
        <Router>
          <Produit />
        </Router>
    </div>
  );
}

export default App;
