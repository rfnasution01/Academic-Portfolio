import { PROJECTS_DATA } from "@/data/projects";
import { motion, type Variants } from "framer-motion";
import { GoArrowUpRight, GoBeaker } from "react-icons/go";

const container: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.2 },
	},
};

const item: Variants = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
	},
};

export const ProjectsSection = () => {
	return (
		<section
			id="projects"
			className="relative py-24 bg-[var(--secondary)]/30 border-t border-[var(--border)]"
		>
			<div className="container-custom">
				{/* Header */}
				<div className="grid lg:grid-cols-12 gap-12 mb-20">
					<div className="lg:col-span-4">
						<span className="text-[var(--accent)] font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
							Case Studies
						</span>
						<h2 className="section-title">Research Projects</h2>
					</div>
					<div className="lg:col-span-8 flex items-end">
						<p className="text-[var(--muted)] max-w-lg leading-relaxed">
							Detailed overview of technical implementations, focusing on
							methodology and quantifiable research outcomes.
						</p>
					</div>
				</div>

				{/* Projects List */}
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
					className="space-y-24"
				>
					{PROJECTS_DATA.map((project, i) => (
						<motion.div
							key={i}
							variants={item}
							className="group grid lg:grid-cols-12 gap-8 lg:gap-16"
						>
							{/* LEFT SIDE - YEAR & ICON */}
							<div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start gap-4">
								<div className="w-12 h-12 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500">
									<GoBeaker size={20} />
								</div>
								<div>
									<p className="text-sm font-bold tracking-tighter text-[var(--foreground)]">
										{project.year}
									</p>
									<p className="text-[10px] uppercase tracking-widest text-[var(--muted)]">
										Project Period
									</p>
								</div>
							</div>

							{/* RIGHT SIDE - CONTENT */}
							<div className="lg:col-span-9">
								<div className="flex justify-between items-start gap-4">
									<h3 className="font-serif text-2xl md:text-3xl text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-300">
										{project.title}
									</h3>
									{project.link && (
										<a
											href={project.link}
											className="p-2 text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
										>
											<GoArrowUpRight size={24} />
										</a>
									)}
								</div>

								<p className="mt-6 text-lg text-[var(--muted)] leading-relaxed max-w-3xl">
									{project.description}
								</p>

								{/* Technical Stack / Methods */}
								<div className="mt-8 flex flex-wrap gap-3">
									{project.methods.map((method, idx) => (
										<span
											key={idx}
											className="text-[10px] font-bold px-3 py-1 bg-white border border-[var(--border)] text-[var(--muted)] uppercase tracking-wider rounded-full"
										>
											{method}
										</span>
									))}
								</div>

								{/* Quantifiable Result Box */}
								<div className="mt-10 p-6 bg-white border-l-4 border-[var(--primary)] shadow-sm">
									<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--primary)] block mb-2">
										Key Outcome
									</span>
									<p className="text-[var(--foreground)] font-medium leading-relaxed">
										{project.result}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};
