
import "./styles/connexion.css";
const Connexion = () => {
    return (


        <div className="s_container">

            <form method="POST" id="signup-form" className="signup-form">
                <div className="signup_form">
        
                    <div className="signup_for_title">
                        <div className="signup_for_title_a">
                            <h3>Connexion</h3>
                        </div>
                    </div>

                    <div className="signup_for_box">
                        <div className="signup_for">
                            <input type="Adresse" placeholder="Adresse Mail" />
                        </div>

                        <div className="signup_for">

                            <input type="password" name="pass" id="pass" placeholder="Password" />
                        </div>

                        <div className="submit-class">
                            <input type="submit" name="submit" id="submit" className="form-submit submit" value="Se connecter" />
                        </div>
                   
                    </div>
                </div>
            </form>
        </div>




    )
}

export default Connexion;