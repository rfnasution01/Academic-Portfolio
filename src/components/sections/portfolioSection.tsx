import { PORTFOLIO_BLOG_LIST } from "@/data/blog";
import { PORTFOLIO_APP_LIST } from "@/data/app";
import { motion } from "framer-motion";
import dayjs from "dayjs";

export function PortfolioSection() {
	return (
		<section className="relative flex flex-col gap-20 py-24 overflow-hidden">
			{/* BACKGROUND GLOW */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.08 }}
				transition={{ duration: 1 }}
				className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] bg-primary blur-[140px]"
			/>

			{/* ================= HEADER ================= */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
				className="flex flex-col gap-4"
			>
				<h2 className="text-primary text-[clamp(2rem,3vw,2.8rem)] font-bold drop-shadow-[0_0_12px_#99FF06]">
					Portfolio
				</h2>
				<p className="text-gray-400 max-w-xl">
					Showcasing selected works, experiments, and real-world projects.
				</p>
			</motion.div>

			{/* ================= CONTENT ================= */}
			<div className="grid md:grid-cols-2 gap-12">
				{/* ================= BLOG ================= */}
				<div className="flex flex-col gap-6">
					<p className="text-white font-semibold text-lg">Blog</p>

					<div className="flex flex-col gap-4">
						{PORTFOLIO_BLOG_LIST.map((item, i) => (
							<motion.a
								key={i}
								href={item.url}
								target="_blank"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								whileHover={{ scale: 1.02 }}
								className="group relative flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition hover:border-primary hover:shadow-[0_0_30px_rgba(153,255,6,0.15)]"
							>
								{/* glow */}
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_left,rgba(153,255,6,0.15),transparent_70%)]"></div>

								<p className="relative text-white font-medium leading-snug">
									{item.title}
								</p>

								<p className="relative text-xs text-gray-500">
									{dayjs(item.publishedAt).format("DD MMM YYYY")}
								</p>
							</motion.a>
						))}
					</div>
				</div>

				{/* ================= APPS ================= */}
				<div className="flex flex-col gap-6">
					<p className="text-white font-semibold text-lg">Apps</p>

					<div className="flex flex-col gap-4">
						{PORTFOLIO_APP_LIST.map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								whileHover={{ scale: 1.02 }}
								className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition hover:border-primary hover:shadow-[0_0_30px_rgba(153,255,6,0.15)]"
							>
								{/* glow */}
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_right,rgba(153,255,6,0.15),transparent_70%)]"></div>

								<p className="relative text-white font-medium">{item.title}</p>

								{item.description && (
									<p className="relative text-sm text-gray-400 mt-1">
										{item.description}
									</p>
								)}
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
