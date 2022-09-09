import React from "react";
import * as Icon from 'react-bootstrap-icons'
import './styles/Contacts.styles.css'

const Contacts=()=>{
    return (
      <div>
        <div className="contact_b">
          <div className="onBlock_title">
            <h3>
              contacts</h3>
          </div>
          <div className="contac">
            <div className="c_item">
              <div className="c_icon">
                <Icon.GeoAlt size="25" />
              </div>
              <div className="c_title">
                <h4>Adresse</h4>
              </div>
              <div className="c_info">
                <h5>
                  <input type="text" placeholder="Votre adresse" />
                </h5>
              </div>
            </div>
            <div className="c_item">
              <div className="c_icon">
                <Icon.Envelope size="25" />
              </div>
              <div className="c_title">
                <h4>Email</h4>
              </div>
              <div className="c_info">
                <h5>
                  <input type="text" placeholder="Votre email" />
                </h5>
              </div>
            </div>
            <div className="c_item">
              <div className="c_icon">
                <Icon.Telephone size="25" />
              </div>
              <div className="c_title">
                <h4>Phone</h4>
              </div>
              <div className="c_info">
                <h5>
                  <input type="text" placeholder="Votre Téléphone" />
                </h5>
              </div>
            </div>
          </div>
          <button className="valider">Valider</button>
        </div>
      </div>
    );
}

export default Contacts;