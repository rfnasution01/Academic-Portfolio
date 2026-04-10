import { HERO_DATA } from "@/data/hero";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.1, delayChildren: 0.2 },
	},
};

const item: Variants = {
	hidden: { opacity: 0, y: 15 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: [0.16, 1, 0.3, 1],
		},
	},
};

export const HeroSection = () => {
	return (
		<section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden bg-[var(--background)]">
			<div className="container-custom">
				<div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
					{/* LEFT CONTENT (7 Columns) */}
					<motion.div
						variants={container}
						initial="hidden"
						animate="show"
						className="lg:col-span-7"
					>
						{/* Current Institution / Badge */}
						<motion.div
							variants={item}
							className="flex items-center gap-3 mb-6"
						>
							<span className="h-[1px] w-8 bg-[var(--primary)]" />
							<span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--muted)]">
								{HERO_DATA.currentInstitution || "Independent Researcher"}
							</span>
						</motion.div>

						<motion.h1
							variants={item}
							className="display text-[var(--foreground)]"
						>
							{HERO_DATA.name}
						</motion.h1>

						<motion.p
							variants={item}
							className="text-xl md:text-2xl font-serif italic text-[var(--primary)] mt-2"
						>
							{HERO_DATA.role}
						</motion.p>

						<motion.p
							variants={item}
							className="mt-8 text-lg leading-relaxed text-[var(--muted)] max-w-2xl font-sans"
						>
							{HERO_DATA.description}
						</motion.p>

						{/* Stats - Refined for Academic feel */}
						<motion.div
							variants={item}
							className="mt-12 py-8 border-y border-[var(--border)] flex flex-wrap gap-x-12 gap-y-6"
						>
							{HERO_DATA.stats.map((stat, i) => (
								<div key={i} className="flex flex-col">
									<span className="text-3xl font-serif font-medium text-[var(--foreground)]">
										{stat.value}
									</span>
									<span className="text-[10px] uppercase tracking-widest text-[var(--muted)] mt-1">
										{stat.label}
									</span>
								</div>
							))}
						</motion.div>

						{/* CTA */}
						<motion.div variants={item} className="mt-12 flex flex-wrap gap-5">
							<a
								href={HERO_DATA.primaryCta.link}
								className="btn-primary px-8 py-4 shadow-xl shadow-blue-900/10"
							>
								{HERO_DATA.primaryCta.label}
							</a>
							<a
								href={HERO_DATA.secondaryCta.link}
								className="btn-outline px-8 py-4 border-[var(--foreground)] text-[var(--foreground)]"
							>
								{HERO_DATA.secondaryCta.label}
							</a>
						</motion.div>
					</motion.div>

					{/* RIGHT IMAGE (5 Columns) */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
						className="lg:col-span-5 relative"
					>
						<div className="relative aspect-[4/5] z-10">
							{/* The "Frame" Effect */}
							<div className="absolute inset-0 border-[1px] border-[var(--border)] translate-x-4 translate-y-4 -z-10" />
							<div className="w-full h-full overflow-hidden grayscale-[0.3] hover:grayscale-0 transition-all duration-700">
								<img
									src={HERO_DATA.image}
									alt={HERO_DATA.name}
									className="w-full h-full object-cover"
								/>
							</div>
						</div>

						{/* Subtle Decorative Element */}
						<div className="absolute -bottom-6 -left-6 w-24 h-24 border-l border-b border-[var(--primary)] opacity-30" />
					</motion.div>
				</div>
			</div>
		</section>
	);
};
