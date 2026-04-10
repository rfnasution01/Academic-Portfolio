import type { JSX } from "react";
import { FaHome } from "react-icons/fa";
import { FaBriefcase, FaPhone, FaUser } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";

export type MenuType = {
	nama: string;
	url: string;
	icon: JSX.Element;
};

export const Menu: MenuType[] = [
	{
		nama: "Home",
		url: "#home",
		icon: <FaHome size={20} />,
	},
	{
		nama: "About Me",
		url: "#about-me",
		icon: <FaUser size={20} />,
	},
	{
		nama: "Skills",
		url: "#skills",
		icon: <FiFileText size={20} />,
	},
	{
		nama: "Portfolio",
		url: "#portfolio",
		icon: <FaBriefcase size={20} />,
	},

	{
		nama: "Contact",
		url: "#contact",
		icon: <FaPhone size={20} />,
	},
];
