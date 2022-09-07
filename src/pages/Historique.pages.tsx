import React from "react";
import TopBar from "../components/Topbar.Component";
import * as Icon from "react-bootstrap-icons";
import "../components/styles/Page_accueil.styles.css";
import AccueilItem from "../components/AccueilItem.Component";
import { LastTransactions } from "../components/LastTransactions.js";
import TransactionItem from "../components/TransactionItem.Component";
import ListItemAccueil from "../components/ListItemAccueil.component";

const Historique = () => {
  
  return (
    <div>
      <div className="Page_accueil_profil">
        <div className="all_top_side">
         
          <div className="under_top_side">
           
              <ListItemAccueil/>
          
          </div>
        </div>
        <div className="bottom_side">
          
        </div>
      </div>
    </div>
  );
};

export default Historique;
