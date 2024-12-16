export default function Wrapper0() {
	return (
		<div
			className="wraper-0 from-[#242424] to-[#efefef] bg-gradient-to-b"
			style={{
				backgroundColor:
					"linear-gradient(to bottom,  0%, #242424 50%, #efefef 50%, #efefef 100%)",
			}}
		>
			<div className="sec-4-context">
				<p>LATEST PROJECTS</p>
				<h2 className="font-size: 35px; margin: 0;">
					{`Let's Explore Our`} <br /> Recent Works
				</h2>
			</div>
			<div className="sec-4-img">
				<ImageCards />
			</div>
		</div>
	);
}

function ImageCards() {
	return (
		<div className="image-container">
			{[1, 2, 3, 4].map((index) => (
				<a href="#" className="card" key={index}>
					<img
						className="cardimg"
						src={`./image/sec-4-pic${index}.jpg`}
						alt={`Section 4 Pic ${index}`}
					/>
					<div className="overlay"></div>
					<div className="sec-4-content">
						<p>Factory | Residential</p>
						<h3>Roof Construction {index}</h3>
					</div>
				</a>
			))}
		</div>
	);
}

{
	/* <div className="image-container">
					<a href="#" className="card">
						<img className="cardimg" src="./image/sec-4-pic1.jpg" alt="" />
						<div className="overlay"></div>
						<div className="sec-4-content">
							<p>Factory | Residential</p>
							<h3>Roof Construction</h3>
						</div>
					</a>
				</div>

				<div className="image-container">
					<a href="#" className="card">
						<img className="cardimg" src="./image/sec-4-pic2.jpg" alt="" />
						<div className="overlay"></div>
						<div className="sec-4-content">
							<p>Commercial | Factory</p>
							<h3>Roof Construction</h3>
						</div>
					</a>
				</div>
				<div className="image-container">
					<a href="#" className="card">
						<img className="cardimg" src="./image/sec-4-pic3.jpg" alt="" />
						<div className="overlay"></div>
						<div className="sec-4-content">
							<p>Commercial | Residential</p>
							<h3>Modern Roofing</h3>
						</div>
					</a>
				</div>
				<div className="image-container">
					<a href="#" className="card">
						<img className="cardimg" src="./image/sec-4-pic4.jpg" alt="" />
						<div className="overlay"></div>
						<div className="sec-4-content">
							<p>Commercial | Factory | Residential</p>
							<h3>Renovation Roof</h3>
						</div>
					</a>
				</div> */
}
