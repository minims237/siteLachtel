import Input from "./input.component"
import "./styles/profil.css"
const Profil = () => {
    return (
        <div className="pf_container">
            <div className="p_container_cmpt" >
            <h2>Mon compte</h2>
            </div>
            <h5>VOS INFORMATIONS</h5>
            <div className="input_container">
                
                <Input name="NOM(S)" placeholder="NOM(S)" />
                <div className="ecart_inpt">
               
                <Input name="NOM(S)" placeholder="NOM(S)" />
                </div>
            </div>
            <div className="input_container">
                <Input name="PAYS" placeholder="PAYS" />
                <div className="ecart_inpt">
               
               <Input name="NOM(S)" placeholder="NOM(S)" />
               </div>
            </div>
            <hr />
            <h5>VOS INFORMATIONS</h5>
            <input className="pf_input_inf" />
            <div className="input_container">
                <Input name="NOM(S)" placeholder="NOM(S)" />
                <div className="ecart_inpt">
               
               <Input name="NOM(S)" placeholder="NOM(S)" />
               </div>
            </div>
            <h4>VOS INFORMATIONS</h4>
            <input className="pf_input_inf" />
            <h4>VOS INFORMATIONS</h4>
            <input className="pf_input_inf" />
            <h4>VOS INFORMATIONS</h4>
            <input className="pf_input_inf" />
            <h4>VOS INFORMATIONS</h4>
            <input className="pf_input_inf" />
            <h3>Assurez-vous de remplir correctement vos informations de paiement.</h3>
            <h3> Nous ferons  un choix parmi celles que vous avez rempli pour effectuer vos dépôts.</h3>
            <hr />
            <h5>VOS IDENTIFIANTS</h5>
            <div className="input_container">
                <Input name="Email" placeholder="Email" />
                <div className="ecart_inpt">
               
               <Input name="NOM(S)" placeholder="NOM(S)" />
               </div>
            </div>
            <h4>mot de passe</h4>
            <input type="password" className="pf_input_inf" />
            <hr />
            <div className="pf_countainer_btn">
                <button className="btn1">sauvegarder les changements</button>
                <button className="btn2">changer mon mot de passe</button>
            </div>
            <hr />
            <h5>AUTRES INFORMATIONS</h5>
            <h2>lien de parrainage</h2> 
            <h3>https://lacthel@gmail.com/index.php?code=0433a4e3bc107d5c854138915771b0d5</h3>
            <div className="">
            </div>
        </div>
    )
}
export default Profil