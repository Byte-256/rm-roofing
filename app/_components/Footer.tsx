"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	FaAngleRight,
	FaBuilding,
	FaClock,
	FaEnvelope,
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaMapMarked,
	FaPhoneAlt,
	FaWhatsapp,
	FaWindowClose,
} from "react-icons/fa";

export function Footer() {
	const path = usePathname();

	return (
		<footer className="bg-[#242424]">
			{/* Contact */}
			<div className="foot-1 flex justify-evenly flex-wrap items-center p-3 text-white">
				<div className="foot-logo">
					<Image
						width={100}
						height={100}
						src="./image/logo.png"
						alt="RM Logo"
						className="w-32 md:w-56"
					/>
				</div>
				<Link
					href={"tel:+8469025092"}
					className="foot-contact flex items-center gap-2.5"
				>
					<div className="flex justify-center items-center bg-amber-300 text-white text-lg w-8 h-8 hover:animate-spin hover:bg-white hover:text-[#006800] animate-bounce rounded-full">
						<FaPhoneAlt />
					</div>
					<div className="">
						<p>Need Any Roofing Help?</p>
						<h3 className="text-lg font-semibold">Call Us: +8469025092</h3>
					</div>
				</Link>
				<div className="foot-social flex gap-2 md:gap-4">
					<Link
						rel="nofollow"
						href="https://www.facebook.com/profile.php?id=61561068159882"
						target="_blank"
						className="text-2xl hover:text-yellow-300"
					>
						<FaFacebook />
					</Link>
					<Link
						href="https://www.linkedin.com/in/ss-india-roofing-b10647317/"
						target="_blank"
						className="text-2xl hover:text-yellow-300"
					>
						<FaLinkedin />
					</Link>
					<Link
						href="https://wa.me/+918610486372"
						target="_blank"
						className="text-2xl hover:text-yellow-300"
					>
						<FaWhatsapp />
					</Link>
					<Link
						href="https://www.instagram.com/ssinidaroofing/"
						target="_blank"
						className="text-2xl hover:text-yellow-300"
					>
						<FaInstagram />
					</Link>
				</div>
			</div>

			<hr className="mx-6 md:mx-20" />

			{/* Foot-2 */}
			<div className="foot-2 flex flex-wrap md:flex-nowrap md:gap-5 text-[#A5A5A5] px-10  md:justify-evenly mt-10 gap-y-4">
				<div className="foot-info">
					{" "}
					<h1 className="relative text-2xl font-bold after:content-[''] after:block after:w-16 after:h-1 after:bg-[#ffc000] after:mt-4 after:left-0 text-white  mb-3">
						Information
					</h1>
					<Link
						href={"https://maps.app.goo.gl/93DV8RhV3kpbk7wR8"}
						target="_blank"
					>
						<p className=" flex gap-3 items-center hover:text-[#e7e4e4]">
							<FaMapMarked /> 90 Grove St 9 Hempstead NY, 11550
						</p>
					</Link>
					<Link
						href={"tel:+1516-233-9506"}
						className="flex gap-3 items-center hover:text-[#e7e4e4]"
					>
						<FaPhoneAlt aria-hidden="true" />
						516-233-9506
					</Link>
					<Link
						href={"mailto:rocael155@gmail.com"}
						className=" flex gap-3 items-center hover:text-[#e7e4e4]"
					>
						<FaEnvelope aria-hidden="true" />
						rocael155@gmail.com
					</Link>
				</div>
				<div className="foot-link">
					<h1 className="relative text-2xl font-bold after:content-[''] after:block after:w-16 after:h-1 after:bg-[#ffc000] after:mt-4 after:left-0 text-white  mb-3">
						Links
					</h1>
					<div className="grid gap-7 grid-cols-2 grid-flow-col">
						<div>
							<p>
								<Link
									href="/"
									className={`flex items-center ${
										path === "/" ? "text-yellow-300" : ""
									}`}
								>
									<FaAngleRight /> Home
								</Link>
							</p>
							<p>
								<Link
									href="/about"
									className={`flex items-center ${
										path === "/about" ? "text-yellow-300" : ""
									}`}
								>
									<FaAngleRight /> About
								</Link>
							</p>
							<p>
								<Link
									href="/services"
									className={`flex items-center ${
										path === "/services" ? "text-yellow-300" : ""
									}`}
								>
									<FaAngleRight /> Services
								</Link>
							</p>
						</div>
						<div>
							<p>
								<Link
									href="/gallery"
									className={`flex items-center ${
										path === "/gallery" ? "text-yellow-300" : ""
									}`}
								>
									<FaAngleRight /> Gallery
								</Link>
							</p>
							<p>
								<Link
									href="/contact"
									className={`flex items-center ${
										path === "/contact" ? "text-yellow-300" : ""
									}`}
								>
									<FaAngleRight /> Contact
								</Link>
							</p>
						</div>
					</div>
				</div>
				<div className="foot-workhours">
					<h1 className="relative text-2xl font-bold after:content-[''] after:block after:w-16 after:h-1 after:bg-[#ffc000] after:mt-4 after:left-0 text-white mb-3">
						Working Hours
					</h1>
					<p className="flex gap-3 items-center md:text-nowrap">
						<FaBuilding aria-hidden="true" /> Working: Monday - Friday
					</p>
					<p className="flex gap-3 items-center md:text-nowrap">
						<FaWindowClose aria-hidden="true" /> Closed: Saturday - Sunday
					</p>
					<p className="flex gap-3 items-center md:text-nowrap">
						<FaClock /> Time: 09:00 - 17:00
					</p>
				</div>
			</div>
			<div className="sub-footer text-center text-white mt-12">
				<p>
					&copy; Copyright R&M ROOFING 2024. All Rights Reserved. Designed and
					By AxwinX & Byte-256
				</p>
			</div>
		</footer>
	);
}
