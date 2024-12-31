"use client"
import Image from "next/image";
import { dataProp } from "../services/page";
import { RefObject } from "react";

export default function Showcase({
	service_data,
}: {
	service_data: dataProp[];
}) {
	return (
		<section
			style={{ backgroundImage: "url(./image/graphics.png)" }}
			className="bg-cover bg-center py-20"
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1 gap-y-3 place-items-center">
				{service_data.map((value, index) => (
					<ShowcaseCard data={value} key={index} />
				))}
			</div>
		</section>
	);
}

function ShowcaseCard({ data }: { data: dataProp }) {
	const scrollToSection = (ref: RefObject<any>) => {
		ref.current.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};
	return (
		<div
			className="group relative w-full max-w-xs h-96 rounded-lg overflow-hidden shadow-lg hover:cursor-pointer"
			onClick={() => {
				if (data.ref != null) {
					scrollToSection(data.ref);
				}
			}}
		>
			{/* Image */}
			<Image
				src={data.img[0]}
				alt=""
				fill
				className="transition-transform duration-500 group-hover:scale-110 object-cover"
			/>

			{/* Overlay */}
			<div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

			{/* Content */}
			<div className="absolute inset-0 flex flex-col justify-end text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
				<h4 className="text-2xl font-bold text-white mb-2">{data.title}</h4>
				<p className="text-sm text-white line-clamp-3 leading-snug">
					{data.description_1}
				</p>
			</div>
			{/* Content for Mobile */}
			<div className="from-black via-transparent to-transparent bg-gradient-to-t absolute inset-0 flex flex-col justify-end text-center p-6 opacity-100 group-hover:opacity-0 transition-opacity ">
				<h4 className="text-2xl font-bold text-white mb-2">{data.title}</h4>
			</div>
		</div>
	);
}
