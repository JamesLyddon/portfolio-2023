import './App.css'
import {
	Scroll,
	ScrollControls,
	useGLTF,
	Environment,
	Float,
	PresentationControls,
	OrbitControls,
	ContactShadows,
	Html,
	Sparkles,
} from '@react-three/drei'
import { Bloom, DepthOfField, EffectComposer, Vignette } from '@react-three/postprocessing'
import { Container, Row, Col, Button } from 'react-bootstrap'

function App() {
	const iMac = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
	const reactLogo = useGLTF(
		'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/react-logo/model.gltf'
	)
	const iPhone = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf')
	const openBook = useGLTF(
		'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/open-book/model.gltf'
	)

	return (
		<>
			{/* <OrbitControls /> */}
			<Environment preset='dawn' />
			{/* canvas color */}
			<color
				attach='background'
				args={['#eef5db']}
			/>
			{/* Post processing */}
			<EffectComposer>
				<Bloom
					intensity={0.3}
					luminanceThreshold={0.1}
					luminanceSmoothing={0.5}
					height={1000}
				/>
				<DepthOfField />
				<Vignette
					eskil={false}
					offset={0.1}
					darkness={0.5}
				/>
			</EffectComposer>

			{/* scroll controls */}
			<ScrollControls
				pages={6}
				damping={0.25}
			>
				{/* 3D content */}
				<Scroll>
					{/* iPhone */}
					<Float
						floatIntensity={0.4}
						rotationIntensity={0.4}
					>
						<primitive
							object={iPhone.scene}
							position={[-3, -1, -1]}
							rotation={[0, 1, 0]}
						/>
					</Float>
					{/* MacBook */}
					<Float
						floatIntensity={0.4}
						rotationIntensity={0.4}
					>
						<primitive
							object={iMac.scene}
							position={[3, -1, 0]}
							rotation={[0.25, -1, 0]}
						/>
					</Float>
					{/* Sparkles */}
					{/* <Sparkles
						noise={0}
						count={500}
						speed={0.1}
						size={0.6}
						color={'#fe5f55'}
						opacity={10}
						scale={[20, 100, 20]}
					></Sparkles>
					<Sparkles
						noise={0}
						count={50}
						speed={0.1}
						size={3}
						color={'#fe5f55'}
						opacity={2}
						scale={[30, 100, 10]}
					></Sparkles> */}
				</Scroll>
				{/* HTML content */}
				<Scroll
					html
					style={{ width: '100%' }}
				>
					<Container style={{ position: 'relative' }}>
						{/* 1 */}
						<Row
							className='text-center align-items-center justify-content-center'
							style={{ position: 'absolute', width: '100%', height: '100vh', padding: '0 30px' }}
						>
							<Col sx={6}>
								<div>
									<h1 style={{ marginBottom: 0 }}>Row 1</h1>
								</div>
							</Col>
						</Row>
						{/* 2 */}
						<Row
							className='text-center align-items-center justify-content-center'
							style={{ position: 'absolute', top: '100vh', width: '100%', height: '100vh', padding: '0 30px' }}
						>
							<Col sx={6}>
								<div>
									<h1 style={{ marginBottom: 0 }}>Row 2</h1>
								</div>
							</Col>
						</Row>
						{/* 3 */}
						<Row
							className='text-center align-items-center justify-content-center'
							style={{ position: 'absolute', top: '200vh', width: '100%', height: '100vh', padding: '0 30px' }}
						>
							<Col sx={6}>
								<div>
									<h1 style={{ marginBottom: 0 }}>Row 3</h1>
								</div>
							</Col>
						</Row>
						{/* 4 */}
						<Row
							className='text-center align-items-center justify-content-center'
							style={{ position: 'absolute', top: '300vh', width: '100%', height: '100vh', padding: '0 30px' }}
						>
							<Col sx={6}>
								<div>
									<h1 style={{ marginBottom: 0 }}>Row 4</h1>
								</div>
							</Col>
						</Row>
						{/* 5 */}
						<Row
							className='text-center align-items-center justify-content-center'
							style={{ position: 'absolute', top: '400vh', width: '100%', height: '100vh', padding: '0 30px' }}
						>
							<Col sx={6}>
								<div>
									<h1 style={{ marginBottom: 0 }}>Row 5</h1>
								</div>
							</Col>
						</Row>
						{/* 6 */}
						<Row
							className='text-center align-items-center justify-content-center'
							style={{ position: 'absolute', top: '500vh', width: '100%', height: '100vh', padding: '0 30px' }}
						>
							<Col sx={6}>
								<div>
									<h1 style={{ marginBottom: 0 }}>Row 6</h1>
								</div>
							</Col>
						</Row>
					</Container>
				</Scroll>
			</ScrollControls>
		</>
	)
}

export default App
