import { OrbitControls } from "@react-three/drei";
import World from "./world/World";
import Lights from "./world/Lights";
import Environments from "./world/Environments";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import { Girl } from "./world/Girl";

const Experience = () => {
    return (
        <>
            {/* <Perf position="top-left" /> */}
            {/* <OrbitControls  /> */}
            <Suspense fallback={null}>
                <Lights />
                <Environments />
                <World />
                <Girl />
            </Suspense>
        </>
    )
}

export default Experience;