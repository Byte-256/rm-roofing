"use client";
import {
	FaCalendarAlt,
	FaClock,
	FaFacebook,
	FaInstagram,
	FaLocationArrow,
	FaPhone,
	FaWhatsapp,
	FaYelp,
} from "react-icons/fa";
import Image from "next/image";
import Script from "next/script";

const Contact = () => {
	return (
		<section className="flex grow flex-col">
			{/* Title */}
			<div className="title flex justify-center items-center bg-primary grow h-40">
				<h1 className="text-white text-5xl font-medium">Contact Us</h1>
			</div>

			{/* Section 1 */}
			<section className="con1 mx-4 md:mx-10 lg:mx-40 my-8 md:my-14">
				<div className="des-top-boarder1 bg-primary h-3 w-28 md:h-6 md:w-56"></div>
				<div className="flex flex-wrap md:flex-nowrap">
					<div className="des-right flex items-start justify-start w-screen md:w-fit">
						<div className="des-left-boarder1 bg-primary h-14 md:h-80 w-2 md:w-4"></div>
					</div>
					<div className="content p-4 md:p-8 flex-grow items-center justify-center">
						<h1 className="text-center text-2xl md:text-4xl lg:text-5xl tracking-tight font-sans font-semibold text-primary my-6 md:my-10">
							Get In Touch
						</h1>
						<p className="text-center text-sm md:text-lg lg:text-2xl text-pretty font-serif px-4 md:px-10">
							Our journey has been marked by a steadfast commitment to
							delivering roofing solutions that protect and enhance your
							property. Whether it&apos;s a residential roof that shields your
							loved ones or a commercial roof that safeguards your business, we
							take pride in our ability to provide roofing services that stand
							up to the challenges of time and weather.
						</p>
						<div className="contact-info grid grid-flow-row grid-cols-1 grid-rows-4 md:grid-cols-2 lg:grid-cols-4 items-center gap-6 md:gap-10 lg:gap-20 md:pt-10 mt-16 pl-24 h-auto max-h-96">
							{/* 1 Location */}
							<div className="flex items-center gap-3 md:gap-5">
								<FaLocationArrow className="text-2xl md:text-4xl" />
								<div className="flex flex-col">
									<h4 className="text-lg md:text-2xl font-medium">Location</h4>
									<p className="text-primary text-sm md:text-base">
										Hempstead, NY
									</p>
								</div>
							</div>
							{/* 2 Phone */}
							<div className="flex items-center gap-3 md:gap-5">
								<FaPhone className="text-2xl md:text-4xl" />
								<div className="flex flex-col">
									<h4 className="text-lg md:text-2xl font-medium">Phone</h4>
									<a
										className="text-primary text-sm md:text-base hover:text-yellow-400"
										href="tel:+1 (516) 233-9506"
									>
										(516) 233-9506
									</a>
								</div>
							</div>
							{/* 3 Calendar */}
							<div className="flex items-center gap-3 md:gap-5">
								<FaCalendarAlt className="text-2xl md:text-4xl" />
								<div className="flex flex-col">
									<h4 className="text-lg md:text-2xl font-medium">
										Working Days
									</h4>
									<p className="text-primary text-sm md:text-base">
										Monday - Saturday
									</p>
								</div>
							</div>
							{/* 4 Clock */}
							<div className="flex items-center gap-3 md:gap-5">
								<FaClock className="text-2xl md:text-4xl" />
								<div className="flex flex-col">
									<h4 className="text-lg md:text-2xl font-medium">
										Working Hours
									</h4>
									<p className="text-primary text-sm md:text-base">
										08:00 AM - 05:00 PM
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="des-right flex items-end justify-end w-screen md:w-fit">
						<div className="des-right-boarder1 bg-primary h-20 md:h-80 w-2 md:w-4"></div>
					</div>
				</div>
				<div className="des-bottom flex justify-end">
					<div className="des-bottom-boarder1 bg-primary h-3 w-28 md:h-6 md:w-60"></div>
				</div>
			</section>

			{/* Section 2 */}
			<div className="sec2-contact py-5 md:py-10 flex flex-col justify-center items-center">
				<h1 className="text-2xl lg:text-4xl font-semibold tracking-wide pb-4">
					Follow Us On
				</h1>
				<div className="follow-icon flex justify-evenly items-center md:gap-8">
					<a
						href="https://www.facebook.com/profile.php?id=100082961067383"
						target="_blank"
					>
						<FaFacebook className="text-3xl md:text-5xl ml-6 hover:text-white" />
					</a>
					<a
						href="https://www.yelp.com/biz/r-and-m-roofers-hempstead-5"
						target="_blank"
					>
						<FaYelp className="text-3xl md:text-5xl ml-6 hover:text-white" />
					</a>
					<a href="https://wa.me/+15162339506" target="_blank">
						<FaWhatsapp className="text-3xl md:text-5xl ml-6 hover:text-white" />
					</a>
					<a href="https://www.instagram.com/rmrooferllc/" target="_blank">
						<FaInstagram className="text-3xl md:text-5xl ml-6 hover:text-white" />
					</a>
				</div>
			</div>

			{/* Section 3 */}
			<div className="form flex flex-wrap md:flex-nowrap justify-evenly md:mx-[5%] my-8 md:pl-12">
				<div
					className="box relative"
					style={{
						width: "30rem",
						height: "40rem",
						boxShadow: "rgba(0, 0, 0, 0.5) 5px 5px 2.6px",
					}}
				>
					<Image fill src="./contact-img/1-1.jpg" alt="test" />
				</div>
				<div className="box2 w-screen md:w-1/2">
					<h1 className="text-center text-primary text-3xl pt-8 md:pt-0 font-semibold">
						Send Us A Message
					</h1>
					{/* Form */}
					<div className="w-full h-[800px] md:h-[650px]">
						<iframe
							src="https://api.leadconnectorhq.com/widget/form/qdSOxp9NXk8Ozs8j8z9e"
							className="w-full h-[550px] mx-0"
							id="inline-qdSOxp9NXk8Ozs8j8z9e"
							data-layout="{&aposid&apos:&aposINLINE&apos}"
							data-trigger-type="alwaysShow"
							data-trigger-value=""
							data-activation-type="alwaysActivated"
							data-activation-value=""
							data-deactivation-type="neverDeactivate"
							data-deactivation-value=""
							data-form-name="LP Form"
							data-height="548"
							data-layout-iframe-id="inline-qdSOxp9NXk8Ozs8j8z9e"
							data-form-id="qdSOxp9NXk8Ozs8j8z9e"
							title="LP Form"
							loading="eager"
						/>
						<Script src="https://link.msgsndr.com/js/form_embed.js"></Script>
					</div>
				</div>
			</div>

			{/* Section 4 - Map */}
			<div className="map">
				<h1 className="text-center font-bold text-2xl text-balance md:text-5xl pb-10 text-primary">
					We Cover 25 Miles Around Hempstead, NY
				</h1>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d772735.4125394421!2d-73.60846191071508!3d40.83899534411069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c27d62e4f9ddb1%3A0x4011d350bc4eb5b0!2sR%26M%20Roofers%20LLC!5e0!3m2!1sen!2sin!4v1734872222400!5m2!1sen!2sin"
					width="100%"
					height="500px"
					style={{ border: 0 }}
				></iframe>
			</div>
		</section>
	);
};

export default Contact;
