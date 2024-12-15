"use client";

import Script from "next/script";

export default function Experience() {
	return (
		<section className="mt-24 px-4 md:px-16">
			<div className="flex flex-col md:flex-row justify-center gap-14">
				{/* Left Column */}
				<div className="main-menu-text flex flex-col max-w-full md:max-w-[40%] mt-36">
					<h2 className="text-3xl md:text-5xl font-bold text-[#006800] mb-4">
						We have 14 Years of Experience
					</h2>
					<p className="text-lg md:text-xl mb-4">
						Welcome to R&M Roofers LLC&lsquo your trusted partner for top-quality
						roofing solutions in Hempstead&lsquo NY&lsquo and nearby areas. With 14 years
						of solid experience in the roofing industry&lsquo we&aposve built a
						reputation for exceptional craftsmanship&lsquo reliability&lsquo and
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
	return (
		<div className="sm:w-1/2">
			<iframe
				src="https://api.leadconnectorhq.com/widget/form/qdSOxp9NXk8Ozs8j8z9e"
				className="w-full h-100"
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
			></iframe>
			<Script src="https://link.msgsndr.com/js/form_embed.js"></Script>
		</div>
	);
}
