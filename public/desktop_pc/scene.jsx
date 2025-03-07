/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf --transform 
Files: scene.gltf [255.03KB] > C:\Users\tanis\Downloads\autorickshaw\scene-transformed.glb [1.78MB] (-597%)
Author: gourav.das3650 (https://sketchfab.com/gourav.das3650)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/stylized-vehicle-autorickshaw-b40307aeeafb42be928b4181551dcb61
Title: Stylized Vehicle AutoRickshaw
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/desktop_pc/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Roof_Cover1_Rickshaw_0.geometry} material={materials.Rickshaw} rotation={[-Math.PI, 0, -Math.PI]} scale={0.01} />
      <mesh geometry={nodes.Body6_Windshield_0.geometry} material={materials.Windshield} rotation={[-Math.PI, 0, -Math.PI]} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/desktop_pc/scene-transformed.glb');

