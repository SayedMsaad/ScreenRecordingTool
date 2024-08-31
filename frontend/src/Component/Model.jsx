import {Text, useGLTF,MeshTransmissionMaterial } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';
// import { useControls } from 'leva';

import React, { useEffect, useRef } from 'react'


const Model = () => {
    
    const mesh = useRef();
    const runOnce = useRef(false);
    const {nodes} = useGLTF('/media/donut.glb');
    const {viewport}= useThree();

    useFrame(()=>
    {
        mesh.current.rotation.x+=0.02;
        // mesh.current.rotation.y+=0.001;
        // mesh.current.rotation.z+=0.001;
        // if(mesh.current.position.x <= 5){
        //      mesh.current.position.x+=0.01;
             

        // }
        // else{
        //     mesh.current.position.x-=0.01;
        // }
       
        
       
    })
    useEffect(() => {
        if(!runOnce.current)
        mesh.current.rotation.z+=320;
        runOnce.current = true;
    }, [])

    // const materialProps = useControls({
    //   thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    //   roughness: { value: 0, min: 0, max: 1, step: 0.01 },
    //   transmission: { value: 1, min: 0, max: 1, step: 0.01 },
    //   ior: { value: 1.2, min: 0, max: 3, step: 0.01 },
    //   chromaticAberration: { value: 0.02, min: 0, max: 1, step: 0.01 },
    //   backside: { value: true },
    // });
    const materialProps = {
      thickness: 0.2,
      roughness:0,
      transmission:1,
      ior:1.2,
      chromaticAberration:0.02,
      backside:true,
    };
    
  return (
      <group scale={viewport.width/15}>
        <Text position={[0,0,-0.5]} fontSize={2} color={'white'}>Hello World!</Text>
        <mesh ref= {mesh} visible {...nodes.Torus} position={[0,0,0]}>
            <MeshTransmissionMaterial {...materialProps} />
        </mesh>
      </group>
  )
}

export default Model
