import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { RigidBody } from "@react-three/rapier"
import { useRef } from "react"

export default function RedManCircle({position}) {
    const redManCircleRef = useRef(null)
    const redManCircleBodyRef = useRef(null)
    const { nodes, materials } = useGLTF('/assets/models/red-mens/RedManCircle.glb')

    const radius = 3.5
    const speed = 1.5

    useFrame(({clock}) => {
        const elapsedTime = clock.getElapsedTime()
        const angle = elapsedTime * speed
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius

        redManCircleRef.current.rotation.y = -angle

        redManCircleBodyRef.current?.setTranslation({
            x:  position[0] + x,
            y:  position[1],
            z:  position[2] + z
        }, true)
    })

    return (
        <RigidBody ref={redManCircleBodyRef} type="fixed" position={position}>
            <group ref={redManCircleRef} dispose={null} scale={2.5}>
                <group name="Scene">
                    <group name="Rigid">
                        <skinnedMesh
                            name="RedManCircle"
                            geometry={nodes.RedManCircle.geometry}
                            material={materials.redManCircleMaterial}
                            skeleton={nodes.RedManCircle.skeleton}
                        />
                        <primitive object={nodes.root} />
                    </group>
                </group>
            </group>
        </RigidBody>
    )
}

useGLTF.preload('/assets/models/red-mens/RedManCircle.glb')
