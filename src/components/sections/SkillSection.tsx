import { SKILL_CATEGORIES, SKILLS_SECTION } from "@/data/skill";
import { motion } from "framer-motion";

export function SkillSection() {
	const data = SKILLS_SECTION;

	return (
		<section
			id="skills"
			className="relative flex w-full flex-col gap-20 py-24 overflow-hidden"
		>
			{/* GLOW BACKGROUND */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.1 }}
				transition={{ duration: 1 }}
				className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary blur-[120px] pointer-events-none"
			/>

			{/* ================= HEADER ================= */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
				className="flex flex-col gap-6 max-w-3xl"
			>
				<p className="font-bold text-primary text-[clamp(2rem,3vw,2.8rem)] drop-shadow-[0_0_10px_#99FF06]">
					{data.title}
				</p>

				<p className="text-gray-400 leading-relaxed">{data.description}</p>
			</motion.div>

			{/* ================= STATS ================= */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{data.stats.map((item, idx) => (
					<motion.div
						key={idx}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: idx * 0.15 }}
						whileHover={{ scale: 1.05 }}
						className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl transition hover:border-primary hover:shadow-[0_0_30px_rgba(153,255,6,0.2)]"
					>
						<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_center,rgba(153,255,6,0.15),transparent_70%)]"></div>

						<motion.p
							initial={{ scale: 0.8 }}
							whileInView={{ scale: 1 }}
							transition={{ duration: 0.4, delay: idx * 0.2 }}
							className="relative text-[2rem] font-bold text-primary"
						>
							{item.value}
						</motion.p>

						<p className="relative text-sm text-gray-400 mt-1">{item.label}</p>
					</motion.div>
				))}
			</div>

			{/* ================= SKILL CARDS ================= */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{SKILL_CATEGORIES.map((category, idx) => (
					<motion.div
						key={idx}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: idx * 0.15 }}
						whileHover={{ y: -6 }}
						className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl transition hover:border-primary hover:shadow-[0_0_40px_rgba(153,255,6,0.15)]"
					>
						<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(153,255,6,0.15),transparent_70%)]"></div>

						<p className="relative text-white font-semibold mb-6">
							{category.title}
						</p>

						<div className="grid grid-cols-2 gap-6">
							{category.items.map((skill, id) => {
								const Icon = skill.icon;

								return (
									<motion.div
										key={id}
										whileHover={{ scale: 1.1, y: -2 }}
										className="flex flex-col items-center gap-2 text-center group/item"
									>
										<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 border border-white/10 transition group-hover/item:border-primary group-hover/item:shadow-[0_0_15px_rgba(153,255,6,0.4)]">
											<Icon className="text-xl text-gray-300 group-hover/item:text-primary transition" />
										</div>

										<p className="text-xs text-gray-400 group-hover/item:text-white transition">
											{skill.name}
										</p>
									</motion.div>
								);
							})}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
