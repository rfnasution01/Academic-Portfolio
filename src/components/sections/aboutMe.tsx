import { ABOUT_DATA } from "@/data/about";
import { EXPERIENCE_DATA } from "@/data/experience";
import { motion } from "framer-motion";

export function AboutMeSection() {
	const data = ABOUT_DATA;

	return (
		<section className="relative flex flex-col gap-24 py-24 overflow-hidden">
			{/* BACKGROUND GLOW */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.1 }}
				transition={{ duration: 1 }}
				className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] bg-primary blur-[120px] pointer-events-none"
			/>

			{/* ================= HEADER ================= */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
				className="flex flex-col gap-6 max-w-3xl"
			>
				<h2 className="text-primary text-[clamp(2rem,3vw,2.8rem)] font-bold drop-shadow-[0_0_12px_#99FF06]">
					{data.title}
				</h2>
			</motion.div>

			{/* ================= CONTENT ================= */}
			<div className="grid md:grid-cols-2 gap-16">
				{/* LEFT */}
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="flex flex-col gap-10"
				>
					<p className="text-gray-400 leading-relaxed">{data.description}</p>

					{/* EDUCATION CARD */}
					<motion.div
						whileHover={{ scale: 1.03 }}
						className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-primary hover:shadow-[0_0_40px_rgba(153,255,6,0.15)]"
					>
						<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(153,255,6,0.15),transparent_70%)]"></div>

						<div className="relative flex items-start gap-4">
							<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(153,255,6,0.4)] transition">
								<data.education.icon className="text-lg text-gray-300 group-hover:text-primary transition" />
							</div>

							<div className="flex flex-col gap-1">
								<p className="font-semibold text-white">
									{data.education.degree}
								</p>
								<p className="text-sm text-gray-400">
									{data.education.institution}
								</p>
								<p className="text-xs text-gray-500">{data.education.period}</p>
								<p className="text-xs text-gray-500">
									GPA: {data.education.gpa}
								</p>
							</div>
						</div>
					</motion.div>
				</motion.div>

				{/* RIGHT - TIMELINE */}
				<div className="relative flex flex-col gap-10">
					{/* LINE */}
					<div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-white/10 to-transparent"></div>

					{EXPERIENCE_DATA.map((exp, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, x: 40 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: i * 0.1 }}
							className="group relative flex items-start gap-6"
						>
							{/* DOT */}
							<motion.div
								whileHover={{ scale: 1.2 }}
								className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black border border-white/10 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(153,255,6,0.5)] transition"
							>
								<exp.icon className="text-gray-300 group-hover:text-primary transition" />
							</motion.div>

							{/* CARD */}
							<motion.div
								whileHover={{ scale: 1.02 }}
								className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(153,255,6,0.15)]"
							>
								<p className="font-semibold text-white">{exp.company}</p>

								<p className="text-sm text-gray-400">{exp.role}</p>

								<p className="text-xs text-gray-500 mt-1">{exp.period}</p>
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
