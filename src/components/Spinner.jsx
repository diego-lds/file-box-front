import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Spinner = () => {
  return (
    <div className="ml-2 inline-block">
      <FontAwesomeIcon
        icon={faSpinner}
        className="animate-spin text-otherBlue h-4 w-4"
      />
    </div>
  );
};

export default Spinner;
