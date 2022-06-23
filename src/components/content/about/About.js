import React from "react";
import Image from "../../../assets/img/about.webp";

const About = () => {
	return (
		<section className="section bg-secondary" id="about">
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-24">
					<img
						src={Image}
						alt="Image"
						className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
					/>
					<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
						<div className="flex flex-col">
							<h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
								Jtadd Do
							</h2>
							<p className="mb-4 text-accent">Web Developer</p>
							<hr className="mb-8 opacity-5" />
							<p className="mb-8">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Consequuntur, nostrum
								distinctio. Earum dolor animi repellendus
								doloribus soluta minus, cumque odit facere
								recusandae, autem suscipit aut fuga explicabo
								velit illum eos. <br />
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Veniam, in!
							</p>
						</div>
						<button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">
							Contact me
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
