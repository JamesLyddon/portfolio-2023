import { PresentationControls, Center, Float, Text3D, useGLTF, Image, Html } from "@react-three/drei"
import jim from '../img/jim.jpg'
import phoneProfile from '../img/phoneProfile.png'


const Section1 = ({material1, material2}) => {
  
  // 3D fonts
  const paytone = './fonts/Paytone One_Regular.json'
  
  // 3D models
  const iMac = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

	const iPhone = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf')
  
  return (
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
        position={[3, 0.75, 1]}
        rotation={[-0.25, -1, -0.5]}
        scale={0.5}
      >
        <Image
          url={phoneProfile}
          scale-y={3}
          scale-x={2}
          distanceFactor={1.17}
          position={[0, 0, 0.1]}
          rotation-x={0}
        />
      </primitive>
    </Float>
    {/* MacBook */}

    <Float
      floatIntensity={0.4}
      rotationIntensity={0.4}
    >
      <primitive
        object={iMac.scene}
        position={[4, -2, -1.5]}
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
    {/* 3D Text */}
    <Float
      floatIntensity={0.4}
      rotationIntensity={0.4}
    >
      <Center position={[-1.5, 0, 1]} rotation={[0,0.2,0]}>
        <Text3D
          bevelSize={0.01}
          bevelThickness={0.01}
          bevelOffset={0.01}
          bevelSegments={3}
          bevelEnabled
          lineHeight={0.6}
          size={0.45}
          font={paytone}
        >
          {`Hi!\nI'm James Lyddon\njunior developer`}
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </Float>
    </PresentationControls>
  )
}

export default Section1