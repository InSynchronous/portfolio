import { useEffect, useRef, useState } from 'react'
import Reveal from "./Reveal"

const command = 'ls -la /home/ahsan/toolkit'

const skills = [
  { name: 'c/c++', tag: 'systems programming & build toolchains' },
  { name: 'python', tag: 'scripting, data & automation' },
  { name: 'kicad', tag: 'PCB design schematic to manufactured final product' },
  { name: 'onshape', tag: 'parametric CAD assemblies' },
  { name: 'esptool', tag: 'ESP32 firmware, sensors & motor control' },
  { name: 'verilator', tag: 'FPGA / Verilog / VHDL / RTL & digital logic' },
  { name: 'bambu', tag: 'slicing, printing & tuning' },
  { name: 'picoctf', tag: 'CTF challenges & reverse engineering' },
]

function Terminal() {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);
	const [typed, setTyped] = useState(0);

	useEffect(() => {
		const el = ref.current;
		if (!el) {return;}
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.3 }
		)
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!visible) {return;}
		const id = setInterval(() => {
			setTyped((n) => {
				if (n >= command.length) {
					clearInterval(id);
					return n;
				}
				return n+1;
			});
		}, 45);
		return () => clearInterval(id);
	}, [visible]);

	const done = typed >= command.length;

	return (
		<div className="terminal" ref={ref}>
			<div className="terminal-bar">
				<span className="terminal-dot" />
				<span className="terminal-dot" />
				<span className="terminal-dot" />
				<span className="terminal-title">ahsan@toolkit: ~</span>
			</div>
			<div className="terminal-body">
				<p className="terminal-line">
					<span className="terminal-prompt">$</span> {' '}
					{command.slice(0, typed)}
					{!done && visible && <span className="terminal-caret" />}
				</p>
				<div className={`terminal-output ${done ? 'is-ready' : ''}`}>
					{skills.map(({ name, tag }, i) => (
						<div
							className="terminal-row"
							key={name}
							style={{ '--delay': `${0.15 + i * 0.045}s` }}
						>
							<span className="terminal-perms">-rwxr-xr-x</span>
							<span className="terminal-tool">{name}</span>
							<span className="terminal-tag">{tag}</span>
						</div>
					))}
				</div>
				<p className="terminal-line">
					<span className="terminal-prompt">$</span> {' '}
					{done && <span className="terminal-caret" />}
				</p>
			</div>
		</div>
	)
}

export default function Skills() {
	return (
		<section id="skills" className="section">
			<div className="section-content">
				<Reveal>
					<h2 className="section-title">Skills</h2>
				</Reveal>
				<Terminal />
			</div>
		</section>
	);
}
