import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container">
				<Link className="navbar-brand" to="/">🏥 HealthCare Booking</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link className="nav-link text-white" to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-white" to="/services">Services</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-white" to="/testimonials">Testimonials</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-white" to="/contact">Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;