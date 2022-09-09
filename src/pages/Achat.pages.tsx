import TopBar from "../components/Topbar.Component";
import "../components/styles/Page_accueil.styles.css";
import { LastTransactions } from "../components/LastTransactions.js";
import TransactionItem from "../components/TransactionItem.Component";
import ListAccueilItem from "../components/ListAccueilItem.component";
import Achat from "../components/Achat.components";


const AchatPart = () => {

  return (
    <div>
      <div className="Page_accueil_profil">
        <div className="all_top_side">
          <div className="under_top_side">
          <TopBar title="ACHAT DES PARTS" Username="THE CHECKER" />
            <ListAccueilItem />

          </div>
        </div>
        <div className="bottom_side">
          
          <Achat/>
        </div>
      </div>
    </div>
  );
};

export default AchatPart;
