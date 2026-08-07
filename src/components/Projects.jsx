import Reveal from './Reveal'

const projects = [
	{
		title: 'Custom Drone Firmware, PCB, and Frame',
		subtitle: 'Autonomous Flight & Stabilization',
		description: 'Autonomous drone frame with a custom 2-layer STM32-H7 based flight computer running custom firmware written from scratch.',
		tech: ['C++', 'Python', 'STM32', 'Sensor Fusion'],
		url: 'https://github.com/InSynchronous/UltraHawk',
	},
	{
		title: 'Custom Drone Ground Station',
		subtitle: 'Autonomous Flight & Stabilization',
		description: 'Autonomous drone control software with flight planning, stabilization, and real-time telemetry.',
		tech: ['C++', 'Python', 'Cross-platform', 'Qt'],
		url: 'https://github.com/InSynchronous/UltraHawk-Basestation',
	},
	{
		title: 'Raytracer',
		subtitle: '3D Graphics and Rendering',
		description: 'Software raytracer with global illuminasion and support for .OBJ imports.',
		tech: ['C++', 'Cross-platform', '.PPM', 'CMake', 'GNU Make'],
		url: 'https://github.com/InSynchronous/raytracer',
	},
]

export default function Projects() {
	return (
		<section id="projects" className="section">
			<div className="section-content">
				<Reveal>
					<h2 className="section-title">Projects</h2>
				</Reveal>
				<div className="projects-grid">
					{projects.map(({title, subtitle, description, tech, url}, i) => (
						<Reveal key={title} delay={i*0.1}>
							<a href={url} target="_blank" rel="noreferrer" className="project-card-link">
								<div className="project-card">
									<h3 className="project-title">{title}</h3>
									<h3 className="project-subtitle">{subtitle}</h3>
									<h3 className="project-desc">{description}</h3>
									<div className="project-tech">
										{console.log(tech)}
										{tech.map((t) => {
											return <span key={t} className="tech-tag">{t}</span>
										})}
									</div>
								</div>
							</a>
						</Reveal>	
					))}
				</div>
			</div>
		</section>
	)
}
