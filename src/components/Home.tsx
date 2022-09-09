import * as Icon from "react-bootstrap-icons";
import { useState } from "react";
import { Form } from "react-bootstrap";
import logoE from "../assets/img/logoE.png";
import Apropos from "../components/Apropos";
import "../components/styles/apropos.css";
import Header from "./Header.components";
import AproposD from "../components/AproposD";
import Contacts from "./Contacts.Components";
import Produit from "./nosProduits.component";
import Faq from "./Faq.components";
let d = 100;
const HomePage = () => {
  const [naviga, setNaviga] = useState(1);
  const [detail, setDetail] = useState(100);
  const [menu, setMenu] = useState(true);
  const [etat,setEtat]=useState("active")
  return (
    <div className="h_all">
      <Header/>
      <div id="accueil" className="oneBlocks">
        <div className="acBloc"></div>
      </div>
      <div id="apropos" className="oneBlock">
        <div className="onBlock_title">
          <h3>a propos</h3>
        </div>
        <Apropos />
        <div className="onBlock_title">
          <h3> </h3>
        </div>
        <AproposD/>
      </div>
      <div id="nosproduit" className="oneBlock">
        <div className="onBlock_title">
          <h3>nos produits</h3>
          
        </div>
        <Produit/>
      </div>
      <div id="noschiffre" className="oneBlock">
        <div className="onBlock_title">
          <h3>nos chiffres</h3>
        </div>
      </div>
      <div id="faq" className="oneBlock">
        <div className="onBlock_title">
          <h3>faq</h3>
        </div>
        <Faq/>
      </div>
      <div id="contact" className="oneBlock contact">
        <div>
          <Contacts/>
        </div>
        <div className="c_section">
          <div className="c_s">
            <div className="c_logo">
              <img src={logoE} width="150" height="50" />
            </div>
            <div className="c_info">
              <h5>Cameroun</h5>
            </div>
            <div className="c_info">
              <h5>Maroua</h5>
            </div>
            <div className="c_info space">
              <h5>
                <strong>Phone</strong>: (+237) 699 345 690
              </h5>
            </div>
            <div className="c_info">
              <h5>
                <strong>Email</strong>: lacthel@gmail.com
              </h5>
            </div>
            <div className="btn_reseaux">
              <button className="btn">
                <Icon.Twitter />{" "}
              </button>
              <button className="btn">
                <Icon.Facebook />{" "}
              </button>
              <button className="btn">
                <Icon.Instagram />{" "}
              </button>
              <button className="btn">
                <Icon.Telegram />{" "}
              </button>
              <button className="btn">
                <Icon.Linkedin />{" "}
              </button>
            </div>
          </div>
          <div className="c_lienB">
            <div>
              <h4>Les liens utiles</h4>
            </div>
            <div className="navB">
              <li>
                <a href="#accueil" onClick={() => setNaviga(1)}>
                  <Icon.ChevronRight size="10" /> accueil
                </a>
              </li>
              <li>
                <a href="#apropos" onClick={() => setNaviga(2)}>
                  <Icon.ChevronRight size="10" /> a prospos
                </a>
              </li>
              <li>
                <a href="#nosproduit" onClick={() => setNaviga(3)}>
                  <Icon.ChevronRight size="10" /> nos produits
                </a>
              </li>
              <li>
                <a href="#noschiffre" onClick={() => setNaviga(4)}>
                  <Icon.ChevronRight size="10" /> nos chiffres
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setNaviga(5)}>
                  <Icon.ChevronRight size="10" /> contacts
                </a>
              </li>
            </div>
          </div>
          <div className="c_bs">
            <div>
              <h4>Suggestions</h4>
            </div>
            <div className="c_b">
              <Form.Group>
                <Form.Control type="text" />
              </Form.Group>
              <button className="btn ">souscrire</button>
            </div>
          </div>
        </div>
      </div>
      <div className="devBlock"></div>
    </div>
  );
};

export default HomePage;
