import React from "react";
import NavLink from "./NavLink";

export default function OurTeam() {
  return (
    <>
      <NavLink />
      <div className="team-banner">
        <div className="team-banner-des">
          <h1>we can repair anything</h1>
          <p>
            "We take pride in being a specialist in undertaking all types of
            repairs and maintenance for luxury cars. No matter how complicated
            your problems, our experts will help you keep your vehicles always
            in super form. Our team of experienced and reliable mechanics
            provide an honest appraisal of any required car maintenance. Hence,
            you will have peace of mind knowing that your prized possession is
            in good hands."
          </p>
          <button className="banner-learnmore">Learnmore</button>
        </div>
      </div>
    </>
  );
}
