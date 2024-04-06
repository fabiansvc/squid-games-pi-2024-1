import "./styles.css";
import { createRoot } from "react-dom/client";
import Experience from "./Experience";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import WelcomeView from "./layouts/WelcomeView";

const root = createRoot(document.getElementById("root"));

root.render(<>
    {/* <WelcomeView /> */}
    <Canvas
        camera={
            {
                position: [0, 1.5, -90],
                rotation: [0, 0, 0]
            }
        }
        shadows={true}
    >
        <Experience />
    </Canvas>
    <Loader />
</>

)