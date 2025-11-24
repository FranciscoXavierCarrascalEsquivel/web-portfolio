"use client";

import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame, ThreeElements, ThreeEvent, useThree } from "@react-three/fiber";
import { Image, Environment, ScrollControls, useScroll, Line, Sparkles } from "@react-three/drei";
import { easing } from "maath";

export default function Carousel3D() {
    return (
        <div className="h-full w-full [&::-webkit-scrollbar]:hidden touch-action-pan-y" style={{ scrollbarWidth: "none", touchAction: "pan-y" }}>
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
    const { gl } = useThree();

    // Rotation state
    const lastScrollTime = useRef(Date.now());
    const autoRotation = useRef(0);
    const previousScrollOffset = useRef(0);
    const baseRotationOffset = useRef(0);

    // Drag state
    const isDragging = useRef(false);
    const previousMouseX = useRef(0);
    const dragRotation = useRef(0);
    const lastDragTime = useRef(0);

    useEffect(() => {
        const canvas = gl.domElement;

        const handlePointerDown = (e: PointerEvent) => {
            isDragging.current = true;
            previousMouseX.current = e.clientX;
            lastDragTime.current = Date.now();
        };

        const handlePointerMove = (e: PointerEvent) => {
            if (!isDragging.current) return;

            const deltaX = e.clientX - previousMouseX.current;
            previousMouseX.current = e.clientX;

            // Rotate based on drag distance (adjust sensitivity as needed)
            dragRotation.current += deltaX * 0.005;
            lastDragTime.current = Date.now();
        };

        const handlePointerUp = () => {
            isDragging.current = false;
        };

        canvas.addEventListener("pointerdown", handlePointerDown);
        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerup", handlePointerUp);

        return () => {
            canvas.removeEventListener("pointerdown", handlePointerDown);
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerup", handlePointerUp);
        };
    }, [gl.domElement]);

    useFrame((state, delta) => {
        if (ref.current) {
            // Detect if scroll has changed
            if (Math.abs(scroll.offset - previousScrollOffset.current) > 0.001) {
                if (Date.now() - lastScrollTime.current > 5000) {
                    baseRotationOffset.current += autoRotation.current;
                }
                lastScrollTime.current = Date.now();
                previousScrollOffset.current = scroll.offset;
                autoRotation.current = 0;
            }

            // Check if we should auto-rotate (no interaction for 5s)
            const timeSinceLastScroll = Date.now() - lastScrollTime.current;
            const timeSinceLastDrag = Date.now() - lastDragTime.current;
            const shouldAutoRotate = timeSinceLastScroll > 5000 && timeSinceLastDrag > 5000 && !isDragging.current;

            if (shouldAutoRotate) {
                autoRotation.current += delta * 0.1;
            }

            // Apply rotation: base scroll + base offset + auto-rotation + drag
            ref.current.rotation.y = -scroll.offset * (Math.PI * 2) + baseRotationOffset.current + autoRotation.current + dragRotation.current;
        }
        state.events.update?.();
        easing.damp3(
            state.camera.position,
            [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
            0.3,
            delta
        );
        state.camera.lookAt(0, 0, 0);
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

    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            setScale(window.innerWidth < 768 ? 0.6 : 1);
        };
        handleResize(); // Set initial
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <group scale={[scale, scale, scale]}>
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
        </group>
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
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
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
