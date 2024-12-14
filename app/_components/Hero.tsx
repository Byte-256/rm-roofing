export default function Hero() {
	return (
		<>
			<section
				className="sec-1 relative bg-cover py-20 px-6 md:px-20"
				style={{ backgroundImage: "url(/image/homemainbg.jpg)" }}
			>
				{/* Overlay to darken the image */}
				<div className="absolute inset-0 bg-black opacity-10"></div>

				{/* Hero Content */}
				<div className="relative z-10 flex flex-col justify-center items-center text-center md:text-left">
					<h1 className="m-4 font-bold text-3xl md:text-5xl text-shadow-lg text-black">
						Roofing Excellence, 14 Years Strong.
					</h1>
					<p className="m-4 text-lg md:text-xl max-w-5xl text-shadow-md">
						At R&M Roofers LLC, our mission is simple and steadfast: to deliver
						roofing solutions that protect, enhance, and stand the test of time.
						With 14 years of roofing expertise, we understand the vital role
						your roof plays in protecting your home or business. Our goal is to
						provide roofing services that do more than just function — we strive
						to create roofs that bring you peace of mind.
					</p>
				</div>
			</section>
		</>
	);
}
