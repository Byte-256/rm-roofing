"use client";
import Script from "next/script";
import { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";

export default function Popup() {
	const [showPopup, setShowPopup] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setShowPopup(true), 4000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex items-center justify-center  ${showPopup ? "" : "invisible"}`}>
			<div className="relative bg-transparent rounded-lg shadow-lg w-11/12 max-w-lg">
				<button
					onClick={() => setShowPopup(false)}
					className="absolute top-10 lg:top-2 lg:right-2 right-0 text-gray-600 hover:text-gray-900"
				>
					<CgClose className="text-4xl text-red-600" />
				</button>

				<iframe
					src="https://api.leadconnectorhq.com/widget/form/qdSOxp9NXk8Ozs8j8z9e"
					className="w-full h-[550px] md:h-[650px] border-0"
					id="popup-qdSOxp9NXk8Ozs8j8z9e"
					data-layout="{'id':'INLINE'}"
					data-trigger-type="alwaysShow"
					data-trigger-value=""
					data-activation-type="alwaysActivated"
					data-activation-value=""
					data-deactivation-type="neverDeactivate"
					data-deactivation-value=""
					data-form-name="LP Form"
					data-layout-iframe-id="popup-qdSOxp9NXk8Ozs8j8z9e"
					data-form-id="qdSOxp9NXk8Ozs8j8z9e"
					title="LP Form"
					loading="lazy"
				></iframe>
				<Script src="https://link.msgsndr.com/js/form_embed.js"></Script>
			</div>
		</div>
	);
}
