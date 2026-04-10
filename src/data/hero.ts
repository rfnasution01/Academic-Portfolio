import ProfileImage from "@/assets/img/profiles.jpg";

export type HeroData = {
	headlines: string[];
	title: string;
	description: string;
	image: string;
	phone: string;
};

export const HERO_DATA: HeroData = {
	headlines: [
		"Budi Santoso, S.T.",
		"Mining Engineer",
		"Mine Planner",
		"Operations Supervisor",
	],
	title: "Driving Safe, Efficient, and Sustainable Mining Operations.",
	description: `I specialize in optimizing open-pit layouts, managing fleet 
productivity, and ensuring rigorous safety standards to maximize mineral recovery.`,
	image: ProfileImage,
	phone: "6281234567890",
};
