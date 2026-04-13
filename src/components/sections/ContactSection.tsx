import { CONTACT_DATA } from "@/data/contact";
import { motion, type Variants } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const container: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.15 },
	},
};

const item: Variants = {
	hidden: { opacity: 0, y: 15 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
	},
};

export const ContactSection = () => {
	return (
		<section
			id="contact"
			className="relative py-32 border-t border-[var(--border)] bg-[var(--background)]"
		>
			<div className="container-custom">
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid lg:grid-cols-12 gap-16"
				>
					{/* LEFT - Main CTA */}
					<div className="lg:col-span-7">
						<motion.span
							variants={item}
							className="text-[var(--accent)] font-bold text-xs tracking-[0.3em] uppercase mb-4 block"
						>
							Collaboration
						</motion.span>
						<motion.h2
							variants={item}
							className="display text-4xl md:text-5xl lg:text-6xl mb-8"
						>
							{CONTACT_DATA.title}
						</motion.h2>
						<motion.p
							variants={item}
							className="text-xl text-[var(--muted)] leading-relaxed max-w-xl"
						>
							{CONTACT_DATA.description}
						</motion.p>

						<motion.div variants={item} className="mt-12">
							<a
								href={`mailto:${CONTACT_DATA.email}`}
								className="group inline-flex items-center gap-4 text-2xl md:text-3xl font-serif text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
							>
								<span className="border-b-2 border-[var(--border)] group-hover:border-[var(--primary)] pb-1 transition-all">
									{CONTACT_DATA.email}
								</span>
								<div className="p-3 rounded-full border border-[var(--border)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all">
									<FiMail size={24} />
								</div>
							</a>
						</motion.div>
					</div>

					{/* RIGHT - Academic Profiles */}
					<div className="lg:col-span-5 flex flex-col justify-between">
						<div className="space-y-4">
							<motion.p
								variants={item}
								className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted)] mb-6"
							>
								Research Networks
							</motion.p>
							<div className="grid grid-cols-1 gap-3">
								{CONTACT_DATA.socials.map((social, i) => (
									<motion.a
										key={i}
										variants={item}
										href={social.link}
										className="flex items-center justify-between p-4 border border-[var(--border)] rounded-lg hover:border-[var(--primary)] hover:bg-[var(--secondary)]/50 transition-all group"
									>
										<span className="font-medium text-[var(--foreground)]">
											{social.label}
										</span>
										<FaArrowRight
											size={16}
											className="text-[var(--muted)] group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all"
										/>
									</motion.a>
								))}
							</div>
						</div>

						{/* Footer Note */}
						<motion.div
							variants={item}
							className="mt-16 pt-8 border-t border-[var(--border)]"
						>
							<p className="text-xs text-[var(--muted)] flex items-center justify-between">
								<span>© {new Date().getFullYear()} — Built for Scholars</span>
								<span className="italic opacity-60">
									Located in {CONTACT_DATA.location || "Global"}
								</span>
							</p>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
