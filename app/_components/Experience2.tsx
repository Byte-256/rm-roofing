"use client";

export default function Experience2() {
	return (
		<div
			className="bg-fixed bg-no-repeat bg-cover bg-[50%] py-36 relative"
			style={{
				backgroundImage:
					'url("https://firebasestorage.googleapis.com/v0/b/clientesimages.appspot.com/o/Paginas%2F6542b58cc5319b25a21a65e0%2Fstock%2FR%26M%20Roofers%20LLC-2023-11-01T20%3A35%3A27.077Z-4.jpg?alt=media&amp;token=88839fcf-bac8-4dff-9fd4-3d9db861fd82")',
			}}
		>
			<div className="absolute inset-0 bg-black/45"></div>

			<h2 className="text-center py-4 relative text-white font-bold capitalize text-5xl">
				Crafting Roofs that Endure.
			</h2>
			<div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				<div className="text-center p-3 relative bg-[#50c519]">
					<div>
						<span className="text-white text-[69px]">14</span>
						<span className="text-white text-[69px]">+</span>
					</div>
					<p className="text-white text-[18px]">Years Of Experience</p>
				</div>
				<div className="text-center p-3 relative bg-[#e8ac05]">
					<div>
						<span className="text-white text-[69px]">100</span>
						<span className="text-white text-[69px]">%</span>
					</div>
					<p className="text-white text-[18px]">Professionals</p>
				</div>
				<div className="text-center p-3 relative bg-[#50c519]">
					<div>
						<span className="text-white text-[69px]">25</span>
						<span className="text-white text-[69px]">+</span>
					</div>
					<p className="text-white text-[18px]">Miles Around Hempstead, NY</p>
				</div>
				<div className="text-center p-3 relative bg-[#e8ac05]">
					<div>
						<span className="text-white text-[69px]">100</span>
						<span className="text-white text-[69px]">%</span>
					</div>
					<p className="text-white text-[18px]">On Time</p>
				</div>
				<div></div>
			</div>
		</div>
	);
}
