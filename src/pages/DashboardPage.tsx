import {
	AboutSection,
	ContactSection,
	HeroSection,
	ProjectsSection,
	PublicationsSection,
} from "@/components/sections";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
	return (
		<div className="flex flex-col w-full min-h-screen">
			<HeroSection />

			<AboutSection />

			<PublicationsSection />

			<ProjectsSection />

			<ContactSection />

			<ToastContainer position="bottom-right" autoClose={3000} theme="light" />
		</div>
	);
}
