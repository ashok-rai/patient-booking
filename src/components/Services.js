import React from "react";

// Move services data outside for reusability
const servicesData = [
	{ id: "1", imgQuery: "appointment,calendar", title: "Easy Appointments", text: "Book or reschedule appointments with a few clicks." },
	{ id: "2", imgQuery: "doctor,consultation", title: "Expert Consultations", text: "Get professional medical advice from experienced doctors." },
	{ id: "3", imgQuery: "pharmacy,medicine", title: "Prescription & Pharmacy", text: "Get prescriptions and medications online with ease." },
];

const Services = () => {
	return (
		<section className="services py-5" aria-labelledby="services-heading">
			<div className="container">
				<h2 id="services-heading" className="text-center mb-4">
					Our Services
				</h2>
				<div className="row">
					{servicesData.map((service) => (
						<div className="col-md-4 mb-4" key={service.id}>
							<div className="card text-center p-3 shadow h-100">
								<img
									src={`https://source.unsplash.com/200x150/?${service.imgQuery}`}
									className="card-img-top"
									alt={`${service.title} illustration`}
									loading="lazy"
								/>
								<div className="card-body">
									<h5 className="card-title mt-3">{service.title}</h5>
									<p className="card-text">{service.text}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;