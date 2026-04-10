import { FaChalkboardTeacher, FaCogs } from "react-icons/fa";
import {
	/* ================= DIGITAL ================= */
	FaGlobe,
	FaMobileScreenButton,
	FaDesktop,

	/* ================= MANAGEMENT ================= */
	FaGaugeHigh,
	FaChartLine,
	FaUsers,
	FaClipboardList,

	/* ================= BUSINESS ================= */
	FaBullhorn,
	FaCreditCard,
	FaWallet,
	FaLightbulb,
	FaHandshake,

	/* ================= SYSTEM ================= */
	FaRobot,
	FaLink,
	FaShieldHalved,

	/* ================= CREATIVE ================= */
	FaPaintbrush,
	FaPenNib,
	FaCamera,

	/* ================= FIELD / SERVICE ================= */
	FaTruck,
	FaSeedling,
	FaStethoscope,
} from "react-icons/fa6";

export const capabilityIcons = {
	/* ================= DIGITAL PRESENCE ================= */
	website: FaGlobe,
	mobile: FaMobileScreenButton,
	desktop: FaDesktop,

	/* ================= OPERATIONS ================= */
	dashboard: FaGaugeHigh,
	analytics: FaChartLine,
	records: FaClipboardList,
	collaboration: FaUsers,

	/* ================= BUSINESS ================= */
	marketing: FaBullhorn,
	payment: FaCreditCard,
	finance: FaWallet,
	strategy: FaLightbulb,
	partnership: FaHandshake,

	/* ================= SYSTEM ================= */
	system: FaCogs,
	automation: FaRobot,
	integration: FaLink,
	security: FaShieldHalved,

	/* ================= CREATIVE ================= */
	branding: FaPaintbrush,
	design: FaPenNib,
	content: FaCamera,

	/* ================= PROFESSION SPECIFIC ================= */
	education: FaChalkboardTeacher,
	healthcare: FaStethoscope,
	logistics: FaTruck,
	agriculture: FaSeedling,
} as const;

export type CapabilityIconKey = keyof typeof capabilityIcons;
