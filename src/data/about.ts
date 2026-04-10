export type AboutData = {
	title: string;
	description: string;
	highlights: {
		title: string;
		description: string;
	}[];
};

export const ABOUT_DATA: AboutData = {
	title: "About Me",

	description:
		"I am a recent graduate with a strong focus on applying machine learning techniques in healthcare. My academic journey has been driven by curiosity in data-driven problem solving, particularly in medical diagnostics and predictive modeling.",

	highlights: [
		{
			title: "Research Focus",
			description:
				"Machine learning applications in healthcare, medical imaging, and data-driven diagnostics.",
		},
		{
			title: "Academic Background",
			description:
				"Bachelor’s degree in Biomedical Engineering with strong foundation in statistics and data analysis.",
		},
		{
			title: "Career Goal",
			description:
				"Seeking opportunities in research and graduate studies to contribute to impactful healthcare solutions.",
		},
	],
};
