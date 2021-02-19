import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faHome } from "@fortawesome/free-solid-svg-icons";
import DeliveryIcon from "../../components/Icons/DeliveryIcon/DeliveryIcon";
import PickupIcon from "../../components/Icons/PickupIcon/PickupIcon";
import Review from "../../components/Review/Review";
const SingleBusiness = () => {
  const [business, setBusiness] = useState({});
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      setBusiness(state);
    } else {
      axios
        .get(`/api/iceCream/${id}`)
        .then((response) => {
          setBusiness(response.data);
        })
        .catch((err) => {
          //TODO: Incorporate visual UI for errors.
          console.log(err);
        });
    }
  }, [state, id]);

  useEffect(() => {
    if (id) {
      axios
        .get(`/api/iceCream/${id}/reviews`)
        .then((response) => {
          setReviews(response.data.reviews);
        })
        .catch((err) => {
          //TODO: Incorporate visual UI for errors.
          console.log(err);
        });
    }
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center">{business.name}</h1>
        </div>
      </div>
      <div className="row pb-3">
        <div className="col-sm-4">
          <img
            src={business.image_url}
            alt={business.name}
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-sm-8">
          <div className="row p-1">
            <div className="col">{business.display_phone}</div>
          </div>
          <div className="row p-1">
            <div className="col">Rating: {business.rating}</div>
          </div>
          <div className="row p-1">
            <div className="col">
              {business?.location?.address1}
              <br />
              {business?.location?.city}, {business?.location?.state}{" "}
              {business?.location?.zip_code}
              <br />
            </div>
          </div>
          <div className="row p-1">
            <div className="col-12">
              {business?.transactions?.includes("pickup") && <PickupIcon />}
              {business?.transactions?.includes("delivery") && <DeliveryIcon />}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {reviews.map((review) => (
            <Review {...review} key={review.id} />
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Link to="/" className="btn btn-info">
            Back to Top Five
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBusiness;
