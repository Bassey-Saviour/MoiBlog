import { useState } from "react";
import React from "react";
// import logo from "../assets/Logo.svg";
import { images } from "../constants";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { LuPanelRightClose } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";

const NavItemInfo = [
	{ name: "Home", link: "/", type: "link" },
	{ name: "Articles", link: "/articles", type: "link" },
	{
		name: "Pages",
		link: "/pages",
		type: "dropdown",
		items: ["About us", "Contact us"],
	},
	{ name: "Pricing", link: "/pricing", type: "link" },
	{ name: "FAQ", link: "/faq", type: "link" },
];

const NavItem = ({ item }) => {
	const [dropdown, setDropdown] = useState(false);

	const dropdownHandler = () => {
		setDropdown((curState) => !curState);
	};

	return (
		<li className="relative group">
			{item.type === "link" ? (
				<>
					<a
						href={item.link}
						className="px-4 py-2"
					>
						{item.name}
					</a>
					<span className="cursor-pointer text-blue-500 absolute transition-all duration-800 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
						/
					</span>
				</>
			) : (
				<div className="flex flex-col items-center">
					<button
						className="flex items-center px-4 py-2 gap-x-1"
						onClick={dropdownHandler}
					>
						<span>{item.name}</span>
						<IoIosArrowDown />
					</button>
					<div
						className={`${
							dropdown ? "block" : "hidden"
						} lg:absolute lg:bottom-0 lg:right-0 lg:hidden pt-4 lg:transition-all lg:duration-500 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
					>
						<ul className="flex flex-col overflow-hidden text-center rounded-lg shadow-lg bg-softDark lg:bg-transparent ">
							{item.items.map((page) => (
								<a
									href="/"
									className="px-4 py-2 text-white hover:bg-hardDark hover:text-white lg:text-softDark"
								>
									{page}
								</a>
							))}
						</ul>
					</div>
				</div>
			)}
		</li>
	);
};

const Header = () => {
	const [navIsVisible, setNavIsVisible] = useState(false);
	const navVisibilityHandler = () => {
		setNavIsVisible((curState) => {
			return !curState;
		});
	};

	return (
		<section>
			<header className="container flex items-center justify-between px-3 py-3 mx-auto">
				<div>
					<img
						src={images.logo}
						alt="logo"
						className="left-0"
					/>
				</div>
				<div className="z-50 lg:hidden">
					{navIsVisible ? (
						<LuPanelRightClose
							className="w-6 h-6"
							onClick={navVisibilityHandler}
						/>
					) : (
						<BsFillMenuButtonWideFill
							className="w-6 h-6"
							onClick={navVisibilityHandler}
						/>
					)}
				</div>
				<div
					className={`${
						navIsVisible ? "right-0" : "-right-full"
					} transition-all duration-300 mt-[56px] lg:mt-0 bg-hardDark lg:bg-transparent fixed top-0 bottom-0 flex flex-col items-center justify-center w-full lg:static lg:flex-row lg:justify-end lg:w-auto  gap-x-9 z-49`}
				>
					<ul className="flex flex-col items-center font-semibold text-white gap-y-5 lg:text-softDark lg:flex-row gap-x-2">
						{NavItemInfo.map((item, index) => (
							<NavItem
								key={index}
								// name={item.name}
								// link={item.link}
								item={item}
							/>
						))}
					</ul>
					<button className="px-6 py-2 mt-5 font-semibold text-blue-500 transition-all duration-300 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white lg:mt-0">
						Sign-in
					</button>
				</div>
			</header>
		</section>
	);
};

export default Header;
