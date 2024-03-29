import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Girl() {
  const { nodes, materials } = useGLTF('/assets/models/girl/Girl.glb')

  return (
    <group dispose={null}>
      <group>
        <group >
          <mesh geometry={nodes.BodyGirl_1.geometry} material={materials.shoesMaterial} />
          <mesh geometry={nodes.BodyGirl_2.geometry} material={materials.sockMaterial} />
          <mesh geometry={nodes.BodyGirl_3.geometry} material={materials.skinMaterial} />
          <mesh geometry={nodes.BodyGirl_4.geometry} material={materials.dressMaterial} />
          <mesh geometry={nodes.BodyGirl_5.geometry} material={materials.shirtMaterial} />
        </group>
        <group>
          <mesh geometry={nodes.HeadGirl_1.geometry} material={materials.skinMaterial} />
          <mesh geometry={nodes.HeadGirl_2.geometry} material={materials.whiteEyeMaterial} />
          <mesh geometry={nodes.HeadGirl_3.geometry} material={materials.eyesMaterial} />
          <mesh geometry={nodes.HeadGirl_4.geometry} material={materials.hairMaterial} />
          <mesh geometry={nodes.HeadGirl_5.geometry} material={materials.ribbonMaterial} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/girl/Girl.glb')
