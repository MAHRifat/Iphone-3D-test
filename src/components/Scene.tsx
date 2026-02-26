"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from "@react-three/drei"
import * as THREE from 'three'
import { Suspense } from "react"
import { IPhoneModel } from "./iPhoneModel"

export default function Scene() {
    return (
        <div className="w-full h-screen bg-gray-300">
            <Canvas shadows={{ type: THREE.PCFShadowMap }}>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={35} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <directionalLight position={[-5, 5, 5]} intensity={0.5} />

                <Suspense fallback={null}>
                    <group rotation={[0, -Math.PI / 6, 0]} position={[0, -0.2, 0]}>
                        <IPhoneModel scale={.14} />
                    </group>
                    <Environment preset="city" />
                    <ContactShadows
                        position={[0, -1.5, 0]}
                        opacity={0.4}
                        scale={10}
                        blur={2.5}
                        far={4}
                    />
                </Suspense>

                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    minPolarAngle={Math.PI / 2.2}
                    maxPolarAngle={Math.PI / 2.2}
                />
            </Canvas>
        </div>
    )
}
