// blog.ts
import type { IconType } from "react-icons";
import { FaBookOpen } from "react-icons/fa"; // Mengganti FaBlog dengan FaBookOpen agar terkesan seperti jurnal teknis/publikasi tambang

export type PortfolioBlogItem = {
	title: string;
	url: string;
	publishedAt: string;
	icon: IconType;
};

export const PORTFOLIO_BLOG_LIST: PortfolioBlogItem[] = [
	{
		title: "Optimizing Open-Pit Slope Stability in Tropical Climates",
		url: "#",
		publishedAt: "2026-01-12",
		icon: FaBookOpen,
	},
	{
		title: "Advanced Fleet Dispatching: Reducing Fuel Consumption by 15%",
		url: "#",
		publishedAt: "2025-11-05",
		icon: FaBookOpen,
	},
	{
		title: "Implementation of ESG Standards in Modern Mining Operations",
		url: "#",
		publishedAt: "2025-09-20",
		icon: FaBookOpen,
	},
];
