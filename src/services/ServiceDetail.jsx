import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import servicesData from "./servicesData";

function ServiceDetail() {
  const { serviceId } = useParams();

  const thisService = servicesData.find((item) => item._id === serviceId);

  const navigate = useNavigate();
  function handleClick() {
    console.log("Submitting...");
    setTimeout(() => {
      navigate("/services");
    }, 2000);
  }

  return (
    <div>
      <h3>
        {thisService.name} - ${thisService.price}
      </h3>
      <p>{thisService.description}</p>
      <button onClick={handleClick}>Go back to all services</button>
    </div>
  );
}

export default ServiceDetail;
