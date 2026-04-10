import { CONTACT_DATA } from "@/data/contact";
import { HERO_DATA } from "@/data/hero";
import { motion } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function ContactSection() {
	const data = CONTACT_DATA;

	return (
		<section className="relative flex flex-col gap-10 pt-16 pb-10 border-t border-white/10 overflow-hidden">
			{/* BACKGROUND GLOW */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.08 }}
				transition={{ duration: 1 }}
				className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[600px] bg-primary blur-[140px]"
			/>

			{/* ================= CTA ================= */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
				className="flex flex-col items-center text-center gap-4"
			>
				<h3 className="text-white text-xl md:text-2xl font-semibold">
					Let’s Build Something Great Together
				</h3>

				<p className="text-gray-400 max-w-md">
					Open for freelance, collaboration, or just a friendly chat.
				</p>
			</motion.div>

			{/* ================= SOCIAL ================= */}
			<motion.div
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				variants={{
					hidden: {},
					show: {
						transition: {
							staggerChildren: 0.15,
						},
					},
				}}
				className="flex justify-center gap-6"
			>
				{[
					{
						href: `https://api.whatsapp.com/send?phone=${data.whatsapp}`,
						icon: FaWhatsapp,
						label: "WhatsApp",
					},
					{
						href: data.linkedin,
						icon: FaLinkedin,
						label: "LinkedIn",
					},
					{
						href: `mailto:${data.email}`,
						icon: FaEnvelope,
						label: "Email",
					},
				].map((item, i) => {
					const Icon = item.icon;

					return (
						<motion.a
							key={i}
							href={item.href}
							target="_blank"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							whileHover={{ scale: 1.15, y: -4 }}
							transition={{ duration: 0.3 }}
							className="group relative flex flex-col items-center gap-2"
						>
							{/* ICON */}
							<div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(153,255,6,0.4)]">
								<Icon className="text-lg text-gray-300 group-hover:text-primary transition" />
							</div>

							{/* LABEL */}
							<span className="text-xs text-gray-400 group-hover:text-white transition">
								{item.label}
							</span>

							{/* glow */}
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-primary/20 transition"></div>
						</motion.a>
					);
				})}
			</motion.div>

			{/* ================= FOOTER ================= */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ delay: 0.3 }}
				className="text-center text-gray-500 text-xs mt-6"
			>
				© {new Date().getFullYear()} {HERO_DATA?.headlines?.[0]}. All rights
				reserved.
			</motion.div>
		</section>
	);
}
