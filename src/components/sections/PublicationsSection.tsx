import { PUBLICATIONS_DATA } from "@/data/publications";
import { motion, type Variants } from "framer-motion";
import { FaCopy, FaExternalLinkAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const container: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.15 },
	},
};

const item: Variants = {
	hidden: { opacity: 0, x: -10 },
	show: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
	},
};

export const PublicationsSection = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const copyCitation = (pub: any) => {
		const citation = `${pub.authors} (${pub.year}). ${pub.title}. ${pub.journal}.`;

		navigator.clipboard.writeText(citation).then(() => {
			toast.success("Citation copied to clipboard!", {
				icon: () => "📄",
				// Menggunakan properti style yang valid untuk container toast
				style: {
					borderRadius: "var(--radius)",
					background: "#1c1917",
					color: "#fff",
					fontSize: "14px",
				},
				// Gunakan progressClassName untuk styling progress bar via CSS
				// atau gunakan progressStyle jika versinya mendukung (pastikan typo diperiksa)
			});
		});
	};

	return (
		<section
			id="publications"
			className="relative py-24 bg-[var(--background)]"
		>
			<div className="container-custom">
				{/* Header asimetris agar konsisten dengan About */}
				<div className="grid lg:grid-cols-12 gap-12 mb-20">
					<div className="lg:col-span-4">
						<span className="text-[var(--accent)] font-bold text-xs tracking-[0.3em] uppercase mb-4 block">
							Archive
						</span>
						<h2 className="section-title">Selected Publications</h2>
					</div>
					<div className="lg:col-span-8 flex items-end">
						<p className="text-[var(--muted)] max-w-lg leading-relaxed">
							Peer-reviewed journals and conference proceedings focusing on
							machine learning applications in medicine.
						</p>
					</div>
				</div>

				{/* List */}
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
					className="space-y-4"
				>
					{PUBLICATIONS_DATA.map((pub, i) => (
						<motion.div
							key={i}
							variants={item}
							className="group relative border-b border-[var(--border)] pb-8 pt-4 transition-all hover:bg-[var(--secondary)]/30 px-4 -mx-4 rounded-lg"
						>
							<div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
								<div className="flex-1">
									{/* Category & Year Badge */}
									<div className="flex items-center gap-3 mb-3">
										<span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[var(--primary)]/10 text-[var(--primary)] uppercase tracking-wider">
											{pub.type || "Journal"}
										</span>
										<span className="text-[10px] font-medium text-[var(--muted)]">
											{pub.year}
										</span>
									</div>

									<h3 className="font-serif text-xl text-[var(--foreground)] group-hover:text-[var(--primary)] transition duration-300">
										{pub.title}
									</h3>

									<p className="text-sm mt-3 text-[var(--muted)] font-medium">
										{pub.authors}
									</p>

									<p className="text-sm italic text-[var(--muted)] mt-1 opacity-80">
										{pub.journal}
									</p>
								</div>

								{/* Actions */}
								<div className="flex items-center gap-3">
									<button
										onClick={() => copyCitation(pub)}
										className="p-2 rounded-full border border-[var(--border)] text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all"
										title="Copy Citation"
									>
										<FaCopy size={16} />
									</button>
									{pub.link && (
										<a
											href={pub.link}
											target="_blank"
											className="flex items-center gap-2 px-4 py-2 bg-[var(--foreground)] text-white text-xs font-bold rounded hover:bg-[var(--primary)] transition-all"
										>
											DOI <FaExternalLinkAlt size={12} />
										</a>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};
