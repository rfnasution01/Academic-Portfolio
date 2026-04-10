import { FaCogs, FaProjectDiagram } from "react-icons/fa";
import {
	/* ================= CORE / UNIVERSAL ================= */
	FaBriefcase,
	FaUserTie,
	FaUsers,
	FaLightbulb,
	FaRocket,

	/* ================= EXECUTION / OPERATIONS ================= */
	FaCode,
	FaLaptopCode,
	FaServer,
	FaDatabase,
	FaCloud,

	/* ================= PRODUCT / INSIGHT ================= */
	FaGaugeHigh,
	FaChartLine,
	FaLayerGroup,

	/* ================= BUSINESS / FINANCE ================= */
	FaCreditCard,
	FaWallet,
	FaMoneyBillWave,
	FaReceipt,

	/* ================= PLATFORM / CHANNEL ================= */
	FaGlobe,
	FaMobileScreenButton,
	FaDesktop,

	/* ================= SECURITY / RELIABILITY ================= */
	FaShieldHalved,
	FaLock,

	/* ================= ADVANCED / SYSTEM ================= */
	FaLink,
	FaCube,
	FaNetworkWired,

	/* ================= CREATIVE ================= */
	FaPenNib,
	FaPalette,
	FaBezierCurve,
} from "react-icons/fa6";

export const experienceIcons = {
	/* ================= CORE ================= */
	work: FaBriefcase,
	professional: FaUserTie,
	team: FaUsers,
	idea: FaLightbulb,
	launch: FaRocket,
	system: FaCogs,
	workflow: FaProjectDiagram,

	/* ================= EXECUTION ================= */
	implementation: FaCode,
	interface: FaLaptopCode,
	operations: FaServer,
	records: FaDatabase,
	infrastructure: FaCloud,

	/* ================= INSIGHT ================= */
	dashboard: FaGaugeHigh,
	analytics: FaChartLine,
	structure: FaLayerGroup,

	/* ================= BUSINESS ================= */
	payment: FaCreditCard,
	wallet: FaWallet,
	finance: FaMoneyBillWave,
	billing: FaReceipt,

	/* ================= PLATFORM ================= */
	web: FaGlobe,
	mobile: FaMobileScreenButton,
	desktop: FaDesktop,

	/* ================= SECURITY ================= */
	security: FaShieldHalved,
	lock: FaLock,

	/* ================= ADVANCED ================= */
	ledger: FaLink,
	automation: FaCube,
	connectivity: FaNetworkWired,

	/* ================= CREATIVE ================= */
	design: FaPenNib,
	uiux: FaPalette,
	motion: FaBezierCurve,
} as const;

export type ExperienceIconKey = keyof typeof experienceIcons;
