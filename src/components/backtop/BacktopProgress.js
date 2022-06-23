import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const BackTopProgress = () => {
	const calcScrollValue = () => {
		const scrollProgress = document.getElementById("progress");
		const progressValue = document.getElementById("progress-value");
		const position = document.documentElement.scrollTop;
		const calcHeight =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		const scrollValue = Math.round((position * 100) / calcHeight);

		if (position > 100) {
			scrollProgress.style.display = "flex";
		} else {
			scrollProgress.style.display = "none";
		}

		scrollProgress.addEventListener("click", () => {
			// document.documentElement.scrollTop = 0;
			scroll.scrollToTop();
		});

		scrollProgress.style.background = `conic-gradient(#3f78e0 ${scrollValue}%,
            #d7d7d7 ${scrollValue}%)`;
	};

	window.onscroll = calcScrollValue;
	window.onload = calcScrollValue;

	return (
		<div id="progress">
			<span id="progress-value">&#x1F815;</span>
		</div>
	);
};

export default BackTopProgress;
