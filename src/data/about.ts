import type { IconType } from "react-icons";
import { FaHardHat } from "react-icons/fa"; // Mengganti FaUniversity menjadi FaHardHat agar lebih relevan dengan tambang

export type AboutData = {
	title: string;
	description: string;
	education: {
		degree: string;
		institution: string;
		period: string;
		gpa: string;
		icon: IconType;
	};
};

export const ABOUT_DATA: AboutData = {
	title: "About Me",
	description: `Dedicated Mining Engineer with a passion for optimizing resource extraction and site safety. Experienced in open-pit planning and heavy equipment management, with a strong focus on operational efficiency, environmental compliance, and sustainable mining practices. Always implementing advanced geological modeling to maximize site productivity.`,
	education: {
		degree: "B.Eng. Mining Engineering",
		institution: "National School of Mines",
		period: "2018 - 2022",
		gpa: "3.75",
		icon: FaHardHat,
	},
};
