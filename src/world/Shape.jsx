import { BallCollider, CapsuleCollider, CuboidCollider, RigidBody } from "@react-three/rapier"
import { useEffect, useRef } from "react"

export default function Shape(props) {
    const shapeBodyRef = useRef()

    const onHandleTorus = () => {
        shapeBodyRef.current.applyImpulse({ x: 0, y: 10, z: 0 }, true)
    }

    useEffect(() => {
        // shapeBodyRef.current.addForce({x:0, y:0, z:10}, true)
    }, [shapeBodyRef.current])

    const onCollisionEnter = ({ manifold, target, other }) => {
        console.log(
            "Collision at world position ",
            manifold.solverContactPoint(0)
        );

        if (other.rigidBodyObject) {
            console.log(
                // this rigid body's Object3D
                target.rigidBodyObject.name,
                " collided with ",
                // the other rigid body's Object3D
                other.rigidBodyObject.name
            );
        }
    }

    const onCollisionExit = (e) => {
        console.log('Collision Exit', e)
    }

    return (
        <RigidBody
            ref={shapeBodyRef}
            position={props.position}
            colliders="hull"
            onCollisionEnter={(e) => onCollisionEnter(e)}
            onCollisionExit={(e) => onCollisionExit(e)}
            name="ShapeBody"
        >
            <mesh onClick={onHandleTorus}>
                <torusGeometry args={[1, 0.4, 16, 100]} />
                <meshStandardMaterial color="orange" />
            </mesh>
        </RigidBody>
    )
}