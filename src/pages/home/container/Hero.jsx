import React from "react";
import { images } from "../../../constants";
import { IoSearch } from "react-icons/io5";

const Hero = () => {
	return (
		<section className="container flex flex-col px-5 py-5 mx-auto lg:flex-row">
			<div className="mt-10 lg:w-1/2">
				<h1 className="font-roboto text-3xl text-center font-bold text-softDark md:text-5xl lg:text-left lg:max-w-[540px]">
					Read the most interesting articles
				</h1>
				<p className="mt-4 text-center text-lightDark md:text-xl lg:text-left">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore minus
					voluptates dolor iste reprehenderit. Ea in nulla totam? Nostrum ipsa,
					eligendi facilis soluta quos inventore ut ducimus numquam neque
					explicabo!
				</p>
				<div className="flex flex-col gap-y-2.5 mt-10 relative">
					<div className="relative">
						<IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
						<input
							type="text"
							className="placeholder:font-bold font-semibold text-softDark placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[0px_9px_20px_rgba(13,38,76,0.19)] md:py-4"
							placeholder="Search articles..."
						/>
					</div>
					<button className="w-full px-5 py-3 font-semibold text-white rounded-lg bg-primary md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2">
						Search
					</button>
				</div>
				<div className="flex flex-col mt-4 lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
					<span className="mt-2 italic font-semibold lg:mt-4 text-lightDark">
						Popular Tags:
					</span>
					<ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3">
						<li className="rounded-lg bg-primary/10 px-3 py-1.5 text-primary font-semibold">
							Design
						</li>
						<li className="rounded-lg bg-primary/10 px-3 py-1.5 text-primary font-semibold">
							User Experience
						</li>
						<li className="rounded-lg bg-primary/10 px-3 py-1.5 text-primary font-semibold">
							User Interfaces
						</li>
					</ul>
				</div>
			</div>
			<div className="hidden lg:block lg:w-1/2">
				<img
					src={images.heroImage}
					alt="users are reading articles"
					className="w-full"
				/>
			</div>
		</section>
	);
};

export default Hero;
