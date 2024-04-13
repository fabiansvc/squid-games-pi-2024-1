import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { useAvatar } from "../../../../context/AvatarContext";

export default function Avatar() {
    const avatarBodyRef = useRef();
    const avatarRef = useRef();
    const {setAvatar} = useAvatar();

    useEffect(()=>{
        setAvatar({
            ref: avatarRef.current,
            body: avatarBodyRef.current
        })
    }, [avatarBodyRef.current, avatarRef.current])
    
    return (
        <RigidBody ref={avatarBodyRef} position={[0, 1, -3]} colliders="ball">
            <mesh ref={avatarRef}>
                <sphereGeometry args={[0.2, 32, 32]} />
                <meshStandardMaterial color="red" />
            </mesh>
        </RigidBody>
    )
}