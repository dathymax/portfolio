import React from "react";
import { social } from "../../data";
import Logo from "../../assets/img/logo.svg";

const Footer = () => {
	return (
		<footer className="bg-tertiary py-12">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
					<div className="flex space-x-6 items-center justify-between">
						{social.map((item, index) => {
							const { href, icon } = item;
							return (
								<a
									href={href}
									className="text-accent text-base"
									key={index}
								>
									{icon}
								</a>
							);
						})}
					</div>
					<div className="text-3xl">Jtadd Do</div>
					<p>&copyright: 2022 Jtadd Do. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
