import type { IconType } from "react-icons";
import {
	FaTruckMoving,
	FaMountain,
	FaDraftingCompass,
	FaMapMarkedAlt,
	FaTools,
	FaExclamationTriangle,
} from "react-icons/fa";

export type PortfolioAppItem = {
	title: string;
	url: string;
	description?: string;
	icon: IconType;
};

export const PORTFOLIO_APP_LIST: PortfolioAppItem[] = [
	{
		title: "Open-Pit Mine Plan - Site Alpha",
		url: "#",
		description: "Strategic long-term mine planning and sequence optimization.",
		icon: FaMountain,
	},
	{
		title: "Fleet Management System - Hauling",
		url: "#",
		description:
			"Real-time tracking and dispatching of heavy equipment fleets.",
		icon: FaTruckMoving,
	},
	{
		title: "Geological Modeling - Block Model",
		url: "#",
		description: "Detailed estimation of ore grades and mineral resources.",
		icon: FaDraftingCompass,
	},
	{
		title: "Survey & Land Mapping - Site Beta",
		url: "#",
		description: "Topographic data processing and volume calculation.",
		icon: FaMapMarkedAlt,
	},
	{
		title: "HSE Monitoring - Safety Protocol",
		url: "#",
		description: "Digital safety management and incident prevention system.",
		icon: FaExclamationTriangle,
	},
	{
		title: "Equipment Maintenance Scheduler",
		url: "#",
		description:
			"Preventive maintenance planning for excavators and dump trucks.",
		icon: FaTools,
	},
];
