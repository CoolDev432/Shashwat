import React from 'react';
import { motion } from "framer-motion";

function Navigation(props) {
    // Helper scroll function
    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, duration: 0.9 }} className={`bg-black`}>
            <h1 className={`font-bold flex flex-col md:flex-row justify-between w-full p-6 items-center flex-wrap`}>
                <div className={`text-6xl text-white flex justify-evenly items-center mb-6`}>
                    ss <span className={`text-orange-700`}>.</span>
                </div>
                <div className={`flex justify-evenly text-white w-120 text-xl p-6 items-center`}>
                    <button
                        onClick={() => handleScroll('experience')}
                        className="hover:text-orange-500 cursor-pointer transition-colors focus:outline-none bg-transparent border-none mx-4"
                    >
                        my skills <span className={`text-orange-500`}>
                        .
                    </span>
                    </button>
                    <button
                        onClick={()=>handleScroll('projects')}
                        className="hover:text-orange-500 cursor-pointer transition-colors focus:outline-none bg-transparent border-none mx-4"
                    >
                        my projects <span className={`text-orange-500`}>
                        .
                    </span>
                    </button>
                    <button
                        onClick={()=>handleScroll('contact')}
                        className="hover:text-orange-500 cursor-pointer transition-colors focus:outline-none bg-transparent border-none mx-4"
                    >
                        contact me <span className={`text-orange-500`}>
                        .
                    </span>
                    </button>
                </div>
                <div>
                    <motion.button whileHover={{
                        scale: 1.2,
                        opacity: 0.8
                    }} className={`flex justify-evenly items-center mb-6 bg-white text-black p-3 rounded-4xl cursor-pointer`}>
                        Contact Me
                    </motion.button >
                </div>
            </h1>
        </motion.div>
    );
}

export default Navigation;