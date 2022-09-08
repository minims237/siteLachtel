import "../components/styles/Page_accueil.styles.css";
import Profil from "../components/profil.component";
import ProfilAc from "../components/profilAc.component";


const ProfilUser = () => {

  return (
    <div>
      <div className="Page_accueil_profil">
        <div className="all_top_sides">
          <div className="under_top_side">
            <ProfilAc />
          </div>
        </div>
        <div className="bottom_side" id="formul">
          <Profil />
        </div>
      </div>
    </div>
  );
};

export default ProfilUser;
