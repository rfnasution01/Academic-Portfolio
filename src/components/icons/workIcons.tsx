import { FaChalkboardTeacher, FaCogs, FaFileAlt } from "react-icons/fa";
import {
	FaUserDoctor,
	FaTractor,
	FaFish,
	FaChartLine,
	FaClipboardList,
	FaUsers,
	FaHandshake,
	FaLightbulb,
	FaCalendarCheck,
	FaWarehouse,
	FaMoneyBillWave,
	FaShield,
	FaGlobe,
} from "react-icons/fa6";

/**
 * Work / Capability icons
 * Designed for ALL professions (non-technical)
 */
export const workIcons = {
	/* Education */
	teaching: FaChalkboardTeacher,
	training: FaClipboardList,
	evaluation: FaFileAlt,

	/* Health */
	medical: FaUserDoctor,
	consultation: FaUsers,

	/* Agriculture & Marine */
	farming: FaTractor,
	fishing: FaFish,
	production: FaWarehouse,

	/* Business & Organization */
	management: FaCogs,
	planning: FaCalendarCheck,
	strategy: FaLightbulb,
	analytics: FaChartLine,
	payment: FaMoneyBillWave,
	security: FaShield,

	/* General */
	collaboration: FaHandshake,
	global: FaGlobe,
} as const;

export type WorkIconKey = keyof typeof workIcons;
