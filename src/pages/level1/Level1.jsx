import { Perf } from "r3f-perf";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import WelcomeText from "./abstractions/WelcomeText";
import RedMen from "./characters/redMen/RedMen";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Girl } from "./characters/girl/Girl";

export default function Level1() {
    return (
        <>
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
                    <Level1 />
                    <Girl />
                    <RedMen />
                </Physics>
                <WelcomeText position={[0, 1, -2]} />
            </Suspense>
        </>
    )
}
