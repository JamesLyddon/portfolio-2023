import './App.css'
import { useEffect } from 'react'
import {
	Scroll,
	ScrollControls,
	useGLTF,
	Environment,
  useTexture
} from '@react-three/drei'
import { Bloom, DepthOfField, EffectComposer, Vignette } from '@react-three/postprocessing'
import { Container, Row, Col, Button } from 'react-bootstrap'
import * as THREE from 'three'
// Components
import Section1 from './components/Section1'

// texture images
import txt1 from './matcaps/7B5254_E9DCC7_B19986_C8AC91.png'
import txt2 from './matcaps/74A192_041B0D_194C33_235B4C.png'

// materials
const material1 = new THREE.MeshMatcapMaterial()
const material2 = new THREE.MeshMatcapMaterial()





function App() {

	const matcap1 = useTexture(txt1)
	const matcap2 = useTexture(txt2)


	useEffect(() => {
		material1.matcap = matcap1
		material1.needsUpdate = true
		material2.matcap = matcap2
		material2.needsUpdate = true
	}, [])

	// models
	const iMac = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
	const reactLogo = useGLTF(
		'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/react-logo/model.gltf'
	)
	const iPhone = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf')
	const openBook = useGLTF(
		'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/open-book/model.gltf'
	)

    // 2D fonts
    const spartan = './fonts/league-spartan-v11-latin-regular.woff2'

	// 3D fonts
  const cherry = './fonts/Cherry Bomb One_Regular.json'
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
					intensity={0.1}
					luminanceThreshold={0.5}
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
					<Section1 material1={material1} material2={material2}/>
				</Scroll>
				{/* HTML content */}
				<Scroll
					html
					style={{ width: '100%' }}
				>
					<Container style={{ position: 'relative', color: '#004F2D' }}>
						{/* 1 */}
						<Row
							className='text-center align-items-center justify-content-center'
							style={{ position: 'absolute', width: '100%', height: '100vh', padding: '0 30px' }}
						>
							<Col sx={6}>
              <h1 style={{ marginBottom: 0 }}></h1>
							</Col>
						</Row>
						{/* 2 */}
						<Row
							className='text-center align-items-center justify-content-center'
							style={{ position: 'absolute', top: '100vh', width: '100%', height: '100vh', padding: '0 30px' }}
						>
							<Col sx={6}>
								<div>
									<p style={{ marginBottom: 0 }}>
                    I've been learning web development over the last few years, initially self-taught but more recently as a Master's student at the Univerity of York.
                  </p>
                  <br />
									<p style={{ marginBottom: 0 }}>
                    My main focus has been building front end experiences with JavaScript & React along with a little game development with C#.
                  </p>
                  <br />
									<p style={{ marginBottom: 0 }}>
                    Currently I'm looking for opportunities to join a team and work on larger projects. Eventually I'd like to expand into the back end and become a full stack developer 
                  </p>
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
