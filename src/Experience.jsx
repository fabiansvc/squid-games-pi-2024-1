import { FlyControls, OrbitControls } from "@react-three/drei";
import World from "./world/World";
import Lights from "./world/Lights";
import Environments from "./world/Environments";
import { Perf } from "r3f-perf";
import { Suspense, useRef } from "react";
import { Girl } from "./world/Girl";
import WelcomeText from "./world/WelcomeText";
import RedMen from "./world/redMen/RedMen";
import { AnyCollider, BallCollider, Physics, RigidBody, vec3 } from "@react-three/rapier";
import Shape from "./world/Shape";
import { useFrame, useThree } from "@react-three/fiber";

const Experience = () => {
    // const {camera} = useThree();
    const cameraBodyCollider = useRef();

    useFrame(({camera}, delta)=>{
        const position = vec3(camera.position);
        cameraBodyCollider.current?.setTranslation(position, true);
        console.log(cameraBodyCollider?.current?.translation());
    })

    return (
        <>
            <Perf position="top-left" />
            <OrbitControls
                target={[0, 1.5, -95]}
                enableZoom={true}
                enablePan={true}
            />
            {/* <FlyControls /> */}
            <Suspense fallback={null}>
                <Lights />
                <Environments />
                <Physics debug={true}
                // gravity={[0, -1, 0]}
                >
                    <World />
                    <Girl />
                    <RedMen />
                    <Shape position={[0, 5, -5]} />
                    <RigidBody ref={cameraBodyCollider} position={[0, 3, -90]} type="fixed">
                        <BallCollider args={[0.1]}  />
                    </RigidBody>
                </Physics>
                <WelcomeText position={[0, 1, -2]} />
            </Suspense>
        </>
    )
}

export default Experience;