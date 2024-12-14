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

		<section className="bg-fixed" style={{ backgroundImage: "url('./image/roofing-bg.jpg"}}>
        	<div className="flex flex-col mx-36">
            	<div className="">
                	<img src="/image/logo.png" alt="RM Roofing Logo" className="block; ml-auto mr-auto w-1/4" />
	            </div>
				<div className="cont-p">
					<p className="text-center text-xl text-white">Why should you choose R&M Roofers LLC for your roofing needs? Because when you choose us, you're choosing 14 years of unwavering commitment to excellence. Our team is not just experienced; we are passionate about providing roofing solutions that protect your investment. We understand the significance of your roof, and we approach every project with meticulous care and expertise. </p>
				</div>
    	    </div>
    	</section>

		</div>
	);
}
