"use client";

import * as THREE from "three";
import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, ThreeElements, ThreeEvent } from "@react-three/fiber";
import { Image, Environment, ScrollControls, useScroll, Line, Sparkles } from "@react-three/drei";
import { easing } from "maath";

export default function Carousel3D() {
    return (
        <div className="h-[500px] w-full [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
            <Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
                <ScrollControls pages={4} infinite style={{ scrollbarWidth: "none" }}>
                    <Rig rotation={[0, 0, 0.15]}>
                        <Carousel />
                    </Rig>
                </ScrollControls>
                <Environment preset="city" blur={0.5} />
                <Sparkles count={100} scale={5} size={4} speed={0.4} opacity={0.5} color="#4ade80" />
            </Canvas>
        </div>
    );
}

function Rig(props: ThreeElements['group']) {
    const ref = useRef<THREE.Group>(null);
    const scroll = useScroll();
    const lastScrollTime = useRef(Date.now());
    const autoRotation = useRef(0);
    const previousScrollOffset = useRef(0);
    const baseRotationOffset = useRef(0); // Track accumpulated auto-rotation

    useFrame((state, delta) => {
        if (ref.current) {
            // Detect if scroll has changed
            if (Math.abs(scroll.offset - previousScrollOffset.current) > 0.001) {
                // User is scrolling - capture current rotation as base
                if (Date.now() - lastScrollTime.current > 5000) {
                    // We were auto-rotating, so save the accumulated rotation
                    baseRotationOffset.current += autoRotation.current;
                }
                lastScrollTime.current = Date.now();
                previousScrollOffset.current = scroll.offset;
                autoRotation.current = 0; // Reset auto-rotation counter
            }

            // Check if 5 seconds have passed since last interaction
            const timeSinceLastScroll = Date.now() - lastScrollTime.current;
            const shouldAutoRotate = timeSinceLastScroll > 5000;

            if (shouldAutoRotate) {
                // Auto-rotate slowly
                autoRotation.current += delta * 0.1;
            }

            // Apply rotation: base scroll + base offset + auto-rotation
            ref.current.rotation.y = -scroll.offset * (Math.PI * 2) + baseRotationOffset.current + autoRotation.current;
        }
        state.events.update?.(); // Raycasts every frame rather than on pointer-move
        easing.damp3(
            state.camera.position,
            [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
            0.3,
            delta
        ); // Move camera
        state.camera.lookAt(0, 0, 0); // Look at center
    });
    return <group ref={ref} {...props} />;
}

function Carousel({ radius = 0.9, count = 3 }) {
    // Use available images, repeating them to fill the count
    const images = [
        "/imagenes/CafeteriaPUMAHoodie.png",
        "/imagenes/KikoFinalBoss.png",
        "/imagenes/Finestra.jpg",
    ];

    return (
        <>
            {Array.from({ length: count }, (_, i) => (
                <Card
                    key={i}
                    url={images[i % images.length]}
                    position={[
                        Math.sin((i / count) * Math.PI * 2) * radius,
                        0,
                        Math.cos((i / count) * Math.PI * 2) * radius,
                    ]}
                    rotation={[0, (i / count) * Math.PI * 2, 0]}
                />
            ))}
        </>
    );
}

type CardProps = ThreeElements['group'] & {
    url: string;
};

function Card({ url, ...props }: CardProps) {
    const ref = useRef<THREE.Group>(null);
    const [hovered, hover] = useState(false);

    const pointerOver = (e: ThreeEvent<PointerEvent>) => (e.stopPropagation(), hover(true));
    const pointerOut = () => hover(false);

    useFrame((state, delta) => {
        if (ref.current) {
            easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
        }
    });

    const borderPoints = useMemo(() => {
        const width = 1.45;
        const height = 1.05;
        const radius = 0.05;
        const shape = new THREE.Shape();
        const x = -width / 2;
        const y = -height / 2;

        shape.moveTo(x, y + radius);
        shape.lineTo(x, y + height - radius);
        shape.quadraticCurveTo(x, y + height, x + radius, y + height);
        shape.lineTo(x + width - radius, y + height);
        shape.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
        shape.lineTo(x + width, y + radius);
        shape.quadraticCurveTo(x + width, y, x + width - radius, y);
        shape.lineTo(x + radius, y);
        shape.quadraticCurveTo(x, y, x, y + radius);

        const points = shape.getPoints();
        points.push(points[0]); // Close the loop
        return points.map((p) => [p.x, p.y, 0] as [number, number, number]);
    }, []);

    return (
        <group ref={ref} {...props} onPointerOver={pointerOver} onPointerOut={pointerOut}>
            {/* Neon Green Border Line */}
            <Line points={borderPoints} color="#39ff14" lineWidth={3} toneMapped={false} />

            {/* Image Content */}
            <Image
                url={url}
                transparent
                side={THREE.DoubleSide}
                position={[0, 0, 0.01]} // Slightly in front
                scale={[1.4, 1.0]}
            />
        </group>
    );
}
