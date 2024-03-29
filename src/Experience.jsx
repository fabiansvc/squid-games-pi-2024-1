import { FlyControls, OrbitControls } from "@react-three/drei";
import World from "./world/World";
import Lights from "./world/Lights";
import Environments from "./world/Environments";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import { Girl } from "./world/Girl";
import WelcomeText from "./world/WelcomeText";
import RedMen from "./world/red-mens/RedMen";

const Experience = () => {
    return (
        <>
            <Perf position="top-left" />
            <OrbitControls
                target={[0, 1.5, 0]}
                enableZoom={false}
                enablePan={false}
            />
            <Suspense fallback={null}>
                <Lights />
                <Environments />
                <World />
                <Girl />
                <RedMen />
                <WelcomeText position={[0, 1, -2]} />
            </Suspense>
        </>
    )
}

export default Experience;