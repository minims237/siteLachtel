
import { useState } from "react";
import "./styles/signup.css";
import * as Icon from "react-bootstrap-icons";
const Signup = () => {
    return (
        <div className="s_container">

            <form method="POST" id="signup-form" className="signup-form">
                <div className="signup_form">

                    <div className="signup_for_title">
                        <div className="signup_for_title_a">
                            <h3>Inscription</h3>
                        </div>
                    </div>

                    <div className="signup_for_box">
                        <div className="signup_for">
                            <input type="text" placeholder="Nom et Prenom" />
                        </div>
                        <div className="signup_for">
                            <input type="Adresse" placeholder="Adresse Mail" />
                        </div>
                        <div className="signup_for">
                            <input type="text" placeholder="Telephone" />
                        </div>
                        <div className="signup_for">
                            <input type="password" name="pass" id="pass" placeholder="Mot De Passe" />
                        </div>
                        <div className="signup_for">
                            <input type="password" name="re_pass" id="re_pass" placeholder="Repeter Mot de Passe" />
                        </div>
                        <div className="signup_for">
                            <input type="text" placeholder="Pays" />
                        </div>
                        <div className="signup_for">
                            <input type="text" placeholder="Ville" />
                        </div>
                        <div className="submit-class">
                            <input type="submit" name="submit" id="submit" className="form-submit submit" value="soumettre" />
                        </div>

                    </div>
                </div>
            </form>
        </div>




    )
}

export default Signup;