import type { ContactIconKey } from "@/components/icons/contactIcons";
import type { ExperienceIconKey } from "@/components/icons/experienceIcons";
import type { CapabilityIconKey } from "@/components/icons/skillIcons";

export interface SectionBase {
	title: string;
	description?: string;
}

/* ---------- HERO / PROFILE ---------- */
export interface Profile {
	name: string;
	roles: string[];
	headline: string;
	subHeadline: string;
	description: string;
	image: string;
}

/* ---------- ABOUT ---------- */
export interface AboutMe extends SectionBase {
	headline: {
		primary: string;
		secondary: string;
	};
	introduction: {
		name: string;
		text: string;
	};
	mission: string;
	experiences: {
		title: string;
		description: string;
		icon: ExperienceIconKey;
	}[];
}

/* ---------- SKILLS ---------- */
interface CapabilityItem {
	name: string;
	icon: CapabilityIconKey;
}

interface CapabilityGroup {
	title: string;
	items: CapabilityItem[];
}

export interface SkillsData extends SectionBase {
	groups: CapabilityGroup[];
}

/* ---------- PROJECTS ---------- */
interface ProjectTechnology {
	name: string;
	icon: CapabilityIconKey;
}

interface ProjectItem {
	title: string;
	category: string;
	description: string;
	technologies: ProjectTechnology[];
}

export interface ProjectsData extends SectionBase {
	items: ProjectItem[];
}

/* ---------- REASONS ---------- */
export interface ReasonsData extends SectionBase {
	items: string[];
}

/* ---------- PROCESS ---------- */
interface ProcessStep {
	title: string;
	description: string;
}

export interface ProcessData extends SectionBase {
	items: ProcessStep[];
}

/* ---------- CONTACT ---------- */
export interface ContactLink {
	label: string;
	value: string;
	icon: ContactIconKey;
	link?: string;
}

export interface Contact extends SectionBase {
	items: ContactLink[];
}
