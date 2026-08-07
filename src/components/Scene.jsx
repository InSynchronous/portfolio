import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

function FloatingShape({position, color, speed, distort, scale = 1}) {
	const ref = useRef();
	useFrame(({ clock }) => {
		ref.current.rotation.x = clock.getElapsedTime() * speed * 0.3
		ref.current.rotation.y = clock.getElapsedTime() * speed * 0.2
	})
	return (
		<Float speed={speed} rotationIntensity={0.6} floatIntensity={1.2}>
			<mesh ref={ref} position={position} scale={scale}>
			<icosahedronGeometry args={[2.0, 0]} />
			<MeshDistortMaterial
				color={color}
				speed={3}
				distort={distort}
				roughness={0.5}
				metalness={0.3}
				transparent
				opacity={0.85}
			/>
			</mesh>
		</Float>
	)
}

function CentralGlow() {
	const ref = useRef()
	useFrame(({ clock }) => {
		const t = clock.getElapsedTime()
		ref.current.scale.setScalar(1 + Math.sin(t * 0.5) * 0.05)
	})
	return (
		<mesh ref={ref} position={[0, 0, 0]}>
			<sphereGeometry args={[0.6, 16, 16]} />
			<meshBasicMaterial color="#a78bfa" transparent opacity={0.3} />
		</mesh>
	)
}

export default function Scene() {
	return (
		<div className="scene-container">
			<Canvas
				camera={{ position: [0, 0, 10], fov: 65 }}
				dpr={[1, 1.5]}
				gl={{ powerPreference: "high-performance", antialias: false }}
			>
				<color attach="background" args={['#07070d']} />
	        <fog attach="fog" args={['#07070d', 15, 30]} />

	        <ambientLight intensity={0.6} />
	        <directionalLight position={[5, 5, 5]} intensity={1.2} />
	        <pointLight position={[-5, -5, -5]} intensity={0.8} color="#a78bfa" />
	        <pointLight position={[5, -5, 5]} intensity={0.5} color="#818cf8" />
	
	        <Sparkles
				count={80}
				scale={30}
				size={0.8}
				speed={0.2}
				color="#a78bfa"
				opacity={0.25}
	        />
	
	        <CentralGlow />
	
	        <FloatingShape position={[-8, 5, -6]} color="#a78bfa" speed={0.6} distort={0.4} scale={2.0} />
	        <FloatingShape position={[8, -5, -7]} color="#818cf8" speed={0.4} distort={0.6} scale={1.8} />
	        <FloatingShape position={[-5, -6, -5]} color="#c084fc" speed={0.5} distort={0.3} scale={1.5} />
	        <FloatingShape position={[6, 6, -8]} color="#6366f1" speed={0.7} distort={0.5} scale={1.7} />
	
	        <EffectComposer>
	          <Bloom
				intensity={0.15}
				luminanceThreshold={0.5}
				luminanceSmoothing={0.6}
	          />
	        </EffectComposer>
	
		</Canvas>
		</div>
	)
}
