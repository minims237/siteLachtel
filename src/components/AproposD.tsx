import idesc from "./assets/img/tempsnip.png";
import "./styles/apropos.css";
import march from "../assets/img/imarche.png";
import objecti from "../assets/img/objectif.png";
import inves from "../assets/img/investir.png";
import { useState } from "react";
import "../App.css"
const AproposD = () => {
    const [detail, setDetail] = useState(100);
    const [naviga, setNaviga] = useState(1);
    const [menu, setMenu] = useState(true);
  return (
    <div className="ad_container">
          <div className="ad_container_links">
            {detail == 100 ? (
              <button className="btnActive" onClick={() => setDetail(100)}>
                <h4>Le marché du lait </h4>
              </button>
            ) : (
              <button onClick={() => setDetail(100)}>
                <h4>Le marché du lait</h4>
              </button>
            )}
            {detail == 101 ? (
              <button className="btnActive" onClick={() => setDetail(101)}>
                <h4>Nos objectifs</h4>
              </button>
            ) : (
              <button onClick={() => setDetail(101)}>
                <h4>Nos objectifs</h4>
              </button>
            )}

            {detail == 102 ? (
              <button className="btnActive" onClick={() => setDetail(102)}>
                <h4>Comment investir ?</h4>
              </button>
            ) : (
              <button onClick={() => setDetail(102)}>
                <h4>Comment investir ?</h4>
              </button>
            )}
          </div>
          {detail == 100 ? (
            <div className="ad_container_txtd">
              <h3>Le marché du lait</h3>

              <div className="ad_container_txt_des">
                <div>
                  <img src={march} alt="lacther" />
                </div>
                <div>
                  <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iure ad blanditiis, consectetur possimus ducimus incidunt veniam! Sapiente, dolorum ullam, eaque eveniet magnam expedita quis fugiat velit ea unde ipsa.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {detail == 101 ? (
                <div className="ad_container_txtd">
                  <h3>Nos objectifs</h3>

                  <div className="ad_container_txt_des">
                    <div>
                      <img
                        src={objecti}
                        alt="lacther"
                        height="auto"
                        width="240"
                      />
                    </div>
                    <div>
                      <p>
                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi sed molestias ut, fugiat adipisci autem exercitationem. Quidem ea saepe, distinctio dignissimos molestiae impedit totam iure quam nostrum dolores! Dolorum, dolores!
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="ad_container_txtd">
                  <h3>Comment investir</h3>

                  <div className="ad_container_txt_des">
                    <div>
                      <img
                        src={inves}
                        alt="lacther"
                        height="auto"
                        width="240"
                      />
                    </div>
                    <div>
                      <p>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, quam totam nemo expedita repellat, et corrupti sunt est nisi nam tenetur! Molestias dolores non ab modi dolorum id earum odit.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
  );
};
export default AproposD;
