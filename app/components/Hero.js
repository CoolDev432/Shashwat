'use client'

import React from 'react';
import ThreeScene from "@/app/components/ThreeModel";
import { motion } from "framer-motion";
import { SiFacebook, SiInstagram, SiTwitch } from "react-icons/si";

const Hero = () => {
    return (
        <div className="relative bg-black h-[130vh]">

            {/* Content */}
            <div className="relative flex justify-center items-center h-[70vh] w-full">
                <div className='bg-purple-900/20 p-60 absolute rounded-[200px] blur-2xl'>

                </div>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-sans font-bold text-7xl md:text-9xl z-10 text-center text-white"
                >
                    <motion.span
                        className="whitespace-normal inline-block"
                        initial={{ y: 50 }}
                        animate={{ y: -30, delay: 2 }}
                    >
                        shashwat
                    </motion.span>
                    <br />
                    <motion.span
                        initial={{ y: 50 }}
                        animate={{ y: -30, delay: 2 }}
                    >
                        singh
                    </motion.span>
                    <span className="text-orange-700">.</span>
                </motion.h1>

                <motion.div
                    className="absolute inset-0 z-20 pointer-events-none md:mt-0 mt-30"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: -20 }}
                >
                    <ThreeScene />
                </motion.div>
            </div>

            {/* Socials */}
            <div className="w-full flex justify-center items-center h-20 gap-10 text-4xl text-white relative">
                <h1>
                    socials <span className="text-orange-500">:</span>
                </h1>
                <SiInstagram className="hover:text-pink-700 cursor-pointer transition-all" />
                <SiTwitch className="hover:text-purple-900 cursor-pointer transition-all" />
                <SiFacebook className="hover:text-blue-500 cursor-pointer transition-all" />
            </div>
        </div>
    );
};

export default Hero;
