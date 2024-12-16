import Image from "next/image";
import Link from "next/link";

export default function Wrapper0() {
	return (
		<div className="wraper-0 from-[#242424] to-[#efefef] bg-gradient-to-b h-1/5 flex flex-col">
			<div className="text-white text-lg pt-12 pl-12">
				<span className="pl-1 md:pl-8 flex gap-2">
					<p className="bg-amber-300 h-1 mt-2.5 w-3"></p>
					LATEST PROJECTS
				</span>
				<h2 className="pl-8 pt-3 text-3xl text-amber-300 font-bold">
					{`Let's Explore Our`} <br /> Recent Works
				</h2>
			</div>
			<ImageCards />
			
			<div className="flex flex-col justify-center items-center pb-16">
				<h1 className="text-4xl font-bold pt-8 pb-4 col-span-4">Want more ?</h1>
				<Link href="/gallery" className="bg-[#006800] text-white font-semibold text-xl p-2 rounded-md"> Click here </Link>
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
		}
	];
	return (
		<div className="image-container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-16">
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
					<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

					{/* Content */}
					<div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
						<p>{image.title}</p>
						<h3 className="text-lg font-bold">{image.description}</h3>
					</div>
				</div>
			))}
		</div>
	);
}
