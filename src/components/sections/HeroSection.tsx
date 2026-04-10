import { HERO_DATA } from "@/data/hero";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

export function HeroSection() {
	const data = HERO_DATA;

	return (
		<section className="relative min-h-screen flex items-center overflow-hidden">
			{/* BACKGROUND GLOW */}
			<div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary opacity-10 blur-[140px]" />

			<div className="grid md:grid-cols-2 gap-16 w-full items-center relative z-10">
				{/* ================= LEFT ================= */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="flex flex-col gap-8"
				>
					{/* HEADLINE */}
					<h1 className="text-primary font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-tight drop-shadow-[0_0_20px_#99FF06]">
						<ReactTyped
							strings={data.headlines}
							typeSpeed={80}
							backSpeed={40}
							loop
						/>
					</h1>

					{/* TITLE */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className="text-xl text-gray-300"
					>
						{data.title}
					</motion.p>

					{/* DESCRIPTION */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className="text-gray-400 leading-relaxed max-w-lg"
					>
						{data.description}
					</motion.p>

					{/* BUTTON */}
					<motion.a
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7 }}
						href={`https://api.whatsapp.com/send?phone=${data.phone}`}
						target="_blank"
						className="relative w-fit px-8 py-3 rounded-xl bg-primary text-black font-semibold overflow-hidden group"
					>
						<span className="relative z-10">Hire Me</span>

						{/* glow hover */}
						<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2),transparent_70%)]" />
						<div className="absolute inset-0 blur-md opacity-50 group-hover:opacity-80 transition bg-primary" />
					</motion.a>
				</motion.div>

				{/* ================= RIGHT ================= */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					className="flex justify-center"
				>
					<div className="relative group">
						{/* GLOW */}
						<div className="absolute inset-0 rounded-full bg-primary blur-[100px] opacity-20 group-hover:opacity-40 transition"></div>

						{/* FLOATING ANIMATION */}
						<motion.img
							src={data.image}
							alt="profile"
							className="relative w-[320px] h-[320px] object-cover rounded-full border border-white/10 shadow-[0_0_40px_rgba(153,255,6,0.2)]"
							animate={{ y: [0, -12, 0] }}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>

						{/* RING */}
						<div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse"></div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
