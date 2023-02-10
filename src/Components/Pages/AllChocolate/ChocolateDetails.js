import React from "react";
import { useParams } from "react-router-dom";

const ChocolateDetails = () => {
  const { useUd } = useParams;
  return (
    <div>
      <h2>{useUd}</h2>
    </div>
  );
};

export default ChocolateDetails;
