// Hero Component
export default function Hero() {
	return (
		<>
			{/* Section 1 Home */}
			{/* Overlay to darken the image */}
			<div className="pic-wrapper relative w-full h-full  overflow-hidden svgHerosection1 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/45">
				{/* Image SlideShow */}
				<figure
					className="pic-1"
					style={{ backgroundImage: "url(./image/hero-1.jpg)" }}
				></figure>
				<figure
					className="pic-2"
					style={{ backgroundImage: "url(./image/hero-2.jpg)" }}
				></figure>
				<figure
					className="pic-3"
					style={{ backgroundImage: "url(./image/hero-3.jpg)" }}
				></figure>
				<figure
					className="pic-4"
					style={{ backgroundImage: "url(./image/hero-4.jpg)" }}
				></figure>

				{/* Hero Content */}
				<div className="z-[4] relative w-4/5 mx-auto h-full flex md:flex-row flex-col justify-center items-center md:pb-[80px]">
					<div className="w-full justify-center py-32">
						<div className="w-full flex flex-col justify-center items-center">
							<h1 className="text-white text-center text-[30px] md:text-[48px] font-bold">
								Roofing Excellence, 14 Years Strong.
							</h1>
							<p className="text-white text-center">
								At R&amp;M Roofers LLC, our mission is clear and resolute: to
								provide roofing solutions that protect, enhance, and endure.
								With 14 years of roofing expertise, we understand the critical
								role that your roof plays in safeguarding your home or business.
								Our mission is to deliver roofing services that go beyond mere
								functionality; we aim to create roofs that provide peace of
								mind.
							</p>
							<div className="pt-20">
								<button className="p-4 bg-[#e4b101] font-medium text-white rounded-xl">
									<a href="#contact-form" className="hover:text-black">
										Get Quote
									</a>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
