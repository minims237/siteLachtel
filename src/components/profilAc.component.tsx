import Input from "./input.component"
import "./styles/profilAc.css"
const ProfilAc = () => {
    return (
        <div className="pfAc_container">
            <div className="pfAc_container_txt">
                <h4>salut!</h4>
                <h3>THE CHECKER</h3>
                <h5>Ceci est votre page de profil. Vous pouvez voir l'état d'avancement de votre investissement ou gérer votre profil en cliquant sur le bouton modifier. Si vous modifiez, n'oubliez pas de sauvegarder .</h5>
                <a href="#formul">
                    <div className="pfAc_btn">
                        modifier mon profil
                    </div>
                </a>
            </div>
        </div>
    )
}
export default ProfilAc