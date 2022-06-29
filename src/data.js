//  icons
import {
	FiYoutube,
	FiInstagram,
	FiGithub,
	FiDribbble,
	FiLayout,
	FiSettings,
	FiPenTool,
	FiTag,
	FiMail,
	FiMapPin,
	FiFacebook,
	FiLinkedin,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import TravelProject from "./images/travel.PNG";
import ManageEmployees from "./images/manage-employees.PNG";
import AntdDashboard from "./images/antd-dashboard.PNG";
import MiniBlogs from "./images/miniblogs.PNG";
import MyCVProject from "./images/mycv-app.PNG";
import TheBandProject from "./images/theband-app.PNG";
import PortfolioProject from "./images/portfolio-html.PNG";
import LoveTravel from "./images/love-travel.PNG";
import LoveTravelSearch1 from "./images/love-travel-search1.PNG";
import LoveTravelSearch2 from "./images/love-travel-search2.PNG";
import LoveTravelSport from "./images/love-travel-sport.PNG";
import AirBnb from "./images/airbnb.PNG";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// navigation
export const navigation = [
	{
		name: "home",
		href: "home",
	},
	{
		name: "about",
		href: "about",
	},
	{
		name: "portfolio",
		href: "portfolio",
	},
	{
		name: "services",
		href: "services",
	},
	{
		name: "testimonials",
		href: "testimonials",
	},
	{
		name: "contact",
		href: "contact",
	},
];

// social
export const social = [
	{
		icon: <FiFacebook />,
		href: "https://www.facebook.com/dotuandat25092000",
	},
	{
		icon: <FiInstagram />,
		href: "https://www.instagram.com/_jta.dd_/",
	},
	{
		icon: <FiLinkedin />,
		href: "https://www.linkedin.com/in/tu%E1%BA%A5n-%C4%91%E1%BA%A1t-%C4%91%E1%BB%97-514baa20b/",
	},
	{
		icon: <FiGithub />,
		href: "https://github.com/dathymax",
	},
];

// companies
export const brands = [
	{
		img: FreelancerBrandIcon,
		href: "",
	},
	{
		img: UpworkBrandIcon,
		href: "",
	},
	{
		img: FiverBrandIcon,
		href: "",
	},
	{
		img: BehanceBrandIcon,
		href: "",
	},
	{
		img: DribbbleBrandIcon,
		href: "",
	},
];

// projects
export const projectsData = [
	{
		id: "1",
		image: TravelProject,
		name: "Travel",
		category: "ReactJs",
		href: "https://dathymax.github.io/travel-frontend/",
	},
	{
		id: "2",
		image: MyCVProject,
		name: "My CV app",
		category: "ReactJs",
		href: "https://dathymax.github.io/mycv-app/",
	},
	{
		id: "3",
		image: TheBandProject,
		name: "The band",
		category: "ReactJs",
		href: "https://dathymax.github.io/theband-app/",
	},
	{
		id: "4",
		image: PortfolioProject,
		name: "Portfolio HTML/CSS/JS",
		category: "HTML/CSS/JS",
		href: "https://dathymax.github.io/",
	},
	{
		id: "5",
		image: LoveTravel,
		name: "Love travel",
		category: "HTML/CSS/JS",
		href: "https://dathymax.github.io/Love%20Travel/index.html",
	},
	{
		id: "6",
		image: LoveTravelSearch1,
		name: "Love travel search 1",
		category: "HTML/CSS/JS",
		href: "https://dathymax.github.io/Love%20Travel/child-web/search-2/index.html",
	},
	{
		id: "7",
		image: LoveTravelSearch2,
		name: "Love travel search 2",
		category: "HTML/CSS/JS",
		href: "https://dathymax.github.io/Love%20Travel/child-web/search-1/index.html",
	},
	{
		id: "8",
		image: LoveTravelSport,
		name: "Love travel sport",
		category: "HTML/CSS/JS",
		href: "https://dathymax.github.io/Love%20Travel/child-web/sport/index.html#",
	},
	{
		id: "9",
		image: AirBnb,
		name: "AirBnb",
		category: "HTML/CSS/JS",
		href: "https://dathymax.github.io/Resort/index.html",
	},
	{
		id: "10",
		image: ManageEmployees,
		name: "Manage employees",
		category: "ReactJs",
		href: "https://dathymax.github.io/manage-employees/",
	},
	{
		id: "11",
		image: AntdDashboard,
		name: "Ant design",
		category: "ReactJs",
		href: "https://dathymax.github.io/antd-dashboard/",
	},
	{
		id: "12",
		image: MiniBlogs,
		name: "Mini blogs",
		category: "ReactJs",
		href: "https://dathymax.github.io/miniblogs/",
	},
];

// projects
export const projectsNav = [
	{
		name: "All",
	},
	{
		name: "HTML/CSS/JS",
	},
	{
		name: "ReactJs",
	},
	{
		name: "NodeJs",
	},
];

// skill
export const skills = [
	{
		image: SkillImg1,
	},
	{
		image: SkillImg2,
	},
	{
		image: SkillImg3,
	},
	{
		image: SkillImg4,
	},
	{
		image: SkillImg5,
	},
	{
		image: SkillImg6,
	},
	{
		image: SkillImg7,
	},
	{
		image: SkillImg8,
	},
];

// services
export const services = [
	{
		icon: <FiLayout />,
		name: "Web Design",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
	},
	{
		icon: <FiSettings />,
		name: "Web Development",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
	},
	{
		icon: <FiPenTool />,
		name: "Branding",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
	},
	{
		icon: <FiTag />,
		name: "SEO",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
	},
];

// testimonials
export const testimonials = [
	{
		authorImg: TestiImage1,
		authorText:
			"Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
		authorName: "Olivia Doe",
		authorPosition: "Head of Design, Google",
	},
	{
		authorImg: TestiImage2,
		authorText:
			"Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
		authorName: "Olivia Doe",
		authorPosition: "Head of Design, Google",
	},
	{
		authorImg: TestiImage3,
		authorText:
			"Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
		authorName: "Olivia Doe",
		authorPosition: "Head of Design, Google",
	},
];

// contact
export const contact = [
	{
		icon: <FiMail />,
		title: "Have a question?",
		subtitle: "I am here to help you.",
		description: "Email me at hello@youremail.com",
	},
	{
		icon: <FiMapPin />,
		title: "Current Location",
		subtitle: "Bucharest, Romania",
		description: "Serving clients worldwide",
	},
];
