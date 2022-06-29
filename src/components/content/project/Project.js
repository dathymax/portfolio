import React from "react";

const Project = ({ item }) => {
	return (
		<div key={item.id} className="flex flex-col items-center text-center ">
			<div className="mb-8 rounded-2xl relative overflow-hidden group transition-all">
				<img
					src={item.image}
					alt="Image"
					className="rounded-2xl w-full transition-all transform group-hover:scale-125"
				/>
				<div className="z-20 inset-0 bg-accent opacity-0 group-hover:opacity-80 transition-all absolute group-hover:flex hidden bottom-0 left-0 justify-center items-center w-full h-full">
					<a
						href={item.href}
						className="btn hover:bg-accent-hover bg-black rounded-full px-4 py-2 text-center transition-all block cursor-pointer"
						target="_blank"
					>
						Visit my website
					</a>
				</div>
			</div>
			<p className="capitalize text-accent text-sm mb-3">
				{item.category}
			</p>
			<h3 className="text-2xl font-semibold capitalize mb-3">
				{item.name}
			</h3>
		</div>
	);
};

export default Project;
