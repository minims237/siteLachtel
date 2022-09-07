import AccueilItem from "./AccueilItem.Component"
import * as Icon from "react-bootstrap-icons";
import "./styles/listItem.styles.css"
import TopBar from "./Topbar.Component";
const ListItemAccueil = () => {
    const Tab_item1 =
    {
        title: "VALEUR DE LA PART",
        value: "5 000 FCFA",
        date: "Reste 141j 12h 38m 33s",
        icon: <div style={{ backgroundColor: "#2BFFC6", width: "48px", height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}><Icon.Cash color="#fff" size={30} /></div>,
    }
    const Tab_item2 = 
        {
            title: "PARTS EN CIRCULATION",
            value: "297 233,98",
            date: " 5 638,23 ce mois",
            icon: <div style={{ backgroundColor: "#FB6340", width: "48px", height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}><Icon.PieChartFill color="#fff" size={30} /></div>,
        }
    
    const Tab_item3 = 
        {
            title: "MONTANT COLLECTÉ SERIE B",
            value: "83 857 600,00 FCFA",
            date: "8 191 150,00 ce mois",
            icon: <div style={{ backgroundColor: "#5E72E4", width: "48px", height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}><Icon.CurrencyDollar color="#fff" size={30} /></div>,
        }
    
    const Tab_item4 = 
        {
            title: "MEMBRES",
            value: "12 171",
            date: " 79 ce mois",
            icon: <div style={{ backgroundColor: "#FFD600", width: "48px", height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}><Icon.PeopleFill color="#fff" size={30} /></div>,
        }
    
    const Tab_item5 =
    {
        title: "BÉNÉFICE RÉALISÉ 2021",
        value: "30 000 000 FCFA",
        date: "0,00 cette année",
        icon: <div style={{ backgroundColor: "#2DCE89", width: "48px", height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}><Icon.CashCoin color="#fff" size={30} /></div>,
    }

    const Tab_item6 =
    {
        title: "CHIFFRE D'AFFAIRE 2021",
        value: "371 190 940 FCFA",
        date: " 0,00 cette année",
        icon: <div style={{ backgroundColor: "#F5365C", width: "48px", height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}><Icon.BarChartLineFill color="#fff" size={30} /></div>,
    }


    return (
        <div className="list_container">
            <div className="top_side">
            <TopBar title="ACCUEIL" Username="THE CHECKER" />
          </div>
            <div className="list_container_inline">
                <AccueilItem
                    title={Tab_item1.title}
                    value={Tab_item1.value}
                    date={Tab_item1.date}
                    children={Tab_item1.icon}
                />
                <AccueilItem
                    title={Tab_item2.title}
                    value={Tab_item2.value}
                    date={Tab_item2.date}
                    children={Tab_item2.icon}
                />
                <AccueilItem
                    title={Tab_item3.title}
                    value={Tab_item3.value}
                    date={Tab_item3.date}
                    children={Tab_item3.icon}
                />
            </div>
            <div className="list_container_inline">
                <AccueilItem
                    title={Tab_item4.title}
                    value={Tab_item4.value}
                    date={Tab_item4.date}
                    children={Tab_item4.icon}
                />
                <AccueilItem
                    title={Tab_item5.title}
                    value={Tab_item5.value}
                    date={Tab_item5.date}
                    children={Tab_item5.icon}
                />
                <AccueilItem
                    title={Tab_item6.title}
                    value={Tab_item6.value}
                    date={Tab_item6.date}
                    children={Tab_item6.icon}
                />
            </div>

        </div>
    )
}
export default ListItemAccueil