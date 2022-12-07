import React from "react";
import { useParams } from "react-router-dom";
import servicesData from "./servicesData";

function ServiceDetail() {
  const { serviceId } = useParams();

  const thisService = servicesData.find((item) => item._id === serviceId);

  return (
    <h3>
      {thisService.name} - ${thisService.price}
    </h3>
  );
}

export default ServiceDetail;
