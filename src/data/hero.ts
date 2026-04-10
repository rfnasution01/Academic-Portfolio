import ImgProfil from "@/assets/img/profiles.jpg";

export type HeroData = {
	name: string;
	role: string;
	// Tambahkan ini agar tidak error
	currentInstitution?: string;
	tagline: string;
	description: string;
	stats: {
		label: string;
		value: string;
	}[];
	primaryCta: {
		label: string;
		link: string;
	};
	secondaryCta: {
		label: string;
		link: string;
	};
	image: string;
};

export const HERO_DATA: HeroData = {
	name: "Dr. John Doe",
	role: "Biomedical Researcher",
	// Sekarang kamu bisa mengisi ini
	currentInstitution: "Stanford University School of Medicine",
	tagline: "AI for Healthcare & Medical Data Analysis",

	description:
		"Recent graduate specializing in machine learning applications in healthcare, with a focus on building data-driven solutions for medical diagnostics.",

	stats: [
		{ label: "Publications", value: "5+" },
		{ label: "Conferences", value: "3" },
		{ label: "GPA", value: "3.85" },
	],

	primaryCta: {
		label: "Download CV",
		link: "/cv.pdf",
	},

	secondaryCta: {
		label: "View Research",
		link: "#publications",
	},

	image: ImgProfil,
};
