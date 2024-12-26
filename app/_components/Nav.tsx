"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
	FaClock,
	FaFacebook,
	FaInstagram,
	FaPhoneAlt,
	FaWhatsapp,
	FaYelp,
} from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	const closeMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="w-full">
			{/* Top Bar */}
			<div className="bg-primary flex flex-wrap justify-evenly md:justify-center md:gap-40 items-center w-full gap-y-2 md:gap-y-0 md:h-20 px-4 pt-4 md:pt-0">
				{/* md:Left Side  sm:Above */}
				<div className="flex">
					<Link
						href="tel:+1516-233-9506"
						target="_blank"
						className="mx-2 px-6 border-white border-x-2 text-white flex flex-row gap-2 "
					>
						<FaClock className="mt-1" />
						Mon-Fri 09:00-17:00
					</Link>
					<Link
						href="tel:+1516-233-9506"
						target="_blank"
						className="mx-2 px-6 border-white border-r-2 text-white flex flex-row gap-2 pt-3 md:pt-0"
						// className="mx-2 border-r-2 px-4 text-white flex flex-row gap-2"
					>
						<FaPhoneAlt className="mt-1" />
						516-233-9506
					</Link>
				</div>

				{/* md:Right Side sm:Below */}
				<div className="flex flex-wrap lg:gap-4 gap-6 pt-4 md:pt-0 pb-4 md:pb-0">
					<div className="md:px-4 px-6 border-white border-x-2">
						<Link
							rel="nofollow"
							href="https://www.facebook.com/profile.php?id=100082961067383" // Changed!
							target="_blank"
							className="text-white text-2xl"
						>
							<FaFacebook />
						</Link>
					</div>
					<div className="md:pr-4 pr-6 border-white border-e-2">
						<Link
							href="https://www.yelp.com/biz/r-and-m-roofers-hempstead-5" // Changed From LinkedIn to Yelp
							target="_blank"
							className="text-white text-2xl"
						>
							<FaYelp />
						</Link>
					</div>
					<div className="md:pr-4 pr-6 border-white border-e-2">
						<Link
							href="https://wa.me/+15162339506" // Changed!
							target="_blank"
							className="text-white text-2xl"
						>
							<FaWhatsapp />
						</Link>
					</div>
					<div className="md:pr-4 pr-6 border-white border-e-2">
						<Link
							href="https://www.instagram.com/rmrooferllc/" // Changed!
							target="_blank"
							className="text-white text-2xl"
						>
							<FaInstagram />
						</Link>
					</div>
				</div>
			</div>

			{/* Header */}
			<div className="flex justify-between items-center px-4 bg-white lg:justify-evenly">
				{/* Logo */}
				<Link href={"/"}>
					<Image
						src="./image/logo.png"
						alt="Logo"
						className="w-40"
						width={100}
						height={100}
					/>
				</Link>

				{/* Hamburger Menu Button (Visible on Mobile) */}
				<button
					onClick={toggleMenu}
					className="block md:hidden focus:outline-none"
				>
					<div className="w-6 h-1 bg-red-400 mb-1"></div>
					<div className="w-6 h-1 bg-red-400 mb-1"></div>
					<div className="w-6 h-1 bg-red-400"></div>
				</button>

				{/* Links (Always Visible on Desktop) */}
				<div className="hidden md:flex space-x-6">
					<Links closeMenu={closeMenu} />
				</div>
			</div>

			{/* Mobile Menu (Visible when toggled) */}
			<div
				className={`${
					isOpen
						? "block translate-y-0 opacity-100"
						: "hidden opacity-0 translate-y-4"
				} md:hidden bg-white shadow-md mt-2 p-4 transition-all duration-500 ease-in-out`}
			>
				<Links closeMenu={closeMenu} />
			</div>
		</nav>
	);
}

function Links({ closeMenu }: { closeMenu: () => void }) {
	const path = usePathname();
	return (
		<div className="flex flex-col md:flex-row md:space-x-6 text-lg">
			<Link
				href="/"
				className={`py-2 hover:text-red-400 ${
					path === "/" ? "text-yellow-400 font-semibold" : ""
				}`}
				onClick={closeMenu}
			>
				HOME
			</Link>
			<Link
				href="/about"
				className={`py-2 hover:text-red-400 ${
					path === "/about" ? "text-yellow-400 font-semibold" : ""
				}`}
				onClick={closeMenu}
			>
				ABOUT
			</Link>
			<Link
				href="/services"
				className={`py-2 hover:text-red-400 ${
					path === "/services" ? "text-yellow-400 font-semibold" : ""
				}`}
				onClick={closeMenu}
			>
				SERVICES
			</Link>
			<Link
				href="/gallery"
				className={`py-2 hover:text-red-400 ${
					path === "/gallery" ? "text-yellow-400 font-semibold" : ""
				}`}
				onClick={closeMenu}
			>
				GALLERY
			</Link>
			<Link
				href="/contact"
				className={`py-2 hover:text-red-400 ${
					path === "/contact" ? "text-yellow-400 font-semibold" : ""
				}`}
				onClick={closeMenu}
			>
				CONTACT
			</Link>
		</div>
	);
}
