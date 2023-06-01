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
	Text,
	Text3D,
	Center,
	Image,
} from '@react-three/drei'
import { Bloom, DepthOfField, EffectComposer, Vignette } from '@react-three/postprocessing'
import { useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import jim from './img/jim.jpg'

function App() {
	// models
	const iMac = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
	const reactLogo = useGLTF(
		'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/react-logo/model.gltf'
	)
	const iPhone = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf')
	const openBook = useGLTF(
		'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/open-book/model.gltf'
	)

	// fonts
	const paytone = './fonts/Paytone One_Regular.json'
	const helvetiker = './fonts/helvetiker_regular.typeface.json'
	const damion = './fonts/Damion_Regular.json'
	const poppins = './fonts/Poppins_Regular.json'
	const sigmar = './fonts/Sigmar One_Regular.json'

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
					intensity={0.2}
					luminanceThreshold={0.1}
					luminanceSmoothing={0.5}
					height={1000}
				/>
				<DepthOfField />
				<Vignette
					eskil={false}
					offset={0.1}
					darkness={0.6}
				/>
			</EffectComposer>

			{/* scroll controls */}
			<ScrollControls
				pages={6}
				damping={0.25}
			>
				{/* 3D content */}
				<Scroll>
					{/* Row 1 */}
					<PresentationControls
						polar={[-0.2, 0.2]} // Vertical limits
						azimuth={[-0.2, 0.2]} // Horizontal limits
						snap={true}
						config={{ mass: 5, tension: 170, friction: 26 }}
					>
						{/* iPhone */}
						<Float
							floatIntensity={0.4}
							rotationIntensity={0.4}
						>
							<primitive
								object={iPhone.scene}
								position={[-2.9, -1, 2]}
								rotation={[0.25, 1.5, 0]}
								scale={0.5}
							/>
						</Float>
						{/* MacBook */}
						<Float
							floatIntensity={0.4}
							rotationIntensity={0.4}
						>
							<primitive
								object={iMac.scene}
								position={[5, 0.5, -1.5]}
								rotation={[1, -0.75, 0.5]}
							>
								<Image
									url={jim}
                  scale-y={2}
                  scale-x={3}
									distanceFactor={1.17}
									position={[0, 1.56, -1.4]}
									rotation-x={-0.256}
								/>
							</primitive>
						</Float>
						<Float
							floatIntensity={0.4}
							rotationIntensity={0.4}
						>
							<Center position={[0, 1, 1]}>
								<Text3D
									font={paytone}
									size={0.5}
								>
									Hi!
									<meshNormalMaterial />
								</Text3D>
							</Center>
							<Center position={[0, 0, 1]}>
								<Text3D
									font={helvetiker}
									size={0.5}
								>
									I'm James Lyddon
									<meshNormalMaterial />
								</Text3D>
							</Center>
						</Float>
					</PresentationControls>
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
									<h1 style={{ marginBottom: 0 }}></h1>
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
