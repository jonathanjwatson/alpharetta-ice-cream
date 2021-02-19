import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PickupIcon from "../Icons/PickupIcon/PickupIcon";
import DeliveryIcon from "../Icons/DeliveryIcon/DeliveryIcon";

const BusinessCard = (props) => {
  const {
    display_phone,
    id,
    image_url,
    location,
    name,
    rating,
    transactions,
  } = props;
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <div className="row">
            <img
              src={image_url}
              className="card-img-top"
              alt={name}
              style={{ width: "100%", height: 300 }}
            />
          </div>
          <div className="card-text row">
            <div className="col-12">{display_phone}</div>
            <div className="col-12">Rating: {rating}</div>
            <div className="col">
              <hr />
              {location?.address1}
              <br />
              {location?.city}, {location?.state} {location?.zip_code}
              <br />
            </div>
          </div>
          <div className="col-12">
            {transactions.includes("pickup") && <PickupIcon />}
            {transactions.includes("delivery") && <DeliveryIcon />}
          </div>
          <div className="row">
            <div className="col text-center">
              <Link
                to={{
                  pathname: `/businesses/${id}`,
                  state: { ...props },
                }}
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                Read reviews
              </Link>
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
  url: PropTypes.string
};

export default BusinessCard;
