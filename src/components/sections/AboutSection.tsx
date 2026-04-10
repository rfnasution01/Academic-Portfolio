import { ABOUT_DATA } from "@/data/about";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.2, delayChildren: 0.1 },
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

export const AboutSection = () => {
	return (
		<section
			id="about"
			className="relative py-24 border-t border-[var(--border)] bg-[var(--background)]"
		>
			<div className="container-custom">
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
					className="grid lg:grid-cols-12 gap-12 lg:gap-24"
				>
					{/* LEFT - Title Area (4 Cols) */}
					<div className="lg:col-span-4">
						<motion.span
							variants={item}
							className="text-[var(--accent)] font-bold text-xs tracking-[0.3em] uppercase mb-4 block"
						>
							Biography
						</motion.span>
						<motion.h2 variants={item} className="section-title">
							{ABOUT_DATA.title}
						</motion.h2>
					</div>

					{/* RIGHT - Content Area (8 Cols) */}
					<div className="lg:col-span-8">
						<motion.div variants={item}>
							<p className="text-xl md:text-2xl leading-relaxed font-serif text-[var(--foreground)] italic opacity-90 mb-16">
								"{ABOUT_DATA.description}"
							</p>
						</motion.div>

						{/* HIGHLIGHTS - Editorial List Style */}
						<div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
							{ABOUT_DATA.highlights.map((highlight, i) => (
								<motion.div
									key={i}
									variants={item}
									className="group relative pt-6 border-t border-[var(--border)] transition-colors duration-500 hover:border-[var(--primary)]"
								>
									{/* Subtle Index Numbering */}
									<span className="text-[10px] font-bold text-[var(--muted)] mb-4 block opacity-40 group-hover:text-[var(--primary)] group-hover:opacity-100 transition-all">
										0{i + 1} —
									</span>

									<h3 className="font-semibold text-lg text-[var(--foreground)] mb-3">
										{highlight.title}
									</h3>

									<p className="text-sm leading-relaxed text-[var(--muted)]">
										{highlight.description}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
