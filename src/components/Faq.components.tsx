import React from "react";
import * as Icon from "react-bootstrap-icons";
import { useState } from "react";
import "../components/styles/Nos_chiffres.css";
import Table from 'react-bootstrap/Table';


export default function Faq() {
  const [show, setShow] = useState(1);

  
  function BasicExample() {
    return (
      <Table className="tbl">
        <thead style={{backgroundColor : "ButtonHighlight"}}>
          <tr >
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
        {show==1 ? (
          <div className="item">
            <Icon.ChevronUp size={15} color="#039af5" />
            <button onClick={() => setShow(0)}>
              Comment participer ?
            </button>
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
            <Icon.ChevronDown size={15}  />
            <button color="#039af5" onClick={() => setShow(1)}>
              Comment participer ?
            </button>
            
          </div>
        )}
        {show==2 ? (
          <div className="item">
            <Icon.ChevronUp size={15} color="#039af5" />
            <button onClick={() => setShow(0)}>
              {" "}
              Comment acheter des parts ?{" "}
            </button>
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
            <Icon.ChevronDown size={15}  />
            <button onClick={() => setShow(2)}>
              {" "}
              Comment acheter des parts ?
            </button>
            
            
          </div>
        )}
       

        {show==3 ? (
          <div className="item">
            <Icon.ChevronUp size={15} color="#039af5" />
            <button onClick={() => setShow(0)}>
              {" "}
              Qu'est ce qui garanti mon investissement dans LACTHEL ?{" "}
            </button>
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
            <Icon.ChevronDown size={15}  />
            <button onClick={() => setShow(3)}>
              {" "}
              Qu'est ce qui garanti mon investissement dans LACTHEL ?
            </button>
            
           
          </div>
        )}
        
      

        {show==5 ? (
          <div className="item">
            <Icon.ChevronUp size={15} color="#039af5" />
            <button onClick={() => setShow(0)}>
              {" "}
              Est il obligé d' acheter des parts au moment de l' inscription ?{" "}
            </button>
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
            <Icon.ChevronDown size={15}  />
            <button onClick={() => setShow(5)}>
              Est il obligé d' acheter des parts au moment de l' inscription ?
            </button>
           
          </div>
        )}

        

        {show==6 ? (
          <div className="item">
            <Icon.ChevronUp size={15} color="#039af5" />
            <button onClick={() => setShow(0)}>
              {" "}
              Comment fonctionne le pack investissement ?{" "}
            </button>
            <div className="open">
              <p>
                <BasicExample/>
              </p>
            </div>
          </div>
        ) : (
          <div className="item1">
            <Icon.ChevronDown size={15}  />
            <button onClick={() => setShow(6)}>
              {" "}
              Comment fonctionne le pack investissement ?
            </button>
            
          </div>
        )}
      </div>
    </div>
  );
}