
import { useState } from "react";
import "./styles/achat.css";
import * as Icon from "react-bootstrap-icons";
import investir from "../assets/img/investir.png"
const Achat = () => {
    return (
        <div className="a_container">
            <div className="a_container_title">
                <h4>PAIMENT</h4>
                <h2>Formulaire de paiement</h2>
            </div>
            <div className="a_container_ctn">
                <h3>information sur le paiement</h3>
                <div className="a_container_ctn_choix">
                    <h4>Moyen de paiement</h4>
                    <div className="a_container_ctn_choix_inline">
                        <div className="a_container_ctn_choix_item">
                            <input type='radio' name="chx" />
                            <div>
                                <img src={investir} alt="mode de paiement" />
                             </div>
                        </div>
                        <div className="a_container_ctn_choix_item">
                            <input type='radio' name="chx" />
                            <div>
                                <img src={investir} alt="mode de paiement" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="a_container_ctn_inp">
                    <div className="a_container_ctn_inp_item">
                        <div className="a_container_ctn_inp_item_txt">
                            <h4>Montant en FCFA sans frais (<span>*</span>)</h4>
                        </div>
                        <div className="a_container_ctn_inp_item_saisie">
                            <input type='text' />
                        </div>
                        <div className="a_container_ctn_inp_item_txtb">
                            <h4> ( <span> Montant en FCFA sans frais  </span>)</h4>
                        </div>
                    </div>
                    <div className="a_container_ctn_inp_item">
                        <div className="a_container_ctn_inp_item_txt">
                            <h4>Montant en FCFA sans frais (<span>*</span>)</h4>
                        </div>
                        <div className="a_container_ctn_inp_item_saisie">
                            <input type='text' />
                        </div>
                        <div className="a_container_ctn_inp_item_txtb">
                            <h4> ( <span>Montant en FCFA sans frais </span> )</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="a_container_ctn">
                <h3>information sur l'achateur</h3>

                <div className="acheteur a_container_ctn_inp">
                    <div className="a_container_ctn_inp_item">
                        <div className="a_container_ctn_inp_item_txt">
                            <h4>Telephone (<span>*</span>)</h4>
                        </div>
                        <div className="a_container_ctn_inp_item_saisie">
                            <input type='text' />
                        </div>

                    </div>
                    <div className="a_container_ctn_inp_item">
                        <div className="a_container_ctn_inp_item_txt">
                            <h4>Adresse (<span>*</span>)</h4>
                        </div>
                        <div className="a_container_ctn_inp_item_saisie">
                            <input type='text' />
                        </div>

                    </div>


                </div>
                <div className="acheteur a_container_ctn_inp ">
                    <div className="a_container_ctn_inp_item">
                        <div className="a_container_ctn_inp_item_txt">
                            <h4>Nom (<span>*</span>)</h4>
                        </div>
                        <div className="a_container_ctn_inp_item_saisie">
                            <input type='text' />
                        </div>

                    </div>
                    <div className="a_container_ctn_inp_item">
                        <div className="a_container_ctn_inp_item_txt">
                            <h4>Prenom (<span>*</span>)</h4>
                        </div>
                        <div className="a_container_ctn_inp_item_saisie">
                            <input type='text' />
                        </div>

                    </div>


                </div>
                <div className="a_container_ctn_box">
                    <input type="checkbox" name="agree-term" className="agree-term" />
                    <label className="label-agree">Je declare avoir lu et compris la <a href="#" className="term-service">Politique de lacthel</a></label>
                </div>

                <div className="a_container_ctn_submit">
                <button> Aller au paiement</button>
                </div>
            </div>

        </div>

    )
}

export default Achat;