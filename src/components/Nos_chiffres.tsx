import * as Icon from "react-bootstrap-icons";
import { useState } from "react";
import "../components/styles/Nos_chiffres.css";
import Table from 'react-bootstrap/Table';


export default function Nos_Chiffres() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(0);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [show4, setShow4] = useState(true);
  const [show5, setShow5] = useState(true);
  const changState = (num: any) => {
    setShow1(num)

  }
  function BasicExample() {
    return (
      <Table className="tbl">
        <thead style={{ backgroundColor: "ButtonHighlight" }}>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>

            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  return (
    <div className="Nos_chiffres">
      <div>
        {show1 == 1 ? (
          <div className="item">
            <Icon.ChevronUp size={15} color="#039af5" />
            <button  onClick={() => changState(0)}>
              Comment participer ?
            </button>
            <p> </p>
            <p> </p>
            <div className="open">
              <p>
                Il existe deux façons de participer. Vous pouvez soit acheter
                des parts, soit faire un don pour encourager le projet. <p></p>
                Pour acheter des parts, il suffit de se rendre sur le site
                www.kamcuredent.com, se connecter à son compte (crée au
                préalable), cliquer sur ‟acheter des partsˮ, et puis suivre la
                procédure.Pour faire un don, il suffit d’aller à la page
                d’accueil de KAMCUREDENT au site www.kamcuredent.com, cliquer
                sur ‟ faire un donˮ, et puis suivre la procédure.{" "}
              </p>
            </div>

          </div>
        ) : (
          <div className="item1">
            <Icon.ChevronDown size={15} color="#000" />
            <button  onClick={() => changState(1)}>
              Comment participer ?
            </button>
          </div>
        )}
        <p> </p>
        <p> </p>
        {show1 == 2 ? (
          <div className="item">
            <Icon.ChevronUp size={15} color="#039af5" />
            <button onClick={() => changState(0)}>
              {" "}
              Comment acheter des parts ?{" "}
            </button>
            <p> </p>
            <p> </p>
            <div className="open">
              <p style={{ fontWeight: "bold" }}>
                Quel que soit le pays dans lequel vous vous trouvez, pour
                acheter des parts, il existe trois possibilités :
              </p>
              <p style={{ justifyContent: "space-between" }}>
                <ul>
                  <li>
                    La première consiste simplement à effectuer l'achat
                    directement sur le site par carte visa, master card, paypal,
                    mtn mobile money ou orange money. Les transferts par mobile
                    money et orange money ne sont possible que pour le Cameroun.
                  </li>
                  <li>
                    La deuxième consiste à contacter un vendeur, selon le pays
                    dans lequel on se trouve. La liste des vendeurs en fonction
                    des pays, est disponible sur le site web kamcuredent.com, à
                    l’onglet ‘’liste des vendeurs’’ de votre compte.
                  </li>
                  <li>
                    La troisième consiste à utiliser les moyens de transactions
                    suivantes: Virement au compte , nom du compte : , adresse :
                    Cameroun, Yaoundé .
                  </li>
                </ul>
              </p>
              <p>
                <p>
                  L’utilisateur utilisera donc parmi les moyens susmentionnés,
                  celui qui lui convient selon le pays dans lequel il se trouve.
                </p>
                <p style={{ fontSize: 15, color: "red", fontWeight: "bold" }}>
                  NB: Pour l’utilisation des moyens de paiement de la troisième
                  possibilités, après avoir effectué un achat de parts, bien
                  vouloir nous envoyer une photocopie, une photo, ou une capture
                  d’écran du recu de paiement, à l’adresse mail :
                  kamcuredentafrica@gmail.com .
                </p>
              </p>
            </div>

          </div>
        ) : (
          <div className="item1">
            <Icon.ChevronDown size={15} color="#000" />
            <button onClick={() => changState(2)}>
              {" "}
              Comment acheter des parts ?
            </button>
                      </div>
        )}
        <p> </p>
        <p> </p>

        {show1 == 3 ? (
          <div className="item">
            <Icon.ChevronUp size={15} color="#039af5" />
            <button onClick={() => changState(0)}>
              {" "}
              Qu'est ce qui garanti mon investissement dans LACTHEL ?{" "}
            </button>
            <p> </p>
            <p> </p>
            <div className="open">
              {" "}
              <p>
                un contrat pour chaque actionnaire est visible dans le menu
                'profil utisateur' dès achat des parts. pour le visualiser et le
                telecharger, vous devez cliquer sur 'Certificat'.
              </p>
            </div>
          </div>
        ) : (
          <div className="item1">
            <Icon.ChevronDown size={15} color="#000" />
            <button onClick={() => changState(3)}>
              {" "}
              Qu'est ce qui garanti mon investissement dans LACTHEL ?
            </button>
            
          </div>
        )}
        <p> </p>
        <p> </p>

        {show1 == 4 ? (
          <div className="item">
            <Icon.ChevronUp size={15} color="#039af5" />
            <button onClick={() => changState(0)}>
              {" "}
              Comment fonctionne le parrainage ?{" "}
            </button>
            <p> </p>
            <p> </p>
            <div className="open">
              {" "}
              <p>
                Le programme de parrainage fonctionne en utilisant votre lien de
                parrainage. Vous obtenez 10% en bonus pour tout achat effectué
                par une personne que vous avez parrainée. Le parrainage est pris
                en compte si le nouvel investisseur crée un compte sur la
                plateforme www.kamcuredent.com en utilisant votre lien de
                parrainage. Le lien de parrainage de chaque utilisateur est
                disponible dans son profil. Vous pouvez le partager sur
                faceboock ou envoyer directement à vos proches.
              </p>
            </div>
          </div>
        ) : (
          <div className="item1">
            <Icon.ChevronDown size={15} color="#000" />
            <button onClick={() => changState(4)}>
              {" "}
              Comment fonctionne le parrainage ?
            </button>
           
          </div>
        )}

        <p> </p>
        <p> </p>

        {show1 == 5 ? (
          <div className="item">
            <Icon.ChevronUp size={15} color="#039af5" />
            <button onClick={() => changState(0)}>
              {" "}
              Est il obligé d' acheter des parts au moment de l' inscription ?{" "}
            </button>
            <p> </p>
            <p> </p>
            <div className="open">
              {" "}
              <p>
                Non . On peut s'inscrire sur la plate forme a tout moment , et
                acheter des parts lorqu'on le desire et lorsqu'on est prêt.
                L'inscription et l'achat des parts sont deux choses
                différentes..
              </p>
            </div>
          </div>
        ) : (
          <div className="item1">
            <Icon.ChevronDown size={15} color="#000" />
            <button onClick={() => changState(5)}>
              Est il obligé d' acheter des parts au moment de l' inscription ?
            </button>
            
          </div>
        )}

        <p> </p>
        <p> </p>

        {show1 == 6 ? (
          <div className="item">
            <Icon.ChevronUp size={15} color="#039af5" />
            <button onClick={() => changState(0)}>
              {" "}
              Comment fonctionne le pack investissement ?{" "}
            </button>
            <p> </p>
            <p> </p>
            <div className="open">
              <p>
                <BasicExample />
              </p>
            </div>

          </div>
        ) : (
          <div className="item1">
            <Icon.ChevronDown size={15} color="#000" />
            <button onClick={() => changState(6)}>
              {" "}
              Comment fonctionne le pack investissement ?
            </button>
                      </div>
        )}
      </div>
    </div>
  );
}