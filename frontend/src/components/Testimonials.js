import React from "react";

// Move testimonials data outside the component for reusability
const testimonialsData = [
	{ id: "1", text: "This platform is a life-saver! Booking an appointment is super easy!", name: "Sarah Johnson" },
	{ id: "2", text: "Best experience! The doctors are highly professional and caring.", name: "Mark Wilson" },
	{ id: "3", text: "Highly recommended for online consultations and quick service.", name: "Emily Carter" },
];

const Testimonials = () => {
	return (
		<section className="testimonials py-5" aria-labelledby="testimonials-heading">
			<div className="container">
				<h2 id="testimonials-heading" className="text-center mb-4">
					What Our Patients Say
				</h2>
				<div className="row">
					{testimonialsData.map((testimonial) => (
						<div className="col-md-4 mb-4" key={testimonial.id}>
							<blockquote className="card p-3 shadow">
								<p className="mb-2">"{testimonial.text}"</p>
								<footer className="blockquote-footer">
									<h5 className="mb-0">- {testimonial.name}</h5>
								</footer>
							</blockquote>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;