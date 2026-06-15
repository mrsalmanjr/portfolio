'use client';

import { Text } from "@react-three/drei";

import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import CloudContainer from "../models/Cloud";
import StarsContainer from "../models/Stars";
import WindowModel from "../models/WindowModel";
import TextWindow from "./TextWindow";

const Hero = () => {
  const titleRef = useRef<THREE.Group>(null);
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100 && titleRef.current) {
      gsap.fromTo(titleRef.current.position, {
        y: -10,
        duration: 1,
        // delay: 1.5,
      }, {
        y: 0,
        duration: 3
      });
    }
  }, [progress]);

  const fontProps = {
    font: "./soria-font.ttf",
    fontSize: 1.2,
  };

  return (
    <>
      <group position={[0, 0, -10]} ref={titleRef}>
        <Text position={[0, 2.8, 0]} {...fontProps}>Hi, I am Salman Kotabal.</Text>
        <Text 
          position={[0, 1.5, 0]} 
          font="./Vercetti-Regular.woff" 
          fontSize={0.45} 
          color="white" 
          maxWidth={14} 
          textAlign="center" 
          lineHeight={1.4}
          anchorY="top"
          outlineWidth={0.015}
          outlineColor="#000000"
        >
          Full-Stack Developer and AI Evaluation Specialist with experience in building modern web applications and contributing to AI model improvement projects. Skilled in React, TypeScript, Python, Supabase, and modern web technologies, with a strong interest in Generative AI and product development. Experienced in evaluating AI systems, reviewing code-related tasks, and improving response quality, reasoning, and accuracy. Passionate about transforming ideas into scalable digital products and continuously learning emerging technologies. Currently pursuing an MCA while building innovative solutions and startup-focused platforms.
        </Text>
      </group>
      <StarsContainer />
      <CloudContainer/>
      <group position={[0, -25, 5.69]}>
        <pointLight castShadow position={[1, 1, -2.5]} intensity={60} distance={10}/>
        <WindowModel receiveShadow/>
        <TextWindow/>
      </group>
    </>
  );
};

export default Hero;
