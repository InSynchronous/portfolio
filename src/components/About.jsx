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
							My name is Ahsan Ahmed. I am a 14 y/o high-school student located in the SF Bay Area focused on 
							creating embeded systems and autonomous robotics projects with emphasis on aerospace, GNC code, and
							real world hardware/software integration.
						</p>

						<p>
							My main interests are in embedded systems engineering, robotics, and
							aerospace/GNC systems. I work with concepts ranging from circuit
							design and PCB layout to firmware development and control algorithms.
						</p>

						<p>
							I'm especially interested in how real-time software interacts with
							physical systems; how control theory, sensors, and embedded
							firmware come together to create stable and intelligent machines.

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
