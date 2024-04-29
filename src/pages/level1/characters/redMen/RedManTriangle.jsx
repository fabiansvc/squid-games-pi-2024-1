import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { RigidBody } from "@react-three/rapier"
import { useRef } from "react"

export default function RedManTriangle({position}) {
  const redManTriangleRef = useRef(null)
  const redManTriangleBodyRef = useRef(null)

  const { nodes, materials } = useGLTF('/assets/models/red-mens/RedManTriangle.glb')
  const speed = 4

  useFrame((state, delta) => {
    const currentPosition = redManTriangleBodyRef.current?.translation()

    let moveX = currentPosition?.x
    let moveY = currentPosition?.y

    if (currentPosition?.x >= -3.5 && currentPosition?.x < 3.5 && currentPosition?.y == 0.0) {
      moveX += delta * speed;
    }
    else if (currentPosition?.x > 0.0 && currentPosition?.y >= 0.0) {
      moveX -= delta * speed;
      moveY += delta * speed;
    }
    else if (currentPosition?.x > -3.5 && currentPosition?.y >= 0.0) {
      moveX -= delta * speed;
      moveY -= delta * speed;
    }
    else {
      moveX = -3.5;
      moveY = 0.0;
    }

    redManTriangleBodyRef.current?.setTranslation({
      x:  moveX,
      y:  moveY,
      z:  redManTriangleBodyRef.current?.translation().z
  }, true)

  })

  return (
    <RigidBody ref={redManTriangleBodyRef} type="fixed" position={position}>
      <group ref={redManTriangleRef} dispose={null} scale={2.5}>
        <group name="Scene">
          <group name="Rigid">
            <skinnedMesh
              name="RedManTriangle"
              geometry={nodes.RedManTriangle.geometry}
              material={materials.redManTriangleMaterial}
              skeleton={nodes.RedManTriangle.skeleton}
            />
            <primitive object={nodes.root} />
          </group>
        </group>
      </group>
    </RigidBody>

  )
}

useGLTF.preload('/assets/models/red-mens/RedManTriangle.glb')
