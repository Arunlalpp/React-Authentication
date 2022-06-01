import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import NavLink from "./NavLink";
import ContainerCard from "./ContainerCard";
import ContactUs from "./ContactUs";

export default function HomePage() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `Service`;
    navigate(path);
  };
  return (
    <>
      <NavLink />
      <div className="landing-page">
        <div className="banner-text">
          <h1>
            Emirates <span>Car</span> Care
          </h1>
          <div className="banner-description">
            <p>
              "We take pride in being a specialist in undertaking all types of
              repairs and maintenance for luxury cars."
            </p>
          </div>
          <div className="banner-suscribe">
            <Button onClick={routeChange}>View All</Button>
          </div>
        </div>
      </div>
      <ContainerCard />
      <ContactUs />
    </>
  );
}
