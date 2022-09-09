import TopBar from "../components/Topbar.Component";
import "../components/styles/Page_accueil.styles.css";
import { LastTransactions } from "../components/LastTransactions.js";
import TransactionItem from "../components/TransactionItem.Component";
import ListAccueilItem from "../components/ListAccueilItem.component";


const Page_accueil = () => {

  return (
    <div>
      <div className="Page_accueil_profil">
        <div className="all_top_side">
          <div className="under_top_side">
            <TopBar title="ACCUEIL" Username="THE CHECKER" />
            <ListAccueilItem />

          </div>
        </div>
        <div className="bottom_side">
          <div className="transactions">
            <div className="transactions_title">
              <p>Dernières transactions</p>
              <button> Voir tout</button>
            </div>
          </div>
          <div className="transactions_table">
            <table className="table">
              <tr className="column_title">
                <td>NUMÉRO</td>
                <td>VALEUR PART</td>
                <td>NOMBRE DE PART</td>
                <td>MONTANT</td>
                <td>MOMENT</td>
              </tr>
              {LastTransactions.map((j) => (
                <TransactionItem
                  number={j.number}
                  value={j.value}
                  part_number={j.part_number}
                  amount={j.amount}
                  monent={j.monent}
                />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page_accueil;
