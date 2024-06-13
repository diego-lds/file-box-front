import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Spinner = () => {
  return (
    <div className="inline-block ml-2">
      <FontAwesomeIcon
        icon={faSpinner}
        className="w-4 h-4 animate-spin text-otherBlue"
      />
    </div>
  );
};

export default Spinner;
