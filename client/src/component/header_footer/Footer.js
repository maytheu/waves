import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons/faCompass";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

const Footer = ({ data }) => {
  const site = data.siteData;
  return (
    <footer className="bck_b_dark">
      {site ? (
        <div className="container">
          <div className="logo">Waves</div>
          <div className="wrapper">
            <div className="left">
              <h2>Contact information</h2>
              <div className="business_nfo">
                <div className="tag">
                  <FontAwesomeIcon icon={faCompass} className="icon" />
                  <div className="nfo">
                    <div>Address</div>
                    <div>{site[0].address}</div>
                  </div>
                </div>
                <div className="tag">
                  <FontAwesomeIcon icon={faPhone} className="icon" />
                  <div className="nfo">
                    <div>Phone</div>
                    <div>{site[0].phone}</div>
                  </div>
                </div>
                <div className="tag">
                  <FontAwesomeIcon icon={faClock} className="icon" />
                  <div className="nfo">
                    <div>Working hours</div>
                    <div>{site[0].hours}</div>
                  </div>
                </div>
                <div className="tag">
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                  <div className="nfo">
                    <div>Email</div>
                    <div>{site[0].email}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="left">
              <h2>Be the first to know</h2>
              <div>
                <div>
                  Get all the latest information on events, sales and offers.You
                  can miss out.
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </footer>
  );
};

export default Footer;
