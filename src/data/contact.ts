export type ContactData = {
	title: string;
	description: string;
	email: string;
	location: string;
	socials: {
		label: string;
		link: string;
	}[];
};

export const CONTACT_DATA: ContactData = {
	title: "Get In Touch",

	description:
		"I am open to research collaborations, graduate opportunities, and professional discussions. Feel free to reach out.",

	email: "johndoe@email.com",

	location: "Jakarta",

	socials: [
		{
			label: "LinkedIn",
			link: "#",
		},
		{
			label: "Google Scholar",
			link: "#",
		},
		{
			label: "GitHub",
			link: "#",
		},
	],
};
