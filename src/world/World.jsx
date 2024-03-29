import { useGLTF } from "@react-three/drei"


export default function World(props) {
    const { nodes, materials } = useGLTF("/assets/models/world/WorldSquidGames.glb")

    return (
        <group {...props} dispose={null}>
            <group>
                <mesh onClick={(e)=>e.stopPropagation()} geometry={nodes.Walls.geometry} material={materials.wallMaterial} />
                <mesh onClick={(e)=>e.stopPropagation()} receiveShadow={true} geometry={nodes.Floor.geometry} material={materials.floorMaterial} />
                <mesh onClick={(e)=>e.stopPropagation()} castShadow={true} geometry={nodes.WoodenFence.geometry} material={materials.woodMaterial} />
                <mesh onClick={(e)=>e.stopPropagation()} geometry={nodes.Tree.geometry} material={materials.treeMaterial} />
            </group>
        </group>
    );
}

useGLTF.preload("/assets/models/world/WorldSquidGames.glb");

