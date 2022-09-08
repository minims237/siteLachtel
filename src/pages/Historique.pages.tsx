import TopBar from "../components/Topbar.Component";
import "../components/styles/Page_accueil.styles.css";
import { LastTransactions } from "../components/LastTransactions.js";
import TransactionItem from "../components/TransactionItem.Component";
import ListAccueilItem from "../components/ListAccueilItem.component";


const Historique = () => {

  return (
    <div>
      <div className="Page_accueil_profil">
        <div className="all_top_side">
          <div className="under_top_side">
          <TopBar title="HISTORIQUE" Username="THE CHECKER" />
            <ListAccueilItem />

          </div>
        </div>
        <div className="bottom_side">
          
          
        </div>
      </div>
    </div>
  );
};

export default Historique;
