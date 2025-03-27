import React from "react";
// No need to import Bootstrap CSS here if it’s in App.js

const Footer = () => {
	const currentYear = new Date().getFullYear(); // Dynamic year

	return (
		<footer className="bg-dark text-white py-3">
			<div className="container text-center">
				<p>© {currentYear} HealthCare Booking. All Rights Reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;