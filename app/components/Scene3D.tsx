"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

function AnimatedSphere() {
    const meshRef = useRef<Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Rotate the sphere gently
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <Sphere args={[1, 100, 200]} scale={2} ref={meshRef}>
                <MeshDistortMaterial
                    color="#4ade80" // Green-400 to match the theme
                    attach="material"
                    distort={0.4} // Amount of distortion
                    speed={2} // Speed of distortion
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
}

export default function Scene3D() {
    return (
        <div className="h-[400px] w-full">
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 5, 2]} intensity={1} />
                <AnimatedSphere />
            </Canvas>
        </div>
    );
}
