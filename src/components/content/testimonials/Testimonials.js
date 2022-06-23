import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
	return (
		<section id="testimonials" className="section bg-secondary">
			<div className="container mx-auto">
				<div className="flex flex-col items-center text-center">
					<h2 className="section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block">
						What other people say
					</h2>
					<p className="subtitle">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Tempora quisquam molestias earum? Dolorum nostrum illo
						unde molestiae consequuntur? Tenetur velit perferendis
						sed dolore accusamus dolor ipsa? Hic ipsa obcaecati
						ipsum?
					</p>
				</div>
				<TestimonialSlider />
			</div>
		</section>
	);
};

export default Testimonials;
