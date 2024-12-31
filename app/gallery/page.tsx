import Image from "next/image";
import ScrollToTop from "../_components/ScrollToTop";

export default function Gallery() {
	const images = Array.from(
		{ length: 51 },
		(_, i) => `./gallery-img/gal(${i + 1}).jpg`
	);
	return (
		<>
			<section 
			style={{backgroundImage: "url('./gallery-img/title.webp')"}}
			className="bg-black/45  p-10 flex justify-center text-center bg-no-repeat bg-cover">
				<h1 className="font-semibold text-5xl text-white py-24">GALLERY</h1>
			</section>
			<section className="gal-img lg:px-10 columns-1 md:columns-2 lg:columns-3">
				{images.map((src, index) => (
					<Image
						width={100}
						height={100}
						src={src}
						alt={src + " - Image"}
						key={index}
						className={
							src === "./gallery-img/gal(51).jpg"
								? "block md:hidden lg:block"
								: "block"
						}
					/>
				))}
			</section>
			<ScrollToTop />
		</>
	);
}
