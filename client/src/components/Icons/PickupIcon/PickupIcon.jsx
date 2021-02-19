import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";

const PickupIcon = () => {
  return (
    <>
      <span data-tip="Pickup">
        <FontAwesomeIcon icon={faCar} style={{ padding: 1 }} />
      </span>
      <ReactTooltip />
    </>
  );
};

export default PickupIcon;
