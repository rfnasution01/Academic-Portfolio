import type { IconType } from "react-icons";
import { FaBuilding, FaLandmark, FaMountain, FaHardHat } from "react-icons/fa";

export type ExperienceData = {
	role: string;
	company: string;
	period: string;
	icon: IconType;
};

export const EXPERIENCE_DATA: ExperienceData[] = [
	{
		role: "Senior Mine Planner",
		company: "PT Bukit Asam Tbk",
		period: "Apr 2024 - Present",
		icon: FaMountain,
	},
	{
		role: "Mining Engineer",
		company: "PT Adaro Energy Indonesia",
		period: "Aug 2023 - Jun 2024",
		icon: FaBuilding,
	},
	{
		role: "Operations Supervisor",
		company: "PT Kaltim Prima Coal",
		period: "Apr 2023 - Jul 2023",
		icon: FaHardHat,
	},
	{
		role: "Surveyor Engineer",
		company: "PT United Tractors Tbk",
		period: "Dec 2022 - Mar 2023",
		icon: FaLandmark,
	},
	{
		role: "Junior Geologist",
		company: "PT Antam Tbk",
		period: "Oct 2022 - Dec 2022",
		icon: FaBuilding,
	},
];
