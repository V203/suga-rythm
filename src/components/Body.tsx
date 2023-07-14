import { Canvas } from "@react-three/fiber"

import { Suspense } from "react"
import GLTFModel from "./GLTFModel"
// import * from "../assets/plain_doughnut"

const Body = ()=>{

    return (<>
    <Canvas style={{width:"200px",height:"300px"}}>
        <Suspense fallback={null}>

            <GLTFModel url="/plain_doughnut.glb" />
        </Suspense>


    </Canvas>
    </>)
}


export default Body