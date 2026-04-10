import {
	FaEnvelope,
	FaLinkedin,
	FaGithub,
	FaWhatsapp,
	FaInstagram,
	FaTwitter,
	FaFacebook,
	FaGlobe,
	FaPhone,
} from "react-icons/fa6";

export const contactIcons = {
	email: FaEnvelope,
	linkedin: FaLinkedin,
	github: FaGithub,
	whatsapp: FaWhatsapp,
	instagram: FaInstagram,
	twitter: FaTwitter,
	facebook: FaFacebook,
	website: FaGlobe,
	phone: FaPhone,
} as const;

export type ContactIconKey = keyof typeof contactIcons;
