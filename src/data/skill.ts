// src/data/skills.ts

import type { IconType } from "react-icons";
import {
	FaCompass,
	FaDrawPolygon,
	FaTruckLoading,
	FaShieldAlt,
	FaGlobeAmericas,
	FaFileAlt,
	FaMountain,
} from "react-icons/fa";
import { SiAutodesk, SiArcgis, SiSap } from "react-icons/si";

export type SkillsSectionData = {
	title: string;
	description: string;
	stats: {
		label: string;
		value: string;
	}[];
};

export type SkillCategory = {
	title: string;
	items: {
		name: string;
		icon: IconType;
	}[];
};

export const SKILLS_SECTION: SkillsSectionData = {
	title: "Technical Skills",
	description: `My skills demonstrate a comprehensive understanding of mining engineering 
software and field operational standards, ensuring safe, efficient, 
and high-yield mineral extraction.`,
	stats: [
		{
			label: "Years Experience",
			value: "5+",
		},
		{
			label: "Project Sites",
			value: "12+",
		},
		{
			label: "Safety Hours",
			value: "10k+",
		},
	],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
	{
		title: "Mining Software & Planning",
		items: [
			{ name: "Surpac (Geovia)", icon: FaDrawPolygon },
			{ name: "Minescape", icon: FaMountain },
			{ name: "AutoCAD", icon: SiAutodesk },
			{ name: "ArcGIS", icon: SiArcgis },
		],
	},
	{
		title: "Operational Management",
		items: [
			{ name: "Fleet Management", icon: FaTruckLoading },
			{ name: "Pit Supervision", icon: FaShieldAlt },
			{ name: "Cost Control (SAP)", icon: SiSap },
			{ name: "Geological Survey", icon: FaCompass },
		],
	},
	{
		title: "Reporting & Compliance",
		items: [
			{ name: "K3 Pertambangan", icon: FaShieldAlt },
			{ name: "Environmental Reporting", icon: FaGlobeAmericas },
			{ name: "Feasibility Studies", icon: FaFileAlt },
		],
	},
];
