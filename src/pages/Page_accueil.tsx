import React from "react";
import TopBar from "../components/Topbar.Component";
import * as Icon from "react-bootstrap-icons";
import "../components/styles/Page_accueil.styles.css";
import AccueilItem from "../components/AccueilItem.Component";
import { LastTransactions } from "../components/LastTransactions.js";
import TransactionItem from "../components/TransactionItem.Component";

const Page_accueil = () => {
  const Tab_item = [
    {
      title: "VALEUR DE LA PART",
      value: "5 000 FCFA",
      date: "Reste 141j 12h 38m 33s",
      icon: <div style={{backgroundColor:"#2BFFC6", width:"48px", height:'48px', display:'flex', justifyContent:'center', alignItems:'center', borderRadius:'50%'} }><Icon.Cash color="#fff" size={30}/></div>,
    },
    {
      title: "PARTS EN CIRCULATION",
      value: "297 233,98",
      date: " 5 638,23 ce mois",
      icon: <div style={{backgroundColor:"#FB6340", width:"48px", height:'48px', display:'flex', justifyContent:'center', alignItems:'center', borderRadius:'50%'} }><Icon.PieChartFill color="#fff" size={30}/></div>,
    },
    {
      title: "MONTANT COLLECTÉ SERIE B",
      value: "83 857 600,00 FCFA",
      date: "8 191 150,00 ce mois",
      icon: <div style={{backgroundColor:"#5E72E4", width:"48px", height:'48px', display:'flex', justifyContent:'center', alignItems:'center', borderRadius:'50%'} }><Icon.CurrencyDollar color="#fff" size={30} /></div>,
    },
    {
      title: "MEMBRES",
      value: "12 171",
      date: " 79 ce mois",
      icon: <div style={{backgroundColor:"#FFD600", width:"48px", height:'48px', display:'flex', justifyContent:'center', alignItems:'center', borderRadius:'50%'} }><Icon.PeopleFill color="#fff" size={30}/></div>,
    },
    {
      title: "BÉNÉFICE RÉALISÉ 2021",
      value: "30 000 000 FCFA",
      date: "0,00 cette année",
      icon: <div style={{backgroundColor:"#2DCE89", width:"48px", height:'48px', display:'flex', justifyContent:'center', alignItems:'center', borderRadius:'50%'} }><Icon.CashCoin color="#fff" size={30} /></div>,
    },
    {
      title: "CHIFFRE D'AFFAIRE 2021",
      value: "371 190 940 FCFA",
      date: " 0,00 cette année",
      icon: <div style={{backgroundColor:"#F5365C", width:"48px", height:'48px', display:'flex', justifyContent:'center', alignItems:'center', borderRadius:'50%'} }><Icon.BarChartLineFill color="#fff" size={30} /></div>,
    },
  ];
  return (
    <div>
      <div className="Page_accueil_profil">
        <div className="all_top_side">
          <div className="top_side">
            <TopBar title="ACCUEIL" Username="THE CHECKER" />
          </div>
          <div className="under_top_side">
            {Tab_item.map((i) => (
              <AccueilItem
                title={i.title}
                value={i.value}
                date={i.date}
                children={i.icon}
              />
            ))}
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
