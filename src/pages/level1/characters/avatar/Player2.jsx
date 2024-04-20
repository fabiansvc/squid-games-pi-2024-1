
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { CuboidCollider, RigidBody, vec3 } from '@react-three/rapier'
import { socket } from '../../../../socket/socket-manager'

export function Player2({ url }) {
    const player2Ref = useRef()
    const rigidBodyPlayer2Ref = useRef()
    const { nodes, materials } = useGLTF(url)
    const [animation, setAnimation] = useState('Idle')

    const position = vec3();

    socket.on("updates-values-transform-player", (player) => {
        position.set(player.position.x, player.position.y, player.position.z)
        rigidBodyPlayer2Ref.current?.setTranslation(position, true)
    })

    socket.on('update-animation', (animation) => {
        setAnimation(animation)
    })

    useEffect(() => {
        actions[animation]?.reset().fadeIn(0.5).play();
        return () => {
            if (actions[animation])
                actions[animation].fadeOut(0.5);
        }
    }, [actions, animation]);

    return (
        <RigidBody ref={rigidBodyPlayer2Ref} colliders={false} type='fixed' position={[-2, 4, 0]}>
            <group ref={player2Ref} dispose={null}>
                <mesh> 
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color='blue' />
                </mesh>
            </group>
            <CuboidCollider args={[1, 1, 1]} />
        </RigidBody>
    )
}