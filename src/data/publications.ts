export type Publication = {
	title: string;
	authors: string;
	journal: string;
	year: string;
	link?: string;
	type: "Journal" | "Conference" | "Workshop";
};

export const PUBLICATIONS_DATA: Publication[] = [
	{
		title: "Deep Learning for Early Detection of Lung Cancer",
		authors: "John Doe, Jane Smith",
		journal: "Nature Medicine",
		year: "2024",
		link: "#",
		type: "Journal",
	},
	{
		title: "AI-Based Medical Imaging Analysis Using CNN",
		type: "Workshop",
		authors: "John Doe, Michael Lee",
		journal: "IEEE Transactions on Medical Imaging",
		year: "2023",
		link: "#",
	},
];
