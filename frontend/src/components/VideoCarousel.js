import React from "react";
import "../App.css"; // Assuming video-container and video-overlay are defined here

// Move carousel data outside for reusability
const carouselItems = [
	{
		id: "1",
		title: "Book Your Appointment Anytime, Anywhere!",
		text: "Quick and Easy Booking with Trusted Doctors",
	},
	{
		id: "2",
		title: "Quality Healthcare at Your Fingertips",
		text: "Consult the best doctors with just one click",
	},
];

// Video URL (could be moved to a config or local asset)
const VIDEO_URL = "https://www.w3schools.com/html/mov_bbb.mp4";

const VideoCarousel = () => {
	return (
		<div
			id="videoCarousel"
			className="carousel slide video-container"
			data-bs-ride="carousel"
			role="region"
			aria-label="Promotional Video Carousel"
		>
			<video autoPlay muted loop playsInline preload="metadata">
				<source src={VIDEO_URL} type="video/mp4" />
				<p>Your browser does not support the video tag. Please use a modern browser for the best experience.</p>
			</video>
			<div className="carousel-indicators">
				{carouselItems.map((item, index) => (
					<button
						key={item.id}
						type="button"
						data-bs-target="#videoCarousel"
						data-bs-slide-to={index}
						className={index === 0 ? "active" : ""}
						aria-label={`Slide ${index + 1}`}
					></button>
				))}
			</div>
			<div className="carousel-inner">
				{carouselItems.map((item, index) => (
					<div
						className={`carousel-item ${index === 0 ? "active" : ""}`}
						key={item.id}
					>
						<div className="video-overlay">
							<h2>{item.title}</h2>
							<p>{item.text}</p>
						</div>
					</div>
				))}
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#videoCarousel"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#videoCarousel"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default VideoCarousel;