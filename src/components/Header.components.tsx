import * as Icon from "react-bootstrap-icons";
import { useState } from "react";
import logoE from "./../assets/img/logoE.png";
import ModalPopUp from "./Modal.components";
import Signup from "./Signup.components";
import Connexion from "./Connexion.components";
import { Modal } from "react-bootstrap";

const Header = () => {
  const [naviga, setNaviga] = useState(1);
  const [menu, setMenu] = useState(true);
  const [etat, setEtat] = useState("active")
  const [visible, setVisible] = useState(false)
  const [connexion, setConnexion] = useState(false)
  const handleClose = () => setVisible(false)
  const handleCloses = () => setConnexion(false)
  return (
    <div className="h_header">
      <div>
        <img src={logoE} width="150" height="50" className="logoBlog" />{" "}
      </div>

      {menu ? (
        <div className="h_header_oneBlogA">
          <div className="menuSection">
            <div className="closeBtn">
              <Icon.X size="46" />
            </div>
            <div className="sectionTwo">
              <div className="h_navi">
                {naviga == 1 ? (
                  <li>
                    <a
                      href="#accueil"
                      className="active"
                      onClick={() => setNaviga(1)}
                    >
                      Accueil
                    </a>
                  </li>
                ) : (
                  <li>
                    <a href="#accueil" onClick={() => setNaviga(1)}>
                      Accueil
                    </a>
                  </li>
                )}

                {naviga == 2 ? (
                  <li>
                    <a
                      href="#apropos"
                      className="active"
                      onClick={() => setNaviga(2)}
                    >
                      A Propos
                    </a>
                  </li>
                ) : (
                  <li>
                    <a href="#apropos" onClick={() => setNaviga(2)}>
                      A Propos
                    </a>
                  </li>
                )}

                {naviga == 3 ? (
                  <li>
                    <a
                      href="#nosproduit"
                      className="active"
                      onClick={() => setNaviga(3)}
                    >
                      Nos Produits
                    </a>
                  </li>
                ) : (
                  <li>
                    <a href="#nosproduit" onClick={() => setNaviga(3)}>
                      Nos Produits
                    </a>
                  </li>
                )}

                {naviga == 4 ? (
                  <li>
                    <a
                      href="#noschiffre"
                      className="active"
                      onClick={() => setNaviga(4)}
                    >
                      Nos Chiffre
                    </a>
                  </li>
                ) : (
                  <li>
                    <a href="#noschiffre" onClick={() => setNaviga(4)}>
                      Nos Chiffre
                    </a>
                  </li>
                )}

                {naviga == 6 ? (
                  <li>
                    <a
                      href="#faq"
                      className="active"
                      onClick={() => setNaviga(6)}
                    >
                      Faq
                    </a>
                  </li>
                ) : (
                  <li>
                    <a href="#faq" onClick={() => setNaviga(6)}>
                      Faq
                    </a>
                  </li>
                )}

                {naviga == 5 ? (
                  <li>
                    <a
                      href="#contact"
                      className="active"
                      onClick={() => setNaviga(5)}
                    >
                      Contact
                    </a>
                  </li>
                ) : (
                  <li>
                    <a href="#contact" onClick={() => setNaviga(5)}>
                      Contact
                    </a>
                  </li>
                )}
              </div>
              <div className="btnBlog">
                <div>
                  <button className="btn" onClick={() => setConnexion(!connexion)}>Connexion</button>
                </div>
                <div>
                  {" "}
                  <button className="btn" onClick={() => setVisible(!visible)}>Inscription</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h_header_oneBlog">
          <div className="h_navi">
            {naviga == 1 ? (
              <li>
                <a
                  href="#accueil"
                  className="active"
                  onClick={() => setNaviga(1)}
                >
                  Accueil
                </a>
              </li>
            ) : (
              <li>
                <a href="#accueil" onClick={() => setNaviga(1)}>
                  Accueil
                </a>
              </li>
            )}

            {naviga == 2 ? (
              <li>
                <a
                  href="#apropos"
                  className="active"
                  onClick={() => setNaviga(2)}
                >
                  A Propos
                </a>
              </li>
            ) : (
              <li>
                <a href="#apropos" onClick={() => setNaviga(2)}>
                  A Propos
                </a>
              </li>
            )}

            {naviga == 3 ? (
              <li>
                <a
                  href="#nosproduit"
                  className="active"
                  onClick={() => setNaviga(3)}
                >
                  Nos Produits
                </a>
              </li>
            ) : (
              <li>
                <a href="#nosproduit" onClick={() => setNaviga(3)}>
                  Nos Produits
                </a>
              </li>
            )}

            {naviga == 4 ? (
              <li>
                <a
                  href="#noschiffre"
                  className="active"
                  onClick={() => setNaviga(4)}
                >
                  Nos Chiffre
                </a>
              </li>
            ) : (
              <li>
                <a href="#noschiffre" onClick={() => setNaviga(4)}>
                  Nos Chiffre
                </a>
              </li>
            )}

            {naviga == 5 ? (
              <li>
                <a
                  href="#contact"
                  className="active"
                  onClick={() => setNaviga(5)}
                >
                  Contact
                </a>
              </li>
            ) : (
              <li>
                <a href="#contact" onClick={() => setNaviga(5)}>
                  Contact
                </a>
              </li>
            )}
          </div>
          <div className="btnBlog">
            <div>
              <button className="btn" onClick={() => setConnexion(true)}>Connexion</button>
            </div>
            <div>
              {" "}
              <button className="btn" onClick={() => setVisible(true)}>Inscription</button>
            </div>
          </div>
        </div>
      )}
      <div className="backUp">
        <a href="#accueil" className="btn" onClick={() => setNaviga(1)}>
          <Icon.ChevronUp size="16" />
        </a>
      </div>
      {menu ? (
        <div className="mResponsif"></div>
      ) : (
        <div className="mResponsif">
          <button className="btn" onClick={() => setMenu(true)}>
            <Icon.Justify size="36" />
          </button>
        </div>
      )}


      <Modal show={visible} onHide={handleClose} className="modalContainer">
        <Modal.Header closeButton>
          <Modal.Title>Inscription</Modal.Title>

        </Modal.Header>
        <Modal.Body><Signup /></Modal.Body>

      </Modal>
      <Modal show={connexion} onHide={handleCloses} className="modalContainer">
        <Modal.Header closeButton>
          <Modal.Title>Connexion</Modal.Title>
        </Modal.Header>
        <Modal.Body><Connexion /></Modal.Body>

      </Modal>
    </div>
  )
}

export default Header