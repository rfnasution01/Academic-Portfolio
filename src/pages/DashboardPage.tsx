import { PORTFOLIO_DATA } from "@/data/portfolio";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useMemo, useState, type FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type CitationStyle = "APA" | "MLA" | "BibTeX";
type PublicationType = "All" | "Journal" | "Conference" | "Preprint";
type Publication = (typeof PORTFOLIO_DATA.publications)[number];

const fadeIn: Variants = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] } },
};

const filters: PublicationType[] = ["All", "Journal", "Conference", "Preprint"];

function Navbar() {
	const links = [
		["Research", "#research"],
		["Publications", "#publications"],
		["Teaching", "#teaching"],
		["Contact", "#contact"],
	];

	return (
		<header className="fixed inset-x-0 top-0 z-40 border-b border-[var(--border)] bg-white/95 backdrop-blur">
			<nav className="container-custom flex h-[60px] items-center justify-between">
				<a href="#home" className="font-serif text-xl font-semibold text-[var(--foreground)]">
					Dr. Amelia Hart
				</a>
				<div className="hidden gap-7 md:flex">
					{links.map(([label, href]) => (
						<a key={href} href={href} className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--primary)]">
							{label}
						</a>
					))}
				</div>
				<a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="btn-ghost hidden md:inline-flex">
					Email
				</a>
			</nav>
		</header>
	);
}

function HeroSection() {
	const { profile } = PORTFOLIO_DATA;
	return (
		<section id="home" className="paper-texture flex min-h-[90vh] items-center pt-[60px]">
			<motion.div initial="hidden" animate="show" variants={fadeIn} className="container-custom py-16 text-center">
				<img src={profile.portrait} alt={profile.name} className="mx-auto h-[200px] w-[200px] rounded-full border border-[var(--border)] object-cover shadow-sm" />
				<h1 className="mt-8 text-[36px] font-bold leading-tight tracking-[-0.01em] md:text-[56px]">{profile.name}</h1>
				<p className="mt-3 text-base font-medium text-[var(--muted)] md:text-lg">{profile.role}</p>
				<blockquote className="mx-auto mt-9 max-w-3xl font-serif text-xl italic leading-[1.6] text-[var(--foreground)]">
					“{profile.statement}”
				</blockquote>
				<div className="mt-10 flex flex-wrap justify-center gap-3">
					<a className="btn-primary" href={profile.cvUrl} target="_blank" rel="noreferrer">Download CV (PDF)</a>
					<a className="btn-ghost" href={profile.googleScholar} target="_blank" rel="noreferrer">Google Scholar Profile</a>
					<a className="btn-ghost" href={`mailto:${profile.email}`}>Contact Email</a>
				</div>
			</motion.div>
		</section>
	);
}

function ResearchSection() {
	return (
		<section id="research" className="section-spacing bg-[var(--secondary)]">
			<div className="container-custom">
				<h2 className="section-title text-center">Research Interests</h2>
				<div className="mt-12 grid gap-6 md:grid-cols-3">
					{PORTFOLIO_DATA.researchInterests.map((item) => (
						<motion.article key={item.title} variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="h-full border border-[var(--border)] bg-white p-8">
							<div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] text-3xl text-[var(--primary)]">{item.icon}</div>
							<h3 className="text-[22px] font-semibold">{item.title}</h3>
							<p className="mt-4 text-[var(--muted)]">{item.description}</p>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}

function PublicationsSection() {
	const [query, setQuery] = useState("");
	const [filter, setFilter] = useState<PublicationType>("All");
	const [activePub, setActivePub] = useState<Publication | null>(null);
	const [citationStyle, setCitationStyle] = useState<CitationStyle>("APA");

	const publications = useMemo(() => {
		return PORTFOLIO_DATA.publications.filter((pub) => {
			const matchesFilter = filter === "All" || pub.tag === filter;
			const haystack = `${pub.title} ${pub.authors} ${pub.venue} ${pub.abstract}`.toLowerCase();
			return matchesFilter && haystack.includes(query.toLowerCase());
		});
	}, [filter, query]);

	const openCitation = (pub: Publication) => {
		setCitationStyle("APA");
		setActivePub(pub);
	};

	const copyCitation = async () => {
		if (!activePub) return;
		await navigator.clipboard.writeText(activePub.citations[citationStyle]);
		toast.success("Citation copied to clipboard.");
	};

	return (
		<section id="publications" className="section-spacing bg-white">
			<div className="container-custom">
				<h2 className="section-title text-center">Publications</h2>
				<div className="mt-10 flex flex-col gap-3 border-b border-[var(--border)] pb-8 md:flex-row">
					<input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search papers..." className="min-h-11 flex-1 rounded-md border border-[var(--border)] px-4 outline-none transition focus:border-[var(--primary)]" />
					<div className="flex flex-wrap gap-2">
						{filters.map((label) => (
							<button type="button" key={label} onClick={() => setFilter(label)} className={filter === label ? "btn-primary" : "btn-ghost"}>{label}</button>
						))}
					</div>
				</div>

				<div className="mt-8 space-y-6">
					{publications.map((pub) => (
						<motion.article key={pub.title} variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="paper-card">
							{pub.badge && <span className="mb-3 inline-flex rounded-full bg-[var(--quote)]/10 px-3 py-1 text-xs font-semibold text-[var(--quote)]">{pub.badge}</span>}
							<h3 className="text-[22px] font-semibold">{pub.title}</h3>
							<p className="mt-3 text-sm font-medium text-[var(--muted)]">{pub.authors}</p>
							<p className="mt-1 text-sm text-[var(--muted)]">{pub.venue}</p>
							<p className="mt-5 text-[var(--muted)]"><span className="font-semibold text-[var(--foreground)]">Abstract:</span> {pub.abstract}</p>
							<div className="mt-6 flex flex-wrap items-center justify-between gap-4">
								<span className="meta-tag">{pub.tag}</span>
								<div className="flex gap-2">
									<a className="paper-link" href={pub.pdf} target="_blank" rel="noreferrer">PDF</a>
									<a className="paper-link" href={pub.doi} target="_blank" rel="noreferrer">DOI</a>
									<button type="button" className="paper-link" onClick={() => openCitation(pub)}>Cite</button>
								</div>
							</div>
						</motion.article>
					))}
				</div>
			</div>

			<AnimatePresence>
				{activePub && (
					<div className="fixed inset-0 z-50 grid place-items-center bg-black/30 p-4" role="dialog" aria-modal="true">
						<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="w-full max-w-2xl rounded-lg border border-[var(--border)] bg-white p-6 shadow-xl">
							<div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
								<h3 className="text-2xl font-semibold">Cite This Paper</h3>
								<button type="button" onClick={() => setActivePub(null)} className="paper-link" aria-label="Close citation modal">×</button>
							</div>
							<div className="mt-5 flex gap-2">
								{(["APA", "MLA", "BibTeX"] as CitationStyle[]).map((style) => (
									<button type="button" key={style} onClick={() => setCitationStyle(style)} className={citationStyle === style ? "btn-primary" : "btn-ghost"}>{style}</button>
								))}
							</div>
							<p className="mt-6 whitespace-pre-wrap rounded-md bg-[var(--secondary)] p-4 text-[var(--muted)]">{activePub.citations[citationStyle]}</p>
							<div className="mt-6 text-right"><button type="button" onClick={copyCitation} className="btn-primary">Copy Text</button></div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</section>
	);
}

function EducationSection() {
	return (
		<section className="section-spacing bg-[var(--secondary)]">
			<div className="container-custom">
				<h2 className="section-title text-center">Education</h2>
				<div className="mx-auto mt-12 max-w-3xl">
					{PORTFOLIO_DATA.education.map((item, index) => (
						<motion.div key={item.degree} variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative grid gap-5 border-l border-[var(--border)] pb-12 pl-8 md:grid-cols-[150px_1fr]">
							<span className="absolute -left-[7px] top-0 h-3.5 w-3.5 rounded-full border-2 border-[var(--primary)] bg-white" />
							<div><p className="meta-tag w-fit">{item.period}</p><img src={item.logo} alt={`${item.institution} logo`} className="mt-4 h-10 w-10 rounded bg-white object-contain p-1" /></div>
							<div>
								<h3 className="text-[22px] font-semibold">{item.degree}</h3>
								<p className="mt-1 font-medium text-[var(--muted)]">{item.institution}</p>
								<ul className="mt-4 space-y-1 text-[var(--muted)]">{item.details.map((detail) => <li key={detail}>• {detail}</li>)}</ul>
							</div>
							{index === PORTFOLIO_DATA.education.length - 1 && <span className="absolute bottom-0 left-[-1px] h-8 w-px bg-[var(--secondary)]" />}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

function TeachingSection() {
	return (
		<section id="teaching" className="section-spacing bg-white">
			<div className="container-custom">
				<h2 className="section-title text-center">Teaching & Talks</h2>
				<div className="mt-12 grid gap-12 md:grid-cols-2">
					<div><h3 className="mb-5 border-b border-[var(--border)] pb-3 text-lg font-semibold uppercase tracking-wide">Teaching Experience</h3>{PORTFOLIO_DATA.teaching.map((item) => <article key={item.course} className="mb-7"><p className="font-semibold">• {item.role}</p><p className="ml-5 text-[var(--muted)]">{item.course}</p><p className="ml-5 text-sm text-[var(--muted)]">{item.meta}</p></article>)}</div>
					<div><h3 className="mb-5 border-b border-[var(--border)] pb-3 text-lg font-semibold uppercase tracking-wide">Conference Talks</h3>{PORTFOLIO_DATA.talks.map((talk) => <article key={talk.title} className="mb-7"><p className="font-semibold">• “{talk.title}”</p><p className="ml-5 text-[var(--muted)]">{talk.venue}</p><a className="ml-5 text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-hover)]" href={talk.slides} target="_blank" rel="noreferrer">View Slides</a></article>)}</div>
				</div>
			</div>
		</section>
	);
}

function ProjectsSection() {
	return (
		<section className="section-spacing bg-[var(--secondary)]">
			<div className="container-custom">
				<h2 className="section-title text-center">Research Projects</h2>
				<div className="mt-12 grid gap-6 md:grid-cols-2">
					{PORTFOLIO_DATA.projects.map((project) => (
						<article key={project.title} className="overflow-hidden rounded-lg border border-[var(--border)] bg-white">
							<img src={project.image} alt={`${project.title} project preview`} className="h-48 w-full object-cover" />
							<div className="p-7">
								<h3 className="text-[22px] font-semibold">{project.title}</h3>
							<p className="mt-4 text-sm text-[var(--muted)]"><strong>Funding:</strong> {project.funding}</p>
							<p className="mt-1 text-sm text-[var(--muted)]"><strong>Duration:</strong> {project.duration}</p>
							<span className="mt-4 inline-flex rounded-full bg-[var(--primary)]/10 px-3 py-1 text-sm font-semibold text-[var(--primary)]">Status: {project.status}</span>
							<ul className="mt-7 space-y-3 text-[var(--muted)]">{project.points.map((point) => <li key={point}>• {point}</li>)}</ul>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

function ContactSection() {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const submit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const subject = encodeURIComponent(`Academic inquiry from ${form.name}`);
		const body = encodeURIComponent(`${form.message}\n\nInstitution: ${form.name}\nEmail: ${form.email}`);
		window.location.href = `mailto:${PORTFOLIO_DATA.contact.email}?subject=${subject}&body=${body}`;
		toast.info("Your email client has been opened.");
	};
	return (
		<section id="contact" className="section-spacing bg-white">
			<div className="container-custom">
				<h2 className="section-title text-center">Get In Touch</h2>
				<div className="mt-12 grid gap-12 md:grid-cols-2">
					<div><h3 className="mb-5 border-b border-[var(--border)] pb-3 text-lg font-semibold uppercase tracking-wide">Affiliation & Academic Profiles</h3><p className="text-[var(--muted)]">{PORTFOLIO_DATA.contact.affiliation}</p><div className="mt-8 space-y-3 text-[var(--muted)]"><p>Email: <a className="text-[var(--primary)]" href={`mailto:${PORTFOLIO_DATA.contact.email}`}>{PORTFOLIO_DATA.contact.email}</a></p><p>ORCID ID: <a className="text-[var(--primary)]" href={PORTFOLIO_DATA.contact.orcidUrl} target="_blank" rel="noreferrer">{PORTFOLIO_DATA.contact.orcid}</a></p><p>ResearchGate: <a className="text-[var(--primary)]" href={PORTFOLIO_DATA.contact.researchGateUrl} target="_blank" rel="noreferrer">{PORTFOLIO_DATA.contact.researchGate}</a></p></div></div>
					<form onSubmit={submit} className="space-y-4"><h3 className="mb-5 border-b border-[var(--border)] pb-3 text-lg font-semibold uppercase tracking-wide">Message Form</h3><input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Institution Name" className="form-field" /><input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Institutional Email" className="form-field" /><textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Inquiry / Message Body" rows={5} className="form-field resize-none" /><div className="text-right"><button className="btn-primary" type="submit">Send Formal Inquiry</button></div></form>
				</div>
			</div>
		</section>
	);
}

export default function DashboardPage() {
	return (
		<div className="min-h-screen bg-white text-[var(--foreground)]">
			<Navbar />
			<main>
				<HeroSection />
				<ResearchSection />
				<PublicationsSection />
				<EducationSection />
				<TeachingSection />
				<ProjectsSection />
				<ContactSection />
			</main>
			<footer className="border-t border-[var(--border)] bg-[var(--secondary)] py-6 text-center text-sm text-[var(--muted)]">© {new Date().getFullYear()} Dr. Amelia Hart Academic Portfolio.</footer>
			<ToastContainer position="bottom-right" autoClose={2500} theme="light" />
		</div>
	);
}
