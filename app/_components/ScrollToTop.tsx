"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		const scrollTop =
			document.documentElement.scrollTop || document.body.scrollTop;
		if (scrollTop > 100) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};
	// Scroll to the top of the page
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // smooth scrolling
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	if (isVisible) {
		return (
			<button
				onClick={scrollToTop}
				className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 w-12 h-12 rounded-full shadow-lg text-center hover:bg-blue-600 transition-all"
				aria-label="Scroll to Top"
			>
				↑
			</button>
		);
	}
    else {
        return
    }
}
