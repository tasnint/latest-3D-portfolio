/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: gourav.das3650 (https://sketchfab.com/gourav.das3650)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/stylized-vehicle-autorickshaw-b40307aeeafb42be928b4181551dcb61
Title: Stylized Vehicle AutoRickshaw
*/
"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Roof_Cover1_Rickshaw_0"
        castShadow
        receiveShadow
        geometry={nodes.Roof_Cover1_Rickshaw_0.geometry}
        material={materials.Rickshaw}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        name="Body6_Windshield_0"
        castShadow
        receiveShadow
        geometry={nodes.Body6_Windshield_0.geometry}
        material={materials.Windshield}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')

