import { Perf } from "r3f-perf";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import WelcomeText from "./abstractions/WelcomeText";
import RedMen from "./characters/redMen/RedMen";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Girl } from "./characters/girl/Girl";
import { Canvas } from "@react-three/fiber";
import World from "./world/World";

export default function Level1() {
    return (
        <Canvas>
            {/* <Perf position="top-left" /> */}
            <OrbitControls
                target={[0, 1.5, -95]}
                enableZoom={false}
                enablePan={false}
            />
            <Suspense fallback={null}>
                <Lights />
                <Environments />
                <Physics debug={false}>
                    <World />
                    <Girl />
                    <RedMen />
                </Physics>
                <WelcomeText position={[0, 1, -2]} />
            </Suspense>
        </Canvas>
    )
}
