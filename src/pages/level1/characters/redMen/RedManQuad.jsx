import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { RigidBody } from "@react-three/rapier"
import { useRef } from "react"

export default function RedManQuad({position}) {
    const redManQuadRef = useRef(null)
    const redManQuadBodyRef = useRef(null)

    const { nodes, materials } = useGLTF('/assets/models/red-mens/RedManQuad.glb')
    const amplitude = 3.5

    useFrame(({clock}) => {
        const moveX = Math.cos(clock.getElapsedTime()) * amplitude +    position[0];

        redManQuadBodyRef.current?.setTranslation({
            x:  moveX,
            y:  redManQuadBodyRef.current?.translation().y,
            z:  redManQuadBodyRef.current?.translation().z
        }, true)
    })

    return (
        <RigidBody ref={redManQuadBodyRef} type="fixed" position={position}>
            <group ref={redManQuadRef} dispose={null} scale={2.5}>
                <group name="Scene">
                    <group name="Rigid">
                        <skinnedMesh
                            name="RedManQuad"
                            geometry={nodes.RedManQuad.geometry}
                            material={materials.redManQuadMaterial}
                            skeleton={nodes.RedManQuad.skeleton}
                        />
                        <primitive object={nodes.root} />
                    </group>
                </group>
            </group>
        </RigidBody>
    )
}

useGLTF.preload('/assets/models/red-mens/RedManQuad.glb')
