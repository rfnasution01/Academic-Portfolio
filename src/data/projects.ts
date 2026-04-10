export type Project = {
	title: string;
	description: string;
	methods: string[];
	result: string;
	year: string;
	link?: string;
};

export const PROJECTS_DATA: Project[] = [
	{
		title: "AI-Based Tumor Classification",
		description:
			"Developed a deep learning model to classify tumor images using convolutional neural networks.",
		methods: ["CNN", "TensorFlow", "Medical Imaging"],
		result: "Achieved 92% classification accuracy on validation dataset.",
		year: "2024",
		link: "#",
	},
	{
		title: "Predictive Modeling for Patient Readmission",
		description:
			"Built a machine learning model to predict hospital readmission risk based on patient records.",
		methods: ["Logistic Regression", "Python", "Data Analysis"],
		result: "Improved prediction accuracy by 18% compared to baseline model.",
		year: "2023",
		link: "#",
	},
];
