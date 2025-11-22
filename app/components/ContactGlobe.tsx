"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
    const sphereRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.y += 0.005;
            sphereRef.current.rotation.x += 0.002;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1, 64, 64]} ref={sphereRef} scale={2.0} position={[0, 1.5, 0]}>
                <MeshDistortMaterial
                    color="#22c55e"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </Sphere>
            <Sphere args={[0.8, 32, 32]} scale={1.3} position={[0, 1.5, 0]}>
                <meshStandardMaterial
                    color="#4ade80"
                    emissive="#22c55e"
                    emissiveIntensity={0.5}
                    roughness={0.5}
                    metalness={1}
                    wireframe
                />
            </Sphere>
        </Float>
    );
}

export default function ContactGlobe() {
    return (
        <div
            className="w-full h-[400px] lg:h-[600px] relative cursor-move"
            style={{
                maskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
                WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 70%)"
            }}
        >
            <Canvas camera={{ position: [0, 0, 6] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#4ade80" />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <AnimatedSphere />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}
