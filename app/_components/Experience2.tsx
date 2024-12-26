"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Experience2() {
	const { ref: statsRef, inView: statsVisible } = useInView({
		triggerOnce: true, // Ensures the animation triggers only once
		threshold: 0.2, // Triggers when 20% of the section is visible
	});
	return (
		<div
			className="bg-fixed bg-no-repeat bg-cover bg-[50%] py-36 relative"
			style={{
				backgroundImage:
					'url("./image/Experience2.jpg")',
			}}
		>
			<div className="absolute inset-0 bg-black/45"></div>

			<h2 className="text-center py-4 relative text-white font-bold capitalize text-5xl">
				Crafting Roofs that Endure.
			</h2>
			<div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				<div className="text-center p-3 relative bg-[#50c519]" ref={statsRef}>
					<div>
						<span className="text-white text-[69px]"><CountUp start={0} end={14} duration={1.5} redraw={statsVisible}/></span>
						<span className="text-white text-[69px]">+</span>
					</div>
					<p className="text-white text-[18px]">Years Of Experience</p>
				</div>
				<div className="text-center p-3 relative bg-[#e8ac05]">
					<div>
						<span className="text-white text-[69px]"><CountUp start={0} end={100} duration={1.2}  redraw={statsVisible}/></span>
						<span className="text-white text-[69px]">%</span>
					</div>
					<p className="text-white text-[18px]">Professionals</p>
				</div>
				<div className="text-center p-3 relative bg-[#50c519]">
					<div>
						<span className="text-white text-[69px]"><CountUp start={0} end={25} duration={1.5}  redraw={statsVisible}/></span>
						<span className="text-white text-[69px]">+</span>
					</div>
					<p className="text-white text-[18px]">Miles Around Hempstead, NY</p>
				</div>
				<div className="text-center p-3 relative bg-[#e8ac05]">
					<div>
						<span className="text-white text-[69px]"><CountUp start={0} end={100} duration={1.2}  redraw={statsVisible}/></span>
						<span className="text-white text-[69px]">%</span>
					</div>
					<p className="text-white text-[18px]">On Time</p>
				</div>
				<div></div>
			</div>
		</div>
	);
}
