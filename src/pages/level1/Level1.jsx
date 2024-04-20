import { Perf } from "r3f-perf";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useEffect } from "react";
import WelcomeText from "./abstractions/WelcomeText";
import RedMen from "./characters/redMen/RedMen";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Girl } from "./characters/girl/Girl";
import { Canvas } from "@react-three/fiber";
import World from "./world/World";
import Controls from "./controls/Controls";
import useMovements from "../../utils/key-movements";
import { useLocation } from "react-router-dom";
import { socket } from "../../socket/socket-manager";
import Player1 from "./characters/avatar/Player1";
import { useAtom } from "jotai";
import { Players, playersAtom } from "../../components/Players";
import { Player2 } from "./characters/avatar/Player2";

export default function Level1() {
    const location = useLocation();
    const [players] = useAtom(playersAtom)
    const map = useMovements();

    useEffect(()=>{
        socket.emit("player-connected")
    }, [])
    
    return (
        <KeyboardControls map={map} >
            <Players />
            <Canvas
                shadows={true}
            >
                <Perf position="top-left" />
                <Suspense fallback={null}>
                    <Lights />
                    <Environments />
                    <Physics debug={true}>
                        <World />
                        <Girl />
                        <RedMen />
                        <Player1 url = {players[0]?.urlAvatar} />
                        <Player2 url = {players[1]?.urlAvatar} />
                    </Physics>
                    <WelcomeText position={[0, 1, -2]} />
                </Suspense>
                <Controls />
            </Canvas>
        </KeyboardControls>

    )
}
