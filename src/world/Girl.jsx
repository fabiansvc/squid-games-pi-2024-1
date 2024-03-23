import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Girl(props) {
  const { nodes, materials } = useGLTF('/assets/models/girl/Girl.glb')
  const dressGirlRef = useRef()

  const onHandleGirlClick = (e) => {
    // console.log("distance", e.distance); // Distancia entre la cámara y el punto de contacto del rayo.
    // console.log("point", e.point); // Punto de coordenadas en 3D de donde hizo el contacto del rayo en el objeto.
    // console.log("uv", e.uv); // Punto de coordenadas en 2D de donde hizo el contacto el rayo con la geometría.
    // console.log("object", e.object); // Retorna el objeto que fue interceptado.
    // console.log("eventObject", e.eventObject); // Retorna el objeto que escucho el evento.
    // console.log("x", e.x); // Retorna las coordenadas 2D del puntero del mouse en la posición x.
    // console.log("y", event.y); // Retorna las coordenadas 2D del puntero del mouse en la posición y.
    // console.log("shiftKey", e.shiftKey); // retorna true si el evento fue realizado presionando la tecla shiftKey.
    // console.log("ctrlKey", e.shiftKey); // retorna true si el evento fue realizado presionando la tecla ctrlKey.
    // console.log("metaKey", e.metaKey); // retorna true si el evento fue realizado presionando la tecla metaKey.
    dressGirlRef.current.material.color.set(`hsl(${Math.random()*360}, 100%, 50%)`)
  }

  return (
    <group dispose={null}>
      <group onClick={(e) => onHandleGirlClick(e)} name='Girl'>
        <group name='BodyGirl' >
          <mesh geometry={nodes.BodyGirl_1.geometry} material={materials.shoesMaterial} />
          <mesh geometry={nodes.BodyGirl_2.geometry} material={materials.sockMaterial} />
          <mesh geometry={nodes.BodyGirl_3.geometry} material={materials.skinMaterial} />
          <mesh ref={dressGirlRef} geometry={nodes.BodyGirl_4.geometry} material={materials.dressMaterial} />
          <mesh geometry={nodes.BodyGirl_5.geometry} material={materials.shirtMaterial} />
        </group>
        <group name='HeadGirl'>
          <mesh geometry={nodes.HeadGirl_1.geometry} material={materials.skinMaterial} />
          <mesh geometry={nodes.HeadGirl_2.geometry} material={materials.whiteEyeMaterial} />
          <mesh geometry={nodes.HeadGirl_3.geometry} material={materials.eyesMaterial} />
          <mesh geometry={nodes.HeadGirl_4.geometry} material={materials.hairMaterial} />
          <mesh geometry={nodes.HeadGirl_5.geometry} material={materials.ribbonMaterial} />
        </group>
      </group>
      {props.children}
    </group>
  )
}

useGLTF.preload('/assets/models/girl/Girl.glb')
