import React from "react";
// import logo from "../assets/Logo.svg";
import { images } from "../constants";

const NavItemInfo = [
	{ name: "Home", link: "/" },
	{ name: "Articles", link: "/articles" },
	{ name: "Pages", link: "/pages" },
	{ name: "Pricing", link: "/pricing" },
	{ name: "FAQ", link: "/faq" },
];

const NavItem = ({ name, link }) => {
	return (
		<li className="relative group">
			<a
				href={link}
				className="px-4 py-2"
			>
				{name}
			</a>
			<span className="text-blue-500 absolute transition-all duration-800 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
				/
			</span>
		</li>
	);
};

const Header = () => {
	return (
		<section>
			<header className="container flex items-center justify-between px-5 py-5 mx-auto">
				<div>
					<img
						src={images.logo}
						alt="logo"
					/>
				</div>
				<div className="flex items-center gap-x-9">
					<ul className="flex font-semibold gap-x-2">
						{NavItemInfo.map((item, index) => (
							<NavItem
								key={index}
								name={item.name}
								link={item.link}
							/>
						))}
					</ul>
					<button className="px-6 py-2 font-semibold text-blue-500 transition-all duration-300 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white">
						Sign-in
					</button>
				</div>
			</header>
		</section>
	);
};

export default Header;
