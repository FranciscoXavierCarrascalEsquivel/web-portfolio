"use client";

import { motion } from "framer-motion";

export default function Loader() {
    return (
        <div className="flex items-center justify-center w-full h-[calc(100vh-200px)]">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-gray-800 border-t-green-500 rounded-full"
            />
        </div>
    );
}
