import React from "react";
import About from "./components/content/about/About";
import Brands from "./components/content/brands/Brands";
import Skills from "./components/content/skills/Skills";
import Hero from "./components/content/hero/Hero";
import Header from "./components/header/Header";
import Portfolio from "./components/content/portfolio/Portfolio";
import Services from "./components/content/services/Services";
import Testimonials from "./components/content/testimonials/Testimonials";
import Contact from "./components/content/contact/Contact";
import Footer from "./components/footer/Footer";
import Backtop from "./components/backtop/Backtop";
import BackTopProgress from "./components/backtop/BacktopProgress";

const App = () => {
	return (
		<div>
			<Header />
			<Hero />
			<Brands />
			<About />
			<Skills />
			<Portfolio />
			<Services />
			<Testimonials />
			<Contact />
			<Footer />
			<Backtop />
			{/* <BackTopProgress /> */}
		</div>
	);
};

export default App;
