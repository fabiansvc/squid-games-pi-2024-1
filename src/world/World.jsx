import { useGLTF } from "@react-three/drei"


export default function World(props) {
    const { nodes, materials } = useGLTF("/assets/models/world/WorldSquidGames.glb")

    return (
        <group {...props} dispose={null}>
            <group>
                <mesh geometry={nodes.Walls.geometry} material={materials.wallMaterial} />
                <mesh receiveShadow={true} geometry={nodes.Floor.geometry} material={materials.floorMaterial} />
                <mesh castShadow={true} geometry={nodes.WoodenFence.geometry} material={materials.woodMaterial} />
                <mesh onClick={(e)=>e.stopPropagation()} geometry={nodes.Stalk.geometry} material={materials.stalkMaterial} />
            </group>
        </group>
    );
}

useGLTF.preload("/assets/models/world/WorldSquidGames.glb");

