import React from "react";
import Projects from "../project/Projects";

const Portfolio = () => {
	return (
		<section id="portfolio" className="section bg-primary min-h-[1400px]">
			<div className="container mx-auto">
				<div className="flex flex-col items-center text-center">
					<h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
						My latest work
					</h2>
					<p className="subtitle">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Officiis quaerat illo, molestiae ex consectetur at neque
						exercitationem repellat? Numquam, eum natus assumenda
						beatae libero a et voluptas facere quis reprehenderit.
					</p>
				</div>
				<Projects />
			</div>
		</section>
	);
};

export default Portfolio;
