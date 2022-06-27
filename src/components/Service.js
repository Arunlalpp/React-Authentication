import React from "react";
import "./App.css";
import NavLink from "./NavLink";
import { BsFillPersonFill, BsHurricane, BsPersonPlusFill } from 'react-icons/bs';
import { ContainerCard } from "../Constants";

function service() {
	return (
		<>
			<NavLink />
			<div className="wrapper-banner">
				<div className="banner-service-text">
					<span>powerful people experiences</span>
					<div className="banner-short-text">
						<h4>
							People <BsFillPersonFill />
						</h4>
						<h4>
							Experience <BsHurricane />
						</h4>
						<h4>
							Future <BsPersonPlusFill />
						</h4>
					</div>
				</div>
			</div>
			<div className="wrapper-heading">
				<h1>Our Services</h1>
				<div className="container-card">
					{ContainerCard.map((Container) => {
						return (
							<div class="card-container">
								<img src={Container.title} alt="Denim Jeans" />
								<h1>{Container.name}</h1>
								<p>{Container.description}</p>
								<p>
									<button>View Details</button>
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default service;