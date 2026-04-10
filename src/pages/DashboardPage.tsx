import {
	AboutMeSection,
	ContactSection,
	HeroSection,
	PortfolioSection,
	SkillSection,
} from "@/components/sections";
import { Menu } from "@/components/sections/menu";
import { COLOR } from "@/data/colors";
import clsx from "clsx";
import { useState, useRef } from "react";

export default function App() {
	const [hoveredId, setHoveredId] = useState<number | null>(null);
	const [menu, setMenu] = useState<string>("");

	// ================= REFS =================
	const heroRef = useRef<HTMLDivElement | null>(null);
	const aboutMeRef = useRef<HTMLDivElement | null>(null);
	const portfolioRef = useRef<HTMLDivElement | null>(null);
	const skillRef = useRef<HTMLDivElement | null>(null);
	const contactRef = useRef<HTMLDivElement | null>(null);

	// ================= MAPPING =================
	const sectionRefs = {
		Home: heroRef,
		"About Me": aboutMeRef,
		Portfolio: portfolioRef,
		Skills: skillRef,
		Contact: contactRef,
	} as const;

	const handleScrollToSection = (section: keyof typeof sectionRefs) => {
		const targetRef = sectionRefs[section];

		targetRef?.current?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	return (
		<div
			className="relative flex min-h-screen w-full"
			style={{ backgroundColor: COLOR.background }}
		>
			{/* ================= SIDEBAR ================= */}
			<aside className="fixed left-0 top-0 bottom-0 hidden md:flex items-center justify-center z-50">
				<div
					className="flex flex-col text-white"
					style={{ backgroundColor: COLOR.background_secondary }}
				>
					{/* TRIANGLE TOP */}
					<div
						className="h-0 w-0 border-l-[4rem] border-t-[4rem] border-[#4a4a53] border-t-transparent"
						style={{
							backgroundColor: COLOR.background,
						}}
					/>

					{Menu?.map((item, idx) => {
						const isActive =
							menu === item?.nama || (menu === "" && item?.nama === "Home");

						return (
							<a
								key={idx}
								href={item?.url}
								onMouseEnter={() => setHoveredId(idx)}
								onMouseLeave={() => setHoveredId(null)}
								onClick={(e) => {
									e.preventDefault();
									setMenu(item?.nama);
									handleScrollToSection(item?.nama as keyof typeof sectionRefs);
								}}
								className={clsx(
									"group relative flex h-[4rem] w-[4rem] items-center border-b border-gray-600 cursor-pointer",
									{
										"justify-center": hoveredId !== idx,
										"justify-end": hoveredId === idx,
									},
								)}
							>
								{/* ICON */}
								<div
									className={clsx("flex h-[3.1rem]", {
										"w-[3.1rem] rounded-lg bg-primary text-black":
											isActive && hoveredId !== idx,
										"w-[3.5rem] rounded-l-lg bg-primary text-black":
											isActive && hoveredId === idx,
										"w-[3.1rem] justify-start rounded-l-lg":
											!isActive && hoveredId !== idx,
										"w-[3.5rem] justify-start rounded-l-lg bg-primary text-black":
											!isActive && hoveredId === idx,
									})}
								>
									<div className="flex h-[3.1rem] w-[3.1rem] items-center justify-center text-base">
										{item?.icon}
									</div>
								</div>

								{/* HOVER TEXT */}
								{hoveredId === idx && (
									<div className="absolute left-full top-1/2 -translate-y-1/2 flex items-center">
										<div className="flex h-[3.1rem] items-center rounded-r-lg bg-primary px-5 text-black shadow-md">
											<span className="text-[0.85rem] font-semibold uppercase tracking-wide whitespace-nowrap">
												{item?.nama}
											</span>
										</div>
									</div>
								)}
							</a>
						);
					})}

					{/* TRIANGLE BOTTOM */}
					<div
						className="h-0 w-0 border-b-[4rem] border-l-[4rem] border-[#4a4a53] border-b-transparent"
						style={{
							backgroundColor: COLOR.background,
						}}
					/>
				</div>
			</aside>

			{/* ================= CONTENT ================= */}
			<div className="flex w-full flex-col gap-24 px-6 md:px-16 lg:px-24 text-secondary">
				{/* HERO */}
				<div ref={heroRef} className="min-h-screen w-full">
					<HeroSection />
				</div>

				{/* ABOUT */}
				<div ref={aboutMeRef} className="w-full">
					<AboutMeSection />
				</div>

				{/* SKILLS */}
				<div ref={skillRef} className="w-full">
					<SkillSection />
				</div>

				{/* PORTFOLIO */}
				<div ref={portfolioRef} className="w-full">
					<PortfolioSection />
				</div>

				{/* CONTACT */}
				<div ref={contactRef} className="w-full pb-16">
					<ContactSection />
				</div>
			</div>
		</div>
	);
}
