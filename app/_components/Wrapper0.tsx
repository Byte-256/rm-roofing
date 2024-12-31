import Image from "next/image";

export default function Wrapper0() {
	return (
		<div
			style={{ backgroundImage: "url(./image/graphics2.jpg)" }}
			className="wraper-0 bg-gray-800 flex flex-col relative overflow-hidden"
		>
			{/* Decorative Background Elements */}
			<div className="absolute inset-0 md:h-1/2 lg:h-3/5 bg-[#242424] pointer-events-none"></div>

			{/* Section Header */}
			<div className="text-white text-lg pt-16 px-4 md:px-12 relative z-10">
				<span className="flex items-center gap-2">
					<p className="bg-amber-300 h-1 w-6 mt-2"></p>
					<span className="uppercase tracking-wide">LATEST PROJECTS</span>
				</span>
				<h2 className="text-3xl md:text-5xl text-yellow-400 font-bold pt-3 leading-tight">
					{`Let's Explore Our`} <br /> Recent Works
				</h2>
			</div>

			{/* Image Cards */}
			<div className="relative z-10 py-8 flex sm:start-14 lg:start-6 justify-end">
				<ImageCards />
			</div>		
		</div>
	);
}

function ImageCards() {
	const images = [
		{
			src: `./image/sec-4-pic1.jpg`,
			alt: "Photo 1",
			title: "Factory | Residential",
			description: "Roof Construction",
		},
		{
			src: `./image/sec-4-pic2.jpg`,
			alt: "Photo 2",
			title: "Commercial | Factory",
			description: "Roof Construction",
		},
		{
			src: `./image/sec-4-pic3.jpg`,
			alt: "Photo 3",
			title: "Commercial | Residential",
			description: "Modern Roofing",
		},
		{
			src: `./image/sec-4-pic4.jpg`,
			alt: "Photo 4",
			title: "Commercial | Factory | Residential",
			description: "Renovation Roof",
		},
	];
	return (
		<div className="image-container grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-16">
			{images.map((image, index) => (
				<div
					key={index}
					className=" max-w-96 relative group overflow-hidden rounded-md shadow-lg"
				>
					{/* Image */}
					<Image
						src={image.src}
						alt={image.alt}
						width={400} // Set base width for images
						height={300} // Set base height for images
						className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
					/>

					{/* Overlay */}
					<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

					{/* Content */}
					<div className="absolute bottom-0 left-0 p-4 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
						<p>{image.title}</p>
						<h3 className="text-lg font-bold">{image.description}</h3>
					</div>
				</div>
			))}
		</div>
	);
}
