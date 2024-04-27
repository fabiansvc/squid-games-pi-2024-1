import { Perf } from "r3f-perf";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useEffect, useState } from "react";
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
import { useAuth } from "../../context/AuthContext";
import Logout from "../../components/logout/Logout";
import { createUser, readUser } from "../../db/users-collection";

export default function Level1() {
    const location = useLocation();
    const [players] = useAtom(playersAtom)
    const map = useMovements();

    const auth = useAuth()

    const saveDataUser = async (valuesUser) => {
        await createUser(valuesUser)
    }

    const readDataUser = async (email) => {
        await readUser(email).then((res) => console.log(res))
        .catch((error) => console.error(error))
    }

    useEffect(() => {
        if (auth.userLogged) {
            const { displayName, email } = auth.userLogged

            saveDataUser({
                displayName: displayName,
                email: email,
            })

            readDataUser(email)
                

        }
    }, [auth.userLogged])


    useEffect(() => {
        socket.emit("player-connected")
    }, [])

    return (
        <KeyboardControls map={map} >
            <Players />
            <Logout />
            <Canvas
                shadows={true}
            >
                {/* <Perf position="top-left" /> */}
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
                <Controls />
            </Canvas>
        </KeyboardControls>

    )
}
