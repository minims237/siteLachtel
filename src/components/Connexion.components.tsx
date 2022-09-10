
import { useHistory } from "react-router-dom";
import "./styles/connexion.css";
const Connexion = () => {
    
    let history=useHistory()
    const navigue=()=>history.push("account")
    return (


        <div className="s_container">

            <form method="POST" id="signup-form" className="signup-form">
                <div className="signup_form">
    

                    <div className="signup_for_box">
                        <div className="signup_for">
                            <input type="Adresse" placeholder="Adresse Mail" />
                        </div>

                        <div className="signup_for">

                            <input type="password" name="pass" id="pass" placeholder="Password" />
                        </div>

                        <div className="submit-class">
                            <input type="submit" name="submit" id="submit" className="form-submit submit" value="Se connecter" onClick={()=>navigue()}/>
                        </div>
                   
                    </div>
                </div>
            </form>
        </div>




    )
}

export default Connexion;