import Reveal from './Reveal'

export default function About() {
	return (
		<section id="about" className="section">
			<div className="section-content">
				<Reveal>
					<h2 className="section-title">About Me</h2>
				</Reveal>

				<div className="about-grid">
					<Reveal className="about-text" delay={0.1}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut quam
							rhoncus diam ullamcorper varius. Pellentesque lacus risus, hendrerit eget
						</p>

						<p>
							Sed maximus lorem vel augue dictum, sed tempor dolor vestibulum. Proin vel
							justo in tellus sollicitudin placerat sagittis a orci. Quisque ullamcorper,
						</p>

						<p>
							Vivamus eu sem consectetur, tincidunt ligula a, lacinia sem. In vitae
							pellentesque sem, ullamcorper vulputate dolor. Proin quis vestibulum eros.
						</p>
					</Reveal>

					<div className="about-stats">
						<Reveal className="reveal-scale" delay={0.2}>
							<div className="stat">
								<span className="stat-number">13</span>
								<span className="stat-label">Years Old</span>
							</div>
						</Reveal>

						<Reveal className="reveal-scale" delay={0.3}>
							<div className="stat">
								<span className="stat-number">15</span>
								<span className="stat-label">PCBs Manufactured</span>
							</div>
						</Reveal>

						<Reveal className="reveal-scale" delay={0.4}>
							<div className="stat">
								<span className="stat-number">2nd</span>
								<span className="stat-label">MakerHacks II</span>
							</div>
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	)
}
