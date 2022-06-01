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
            src="https://images.unsplash.com/photo-1582297649766-c07106890cea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
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
          <img src="https://images.unsplash.com/photo-1458408990864-27997f8c2984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
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
          <img src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80 " />
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
          <img src="https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
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
