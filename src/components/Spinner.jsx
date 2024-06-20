import React from "react";

const Spinner = () => {
  return (
    <div className={"flex items-center justify-center"}>
      <img src="/spinner.svg" alt="Loading spinner" className="animate-spin " />
    </div>
  );
};

export default Spinner;
