"use client";
import Image from "next/image";
import { RefObject, useRef } from "react";
import ScrollToTop from "../_components/ScrollToTop";

export interface dataProp {
	title: string;
	img: [string, string];
	ref: RefObject<null> | null;
	description_1: string;
	description_2: string;
}

export default function Services() {
	const shingleRef = useRef(null);
	const flatRef = useRef(null);
	const metalRef = useRef(null);

	const service_data: dataProp[] = [
		{
			title: "Shingle Roofing",
			img: ["./services-img/1-1.jpg", "./services-img/1-2.jpg"],
			ref: shingleRef,
			description_1:
				"Shingle roofing is a popular and versatile choice known for its affordability and aesthetic appeal. At R&M Roofers LLC, we specialize in shingle roofing installations that combine style and functionality. With 14 years of experience in Hempstead, NY, we understand the intricacies of shingle roofing, from material selection to precise installation techniques. Our expert team ensures that each shingle is expertly placed, creating a roof that not only enhances the curb appeal of your property but also provides reliable protection against the elements.",
			description_2:
				"When you choose shingle roofing from R&M Roofers LLC, you're selecting a roofing material that offers a wide range of colors and styles to suit your preferences and architectural design. Our skilled roofers take pride in precise installation, ensuring that each shingle is securely placed for optimal performance. We prioritize quality craftsmanship and attention to detail, delivering shingle roofing solutions that are not only visually appealing but also durable and long-lasting. With our shingle roofing expertise, you can trust that your roof will stand up to the challenges of weather and time.",
		},
		{
			title: "Flat Roofing",
			img: ["./services-img/2-1.jpg", "./services-img/2-2.jpg"],
			ref: flatRef,
			description_1:
				"Flat roofing offers unique advantages for both commercial and residential properties, and R&M Roofers LLC specializes in flat roof installations that provide both functionality and style. With 14 years of experience in Hempstead, NY, we have the expertise to design and install flat roofing systems that meet your specific requirements. Whether it's for a commercial building or a modern residential structure, our flat roofs offer reliable protection while allowing for additional outdoor space or creative design possibilities.",
			description_2:
				"When you choose shingle roofing from R&M Roofers LLC, you're selecting a roofing material that offers a wide range of colors and styles to suit your preferences and architectural design. Our skilled roofers take pride in precise installation, ensuring that each shingle is securely placed for optimal performance. We prioritize quality craftsmanship and attention to detail, delivering shingle roofing solutions that are not only visually appealing but also durable and long-lasting. With our shingle roofing expertise, you can trust that your roof will stand up to the challenges of weather and time.",
		},
		{
			title: "Metal Roofing",
			img: ["./services-img/3-1.jpg", "./services-img/3-2.jpg"],
			ref: metalRef,
			description_1:
				"Metal roofing is a durable and energy-efficient choice that provides exceptional protection for your property. R&M Roofers LLC specializes in metal roofing installations that combine strength and style. With 14 years of experience in Hempstead, NY, we are experts in working with various metal roofing materials, including steel, aluminum, and copper. Our metal roofing services are designed to meet your specific needs while enhancing the aesthetics of your property.",
			description_2:
				"When you choose metal roofing from R&M Roofers LLC, you're opting for a roofing material known for its longevity and energy efficiency. Our skilled team ensures that your metal roof is installed with precision, providing reliable protection against weather and environmental challenges. We offer a variety of metal roofing styles and finishes, allowing you to select the one that complements your architectural design. Our commitment to quality and craftsmanship ensures that your metal roof not only performs exceptionally but also adds a modern and sleek appearance to your property.",
		},
	];

	return (
		<>
			{/* Heading */}
			<section>
				<div
					style={{ backgroundImage: "url(./services-img/hero.jpg)" }}
					className="w-full h-96 bg-auto md:bg-cover bg-fixed relative group"
				>
					{/* Black gradient overlay */}
					<div className="absolute inset-0 bg-black to-transparent opacity-40"></div>

					{/* Text content */}
					<h1 className="relative z-10 font-bold text-5xl text-center text-amber-300 p-24 pt-36">
						Our Services
					</h1>
				</div>
			</section>
			{/* Showcasing Available Service */}
			<Showcase service_data={service_data} />

			{/* Detailing the Available Service */}
			{service_data.map((data, index) => (
				<Details data={data} key={index} />
			))}
			<ScrollToTop />
		</>
	);
}

function Details({ data }: { data: dataProp }) {
	return (
		<section
			ref={data.ref}
			className="px-4 py-12 bg-gray-50"
			style={{ backgroundImage: "url(./image/graphics2.jpg)" }}
		>
			<h1 className="text-3xl text-[#006800] font-sans font-bold text-center mb-8">
				{data.title}
			</h1>

			{/* First grid section */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
				<div
					className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg group bg-cover"
					style={{ backgroundImage: `url(${data.img[0]})` }}
				></div>
				<p className="text-lg text-gray-800 leading-relaxed text-justify md:text-left text-pretty">
					{data.description_1}
				</p>
			</div>

			{/* Second grid section */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12">
				<p className="text-lg text-gray-800 leading-relaxed text-justify md:text-left text-pretty">
					{data.description_2}
				</p>
				<div
					className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg group bg-cover"
					style={{ backgroundImage: `url(${data.img[1]})` }}
				></div>
			</div>
		</section>
	);
}

export function Showcase({ service_data }: { service_data: dataProp[] }) {
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
