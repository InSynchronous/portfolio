import { useState, lazy, Suspense } from 'react'
import Reveal from './Reveal'
import ContactModal from './ContactModal'

const Scene = lazy(() => import('./Scene'))

export default function Hero() {
	const [contactOpen, setContactOpen] = useState(false)
	return (
		<section id="hero" className="hero-section">
			<Suspense>
				<Scene />
			</Suspense>
			<div className="hero-overlay">
				<Reveal>
					<h1 className="hero-name">Ahsan Ahmed</h1>
				</Reveal>
				<Reveal delay={0.2}>
					<p className="hero-tagline">14 y/o &middot; Embeded Systems &amp; Aerospace Engineering</p>
				</Reveal>
				<Reveal delay={0.4}>
					<div className="hero-cta">
						<a href="#projects" className="btn-primary">View Projects</a>
						<button type="button" className="btn-secondary" onClick={() => setContactOpen(true)}>
							Get In Touch
			            </button>
					</div>
				</Reveal>
			</div>
		<ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
		</section>
	)
}
