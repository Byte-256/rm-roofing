export default function FindUs() {
	return (
		<div className="mt-16">
			<h1 className="text-center text-4xl font-semibold text-[#006800] mx-12">Find Us On</h1>
			<div className="findusimg flex justify-center gap-10">
				<a
					className="findus-anchor"
					href="https://www.houzz.com/professionals/roofing-and-gutters/r-and-m-roofers-llc-pfvwus-pf~1547256125"
					target="_blank"
				>
					<img
						src="./image/houzz.png"
						alt=""
						className="w-80 p-20"
					/>
				</a>
				<a
					className="findus-anchor"
					href="https://www.bbb.org/us/ny/hempstead/profile/roofing-contractors/r-m-roofers-llc-0121-87152151"
					target="_blank"
				>
					<img
						src="./image/bbb.png"
						alt=""
						className="w-80 p-20"
					/>
				</a>
				<a
					className="findus-anchor"
					href="https://www.showmelocal.com/profile.aspx?bid=24919773"
					target="_blank"
				>
					<img
						src="./image/showMeLocal.png"
						alt=""
						className="w-80 p-20"
					/>
				</a>
				<a
					className="findus-anchor"
					href="https://www.mapquest.com/us/new-york/rm-roofers-420072327"
					target="_blank"
				>
					<img
						src="./image/mapquest.png"
						alt=""
						className="w-80 p-20"
					/>
				</a>
			</div>
		</div>
	);
}
