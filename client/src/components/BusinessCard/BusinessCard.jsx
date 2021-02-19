import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faHome } from "@fortawesome/free-solid-svg-icons";

const BusinessCard = ({
  display_phone,
  image_url,
  location,
  name,
  rating,
  transactions,
  url,
}) => {
  return (
    <div className="col-sm-4">
      <div className="card">
        <img
          src={image_url}
          className="card-img-top"
          alt={name}
          style={{ width: "100%", height: 300 }}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="card-text row">
            <div className="col-sm-8">Rating: {rating}</div>
            <div className="col-sm-4 d-flex justify-content-end">
              {transactions.includes("pickup") && (
                <FontAwesomeIcon icon={faCar} style={{ padding: 1 }} />
              )}
              {transactions.includes("delivery") && (
                <FontAwesomeIcon icon={faHome} style={{ padding: 1 }} />
              )}
            </div>
            <div className="col">
              <hr />
              {location?.address1}
              <br />
              {location?.city}, {location?.state} {location?.zip_code}
              <br />
              {display_phone}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <a
                href={url}
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BusinessCard.propTypes = {
  display_phone: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  transactions: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
};

export default BusinessCard;
