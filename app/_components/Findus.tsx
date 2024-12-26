import Image from "next/image";

export default function FindUs() {
	return (
		<div className="mt-8">
			<h1 className="text-center text-4xl font-semibold text-[#006800] mx-12 pb-2">
				Find Us On
			</h1>
			<div className="findusimg flex flex-wrap justify-evenly gap-4 md:gap-10 mt-8">
				<a
					className="findus-anchor"
					href="https://www.houzz.com/professionals/roofing-and-gutters/r-and-m-roofers-llc-pfvwus-pf~1547256125"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
					width={100}
					height={100}
						src="./image/houzz.png"
						alt="Houzz"
						className=" w-36 sm:w-40 md:w-48 lg:w-64 p-4"
					/>
				</a>
				<a
					className="findus-anchor"
					href="https://www.bbb.org/us/ny/hempstead/profile/roofing-contractors/r-m-roofers-llc-0121-87152151"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
					width={100}
					height={100}
						src="./image/bbb.png"
						alt="BBB"
						className=" w-36 sm:w-40 md:w-48 lg:w-64 p-4"
					/>
				</a>
				<a
					className="findus-anchor"
					href="https://www.showmelocal.com/profile.aspx?bid=24919773"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
					width={100}
					height={100}
						src="./image/showMeLocal.png"
						alt="ShowMeLocal"
						className=" w-36 sm:w-40 md:w-48 lg:w-64 p-4"
					/>
				</a>
				<a
					className="findus-anchor"
					href="https://www.mapquest.com/us/new-york/rm-roofers-420072327"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
					width={100}
					height={100}
						src="./image/mapquest.png"
						alt="MapQuest"
						className=" w-36 sm:w-40 md:w-48 lg:w-64 p-4"
					/>
				</a>
			</div>

			<section
				className="bg-fixed bg-no-repeat bg-cover w-full pb-32 mt-12 relative"
				style={{ backgroundImage: "url('./image/roofing-bg.jpg" }}
			>	
				<div className="flex flex-col font-semibold md:font-normal mx-auto md:mx-36">

					<div className="w-full">
						<Image
							src="./image/logo.png"
							alt="RM Roofing Logo"
							width={300}
							height={100}
							className="block mx-auto max-w-96"
						/>
					</div>
					<div className="cont-p mx-8 z-10">
						<p className="text-center text-xl text-white text-pretty">
							Why should you choose R&M Roofers LLC for your roofing needs?
							Because when you choose us, you{"'"}re choosing 14 years of unwavering
							commitment to excellence. Our team is not just experienced; we are
							passionate about providing roofing solutions that protect your
							investment. We understand the significance of your roof, and we
							approach every project with meticulous care and expertise.
						</p>
					</div>
				</div>
			<div className="absolute inset-0 bg-black/5"></div>
			</section>
		</div>
	);
}
