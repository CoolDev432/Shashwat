'use client'
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import { useState, useEffect } from "react";
import {useLenis} from "@/app/hooks/useLenis";
import {motion} from "framer-motion"
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
    const [loading, setLoading] = useState(true);
    useLenis()

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <motion.h1 className="text-4xl font-bold" initial={{
                    scale: 1
                }} animate={{
                    scale: 5,
                    padding: 5,
                }} transition={{
                    duration: 1,
                    ease: "easeInOut",
                    repeatType: "loop"
                }}>
                    ss <span className={`text-orange-700`}>.</span>
                </motion.h1>
            </div>
        );
    }

    return (
        <div className={`h-[500vh]`}>
            <div className={`border-2 border-b-0 border-white border-dotted`}>
            <Navigation />
            <Hero />
            </div>
                <Experience />
                <Projects />
                <Contact />
                <Footer />
        </div>
    );
}