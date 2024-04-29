import { Perf } from "r3f-perf";
import { KeyboardControls, Loader } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useEffect } from "react";
import WelcomeText from "./abstractions/WelcomeText";
import RedMen from "./characters/redMen/RedMen";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import Girl from "./characters/girl/Girl";
import Player1 from "./characters/players/Player1";
import { Canvas } from "@react-three/fiber";
import World from "./world/World";
import Controls from "./controls/Controls";
import useMovements from "../../utils/key-movements";
import { socket } from "../../socket/socket-manager";
import { Players, playersAtom } from "../../components/Players";
import { useAuth } from "../../context/AuthContext";
import Logout from "../../components/logout/Logout";
import { createUser, readUser } from "../../db/users-collection";
import { useAtom } from "jotai";
import { EcctrlJoystick } from "ecctrl";

export default function Level1() {
    const map = useMovements();
    const auth = useAuth()
    const [players] = useAtom(playersAtom);
    /**
     * Save the user data in the DB.
     * @param {*} valuesUser 
     */
    const saveDataUser = async (valuesUser) => {
        const {success} = await readUser(valuesUser.email)
        if (!success)
            await createUser(valuesUser)
    }
    /**
     * When userLogged is changed call saveDataUser to save the user in the DB.
     * @see saveDataUser
     */
    useEffect(() => {
        if (auth.userLogged) {
            const { displayName, email } = auth.userLogged

            saveDataUser({
                displayName: displayName,
                email: email,
            })
        }
    }, [auth.userLogged])
    /**
     * Emit to the server that the player is connected.
     */
    useEffect(() => {
        socket.emit("player-connected")
    }, [])

    return (
        <Suspense fallback={<Loader />}>
            <KeyboardControls map={map} >
                <Players />
                <Logout />
                <EcctrlJoystick />
                <Canvas shadows={true}>
                    {/* <Perf position="top-left" /> */}
                    <Lights />
                    <Environments />
                    <Physics debug={false}>
                        <World />
                        <Girl />
                        <RedMen />
                        <Player1/>
                    </Physics>
                    <WelcomeText position={[0, 1, -2]} />
                    <Controls />
                </Canvas>
            </KeyboardControls>
        </Suspense>
    )
}
