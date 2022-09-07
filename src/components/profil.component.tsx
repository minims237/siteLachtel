import Input from "./input.component"
import ProfilAc from "./profilAc.component"
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
               
                <Input  name="PRENOM(S)" placeholder="PRENOM(S)" />
                </div>
            </div>
            <div className="input_container">
                <Input name="PAYS" placeholder="PAYS" />
                <div className="ecart_inpt">
               
               <Input name="VILLE" placeholder="VILLE" />
               </div>
            </div>
            <hr className="pf_trait"/>
            <h5>VOS INFORMATION DE PAIEMENT</h5>
            <h4>Adresse mail paypal</h4>
            <input className="pf_input_inf" placeholder="exemple@gmail.com" />
            <div className="input_container">
                <Input name="Numéro mtn mobile money(Cameroun uniquement)" placeholder="Numéro mtn mobile money" />
                <div className="ecart_inpt">
               
               <Input name="Numéro Orange Money(Cameroun uniquement)" placeholder="Numéro Orange Money" />
               </div>
            </div>
            <h4>Informations bancaire (Entrez toutes vos informations bancaire dont nous avons besoin pour vous éffectuer votre dépôt)</h4>
            <textarea  className="pf_input_inf_banc" />
            <h1>Assurez-vous de remplir correctement vos informations de paiement. Nous ferons  un choix parmi celles que vous avez rempli pour effectuer vos dépôts.</h1>
            <hr />
            <h5>VOS IDENTIFIANTS</h5>
            <div className="input_container">
                <Input name="Email" placeholder="Email" />
                <div className="ecart_inpt">
               
               <Input name="Numero de téléphone" placeholder="Numero de téléphone" />
               </div>
            </div>
            <h4>mot de passe</h4>
            <input type="password" className="pf_input_pass" />
            <hr />
            <div className="pf_countainer_btn">
                <button className="btn1">sauvegarder les changements</button>
                <button className="btn2">changer mon mot de passe</button>
            </div>
            
        </div>
    )
}
export default Profil