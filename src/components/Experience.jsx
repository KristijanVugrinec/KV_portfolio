import { OrbitControls, ScrollControls } from "@react-three/drei"
import { Cube } from "./Cube"
import { extend } from "react-three-fiber"

export const Experience = () => {
    return (
        <>
        {/* Ambient light with higher intensity */}
        <ambientLight intensity={1} />
        
        {/* Directional light with higher intensity */}
<directionalLight 
  position={[5, 10, 7.5]} 
  intensity={1.5} 
//   castShadow 
/>

{/* Point lights with higher intensities */}
<pointLight position={[-5, 5, 5]} intensity={1} />
<pointLight position={[5, -5, 5]} intensity={1} />
<pointLight position={[5, 5, -5]} intensity={1} />
<pointLight position={[-5, -1, -2]} intensity={1} />
<pointLight position={[1, 1, -1]} intensity={1} />


{/* Spot light with higher intensity */}
<spotLight 
  position={[0, 10, 0]} 
  angle={0.3} 
  intensity={2} 
  penumbra={0.5} 
  castShadow 
/>
        <OrbitControls enableZoom={false} />
        {/* <ScrollControls pages={3} damping={0.25} > */}
        <Cube />
        {/* </ScrollControls> */}
  </>
    )
}