import React from "react";
import "./App.css";
export default function ContainerCard() {
  return (
    <>
      <div className="wrapper-heading">
        <h1>Our Services</h1>
      <div className="container-card">
        <div class="card-container">
          <img
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="Denim Jeans"
          />
          <h1>Mechanical Work</h1>
          <p>
            No matter how complicated your problems, our experts will help you
            keep your vehicles always in super form.
          </p>
          <p>
            <button>View Details</button>
          </p>
        </div>
        <div class="card-container">
          <img src="https://images.unsplash.com/photo-1632604653697-21831cdafa84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
          <h1>Denting Works</h1>
          <p>
            No matter how complicated your problems, our experts will help you
            keep your vehicles always in super form.
          </p>
          <p>
            <button>View Details</button>
          </p>
        </div>
        <div class="card-container">
          <img src="https://images.unsplash.com/photo-1594097840961-411cf23dd23f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80" />
          <h1>Painting</h1>
          <p>
            No matter how complicated your problems, our experts will help you
            keep your vehicles always in super form.
          </p>
          <p>
            <button>View Details</button>
          </p>
        </div>
        <div class="card-container">
          <img src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" />
          <h1>Car Wash</h1>
          <p>
            No matter how complicated your problems, our experts will help you
            keep your vehicles always in super form.
          </p>
          <p>
            <button>View Details</button>
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
