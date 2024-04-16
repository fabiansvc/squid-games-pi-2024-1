import RedManCircle from "./RedManCircle";
import RedManQuad from "./RedManQuad";
import RedManTriangle from "./RedManTriangle";

export default function RedMen() {
    
    return <>
        <RedManCircle position={[0, 0 , -10]} scale={2.5} />
        <RedManTriangle position={[0, 0 , -20]} scale={2.5} />
        <RedManQuad position={[0, 0 , -30]} scale={2.5} />
    </>
}