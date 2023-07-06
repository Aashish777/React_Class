import React from "react";
import { Airplay, BarChart, Bell } from "react-feather";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div id="service" className="flex container">
      <div>
        <h2>Services</h2>
        <div className="flex services ">
          <ServiceCard
            icon={<Airplay />}
            title="User Friendly"
            descp="Expense Tracking is user friendly and very easy to use."
          />
          <ServiceCard
            icon={<BarChart />}
            title="Reporting"
            descp="Expense Tracking provide you with daily, weekly and monthly reporting."
          />
          <ServiceCard
            icon={<Bell />}
            title="Notifiaction"
            descp="Expanse Tracking provide you with timely notifications."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
