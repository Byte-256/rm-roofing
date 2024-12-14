"use client";
import { useState } from "react";
export default function Experience() {
	return (
		<section className="mt-24 px-4 md:px-16">
			<div className="flex flex-col md:flex-row justify-center gap-14">
				{/* Left Column */}
				<div className="main-menu-text flex flex-col max-w-full md:max-w-[40%]">
					<h2 className="text-3xl md:text-5xl font-bold text-[#006800] mb-4">
						We have 14 Years of Experience
					</h2>
					<p className="text-lg md:text-xl mb-4">
						Welcome to R&M Roofers LLC, your trusted partner for top-quality
						roofing solutions in Hempstead, NY, and nearby areas. With 14 years
						of solid experience in the roofing industry, we've built a
						reputation for exceptional craftsmanship, reliability, and
						outstanding service.
					</p>
					<a
						href="#"
						className="text-[#006800] font-semibold border-2 border-[#ffc000] px-6 py-2 rounded-lg inline-block hover:bg-[#ffc000] hover:text-black transition-all duration-300"
					>
						Free Estimate
					</a>
				</div>

				{/* Right Column (Form) */}
				<ContactForm />
			</div>
		</section>
	);
}

function ContactForm() {
	const [formData, setFormData] = useState({
		fullName: "",
		phone: "",
		email: "",
		zipCode: "",
	});

	const handleChange = (e: { target: { name: any; value: any; }; }) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		// Handle form submission logic
		console.log(formData);
	};

	return (
		<section className="bg-[#3C3C3CFF] p-6 md:p-12 rounded-lg shadow-lg">
			<h2 className="text-3xl text-center text-white mb-4">
				Contact Us To Get A Quote!
			</h2>
			<p className="text-center text-white mb-6">
				Enter your details below to claim your free measure & design
				consultation (value $250)
			</p>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div className="flex flex-col">
					<label htmlFor="fullName" className="text-white mb-2">
						Full Name
					</label>
					<input
						type="text"
						id="fullName"
						name="fullName"
						value={formData.fullName}
						onChange={handleChange}
						className="p-3 rounded-lg border border-gray-300"
						placeholder="Full Name"
						required
					/>
				</div>

				<div className="flex flex-col">
					<label htmlFor="phone" className="text-white mb-2">
						Personal Phone
					</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						className="p-3 rounded-lg border border-gray-300"
						placeholder="Personal Phone"
						required
					/>
				</div>

				<div className="flex flex-col">
					<label htmlFor="email" className="text-white mb-2">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="p-3 rounded-lg border border-gray-300"
						placeholder="Email"
						required
					/>
				</div>

				<div className="flex flex-col">
					<label htmlFor="zipCode" className="text-white mb-2">
						Zip Code
					</label>
					<input
						type="text"
						id="zipCode"
						name="zipCode"
						value={formData.zipCode}
						onChange={handleChange}
						className="p-3 rounded-lg border border-gray-300"
						placeholder="Zip Code"
						required
					/>
				</div>

				<div className="text-center">
					<button
						type="submit"
						className="w-full py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-400 transition duration-300"
					>
						Request Free Estimate
					</button>
				</div>
			</form>
		</section>
	);
}
