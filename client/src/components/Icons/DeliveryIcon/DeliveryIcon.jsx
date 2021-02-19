import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";

const DeliveryIcon = () => {
  return (
    <>
      <span data-tip="Delivery">
        <FontAwesomeIcon icon={faHome} style={{ padding: 1 }} />
      </span>
      <ReactTooltip />
    </>
  );
};

export default DeliveryIcon;
