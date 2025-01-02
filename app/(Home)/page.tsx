import Experience from "@/app/_components/Experience";
import Experience2 from "@/app/_components/Experience2";
import FindUs from "@/app/_components/Findus";
import Hero from "@/app/_components/Hero";
import Showcase from "@/app/_components/Showcase";
import Wrapper0 from "@/app/_components/Wrapper0";
import { About2 } from "@/app/about/page";
import { dataProp } from "@/app/services/page";
import Popup from "../_components/Popup";

export default function Home() {
	const ShowcaseCardData: dataProp[] = [
		{
			title: "Shingle Roofing",
			img: ["./services-img/1-1.jpg", "./services-img/1-2.jpg"],
			ref: null,
			description_1:
				"Shingle roofing is a popular and versatile choice known for its affordability and aesthetic appeal. At R&M Roofers LLC, we specialize in shingle roofing installations that combine style and functionality. With 14 years of experience in Hempstead, NY, we understand the intricacies of shingle roofing, from material selection to precise installation techniques. Our expert team ensures that each shingle is expertly placed, creating a roof that not only enhances the curb appeal of your property but also provides reliable protection against the elements.",
			description_2:
				"When you choose shingle roofing from R&M Roofers LLC, you're selecting a roofing material that offers a wide range of colors and styles to suit your preferences and architectural design. Our skilled roofers take pride in precise installation, ensuring that each shingle is securely placed for optimal performance. We prioritize quality craftsmanship and attention to detail, delivering shingle roofing solutions that are not only visually appealing but also durable and long-lasting. With our shingle roofing expertise, you can trust that your roof will stand up to the challenges of weather and time.",
		},
		{
			title: "Flat Roofing",
			img: ["./services-img/2-1.jpg", "./services-img/2-2.jpg"],
			ref: null,
			description_1:
				"Flat roofing offers unique advantages for both commercial and residential properties, and R&M Roofers LLC specializes in flat roof installations that provide both functionality and style. With 14 years of experience in Hempstead, NY, we have the expertise to design and install flat roofing systems that meet your specific requirements. Whether it's for a commercial building or a modern residential structure, our flat roofs offer reliable protection while allowing for additional outdoor space or creative design possibilities.",
			description_2:
				"When you choose shingle roofing from R&M Roofers LLC, you're selecting a roofing material that offers a wide range of colors and styles to suit your preferences and architectural design. Our skilled roofers take pride in precise installation, ensuring that each shingle is securely placed for optimal performance. We prioritize quality craftsmanship and attention to detail, delivering shingle roofing solutions that are not only visually appealing but also durable and long-lasting. With our shingle roofing expertise, you can trust that your roof will stand up to the challenges of weather and time.",
		},
		{
			title: "Metal Roofing",
			img: ["./services-img/3-1.jpg", "./services-img/3-2.jpg"],
			ref: null,
			description_1:
				"Metal roofing is a durable and energy-efficient choice that provides exceptional protection for your property. R&M Roofers LLC specializes in metal roofing installations that combine strength and style. With 14 years of experience in Hempstead, NY, we are experts in working with various metal roofing materials, including steel, aluminum, and copper. Our metal roofing services are designed to meet your specific needs while enhancing the aesthetics of your property.",
			description_2:
				"When you choose metal roofing from R&M Roofers LLC, you're opting for a roofing material known for its longevity and energy efficiency. Our skilled team ensures that your metal roof is installed with precision, providing reliable protection against weather and environmental challenges. We offer a variety of metal roofing styles and finishes, allowing you to select the one that complements your architectural design. Our commitment to quality and craftsmanship ensures that your metal roof not only performs exceptionally but also adds a modern and sleek appearance to your property.",
		},
	];

	return (
		<>
			<Hero />
			<Experience />
			<FindUs />
			<Wrapper0 />
			<Experience2 />
			<About2 />

			<h2 className="text-4xl text-center font-bold pt-20 md:pt-0">
				Our <span className="text-yellow-300">Service</span>
			</h2>
			<Showcase service_data={ShowcaseCardData} />

			<h1 className="text-3xl font-bold w-screen text-center py-10">
				Locate <span className="text-yellow-400">Us</span>
			</h1>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d772735.4125394421!2d-73.60846191071508!3d40.83899534411069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c27d62e4f9ddb1%3A0x4011d350bc4eb5b0!2sR%26M%20Roofers%20LLC!5e0!3m2!1sen!2sin!4v1734872222400!5m2!1sen!2sin"
				width="100%"
				height="500px"
				frameBorder="0"
				style={{ border: 0 }}
				allowFullScreen
			></iframe>
			<Popup />
		</>
	);
}
