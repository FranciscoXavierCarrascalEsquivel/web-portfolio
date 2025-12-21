"use client";

import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

function AutoRotate() {
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // Gentle rotation
        state.camera.position.x = Math.sin(time * 0.2) * 5;
        state.camera.position.z = Math.cos(time * 0.2) * 5;
        state.camera.lookAt(0, 0, 0);
    });
    return null;
}

const technologies = [
    // Row 1
    { name: "Next.js", color: "#000000", row: 0, col: 0 },
    { name: "React", color: "#61DAFB", row: 0, col: 1 },
    { name: "TypeScript", color: "#3178C6", row: 0, col: 2 },
    { name: "Tailwind", color: "#06B6D4", row: 0, col: 3 },
    // Row 2
    { name: "Three.js", color: "#000000", row: 1, col: 0 },
    { name: "Docker", color: "#2496ED", row: 1, col: 1 },
    { name: "Firebase", color: "#FFCA28", row: 1, col: 2 },
    { name: "JavaScript", color: "#F7DF1E", row: 1, col: 3 },
    // Row 3
    { name: "C++", color: "#00599C", row: 2, col: 0 },
    { name: "C#", color: "#239120", row: 2, col: 1 },
    { name: "Java", color: "#007396", row: 2, col: 2 },
    { name: "Python", color: "#3776AB", row: 2, col: 3 },
];

interface KeyProps {
    tech: typeof technologies[0];
}

function Key({ tech }: KeyProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);

    useFrame((_state, _delta) => {
        if (meshRef.current) {
            const targetY = clicked ? -0.1 : hovered ? 0.2 : 0;
            meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.2;
        }
    });

    const x = (tech.col - 1.5) * 1.2;
    const z = (tech.row - 1) * 1.2;

    return (
        <group position={[x, 0, z]}>
            <mesh
                ref={meshRef}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                onPointerDown={() => setClicked(true)}
                onPointerUp={() => setClicked(false)}
            >
                <boxGeometry args={[1, 0.3, 1]} />
                <meshStandardMaterial
                    color={tech.color}
                    emissive={hovered ? tech.color : "#000000"}
                    emissiveIntensity={hovered ? 0.3 : 0}
                    metalness={0.5}
                    roughness={0.3}
                />
            </mesh>
            <Text
                position={[0, 0.16, 0]}
                fontSize={0.12}
                color={tech.name === "Next.js" || tech.name === "Three.js" ? "#FFFFFF" : "#000000"}
                anchorX="center"
                anchorY="middle"
            >
                {tech.name}
            </Text>
        </group>
    );
}

export default function TechKeyboard3D() {
    return (
        <div className="h-[500px] w-full">
            <Canvas camera={{ position: [0, 3, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                {technologies.map((tech, i) => (
                    <Key key={i} tech={tech} />
                ))}

                {/* Manual rotation to avoid OrbitControls event listener issues */}
                <AutoRotate />
            </Canvas>
        </div>
    );
}
