import "./../components/styles/account.css"
import * as Icon from "react-bootstrap-icons";
import { useState } from "react";
import Page_accueil from "./Page_accueil";
import ProfilUser from "./Profil.pages";
import AchatPart from "./Achat.pages";
import Historique from "./Historique.pages";
import ModalPopUp from "../components/Modal.components";
const Account = () => {
    const [menu, setMenu] = useState(1)
    const [show, setShow] = useState(false)

    return (
        <div className="account">

            <div className="account_menu">
                <div className="account_menu_title">
                    <h1>LACHTEL</h1>
                </div>
                {
                    menu == 1 ? (<div className="account_menu_item_active">
                        <a className="account_menu_item_on" href="#" onClick={() => setMenu(1)}>
                            <h4><Icon.Speedometer2 size={25} color="#039af5" />&nbsp;&nbsp;Acceuil</h4>
                        </a>
                    </div>) : (<div className="account_menu_item">
                        <a className="account_menu_item_on" href="#" onClick={() => setMenu(1)}>
                            <h4><Icon.Speedometer2 size={25} color="#039af5" />&nbsp;&nbsp;Acceuil</h4>
                        </a>
                    </div>)
                }

                {
                    menu == 2 ? (
                        <div className="account_menu_item_active">
                            <a className="account_menu_item_on" href="#" onClick={() => setMenu(2)}>
                                <h4><Icon.PersonFill size={25} color="#039af5" />&nbsp;&nbsp;Profil utilisateur</h4>
                            </a>
                        </div>
                    ) :
                        (
                            <div className="account_menu_item">
                                <a className="account_menu_item_on" href="#" onClick={() => setMenu(2)}>
                                    <h4><Icon.PersonFill size={25} color="#039af5" />&nbsp;&nbsp;Profil utilisateur</h4>
                                </a>
                            </div>
                        )
                }
                {
                    menu == 3 ? (
                        <div className="account_menu_item_active">
                            <a className="account_menu_item_on" href="#" onClick={() => setMenu(3)}>
                                <h4><Icon.PieChartFill size={25} color="#039af5" />&nbsp;&nbsp;Achater des parts</h4>
                            </a>
                        </div>
                    ) :
                        (
                            <div className="account_menu_item">
                                <a className="account_menu_item_on" href="#" onClick={() => setMenu(3)}>
                                    <h4><Icon.PieChartFill size={25} color="#039af5" />&nbsp;&nbsp;Achater des parts</h4>
                                </a>
                            </div>
                        )
                }

                {
                    menu == 4 ? (
                        <div className="account_menu_item_active">
                            <a className="account_menu_item_on" href="#" onClick={() => setMenu(4)}>
                                <h4><Icon.ListUl size={25} color="#039af5" />&nbsp;&nbsp;Historique</h4>
                            </a>
                        </div>
                    ) : (
                        <div className="account_menu_item">
                            <a className="account_menu_item_on" href="#" onClick={() => setMenu(4)}>
                                <h4><Icon.ListUl size={25} color="#039af5" />&nbsp;&nbsp;Historique</h4>
                            </a>
                        </div>
                    )
                }

                {
                    menu == 5 ? (<div className="account_menu_item_active">
                        <a className="account_menu_item_on" href="#" onClick={() => setMenu(5)}>
                            <h4><Icon.Unlock size={25} color="#039af5" />&nbsp;&nbsp;Deconnexion</h4>
                        </a>
                    </div>) : (<div className="account_menu_item">
                        <a className="account_menu_item_on" href="#" onClick={() => setMenu(5)}>
                            <h4><Icon.Unlock size={25} color="#039af5" />&nbsp;&nbsp;Deconnexion</h4>
                        </a>
                    </div>)
                }


                <div>
                    <hr />
                    <div className="account_menu_doc">
                        <h2>DOCUMENTATION</h2>
                    </div>
                    <div className="account_menu_item">
                        <a className="account_menu_item_on" href="./../const/livres.pdf">
                            <h4><Icon.Book size={25} color="#039af5" />&nbsp;&nbsp;Livre projet</h4>
                        </a>
                    </div>
                </div>
            </div>
            <div className="account_ctn">
                {
                    menu==1?(<Page_accueil/>):(<div></div>)
                }
                {
                    menu==2?(<ProfilUser/>):(<div></div>)
                }
                {
                    menu==3?(<AchatPart/>):(<div></div>)
                }
                   {
                    menu==4?(<Historique/>):(<div></div>)
                }
            </div>
            
        </div>
    )
}

export default Account