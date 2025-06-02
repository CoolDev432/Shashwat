import React from "react";
import ThreeModel2 from "@/app/components/ThreeModel2";
import { motion } from "framer-motion";

function Contact(props) {
    return (
        <div id={`contact`} className="flex flex-col md:flex-row justify-center items-center w-full py-20 gap-10 bg-black">
            {/* 3D Model */}
            <div className=" md:w-1/2 flex justify-center items-center mb-10 md:mb-0 ">
                <ThreeModel2 />
            </div>
            {/* Contact Form */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start bg-slate-900 rounded-3xl p-8 max-w-md mx-auto shadow-xl">
                <h1 className="font-bold text-4xl md:text-5xl text-white mb-8">
                    Contact Me!
                </h1>
                <form
                    action="https://formsubmit.co/shashwat3796@gurukultheschool.com"
                    method="POST"
                    className="flex flex-col gap-5 w-full"
                >
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        className="w-full p-4 rounded-2xl bg-white text-black font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                    />
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email"
                        className="w-full p-4 rounded-2xl bg-white text-black font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                    />
                    <textarea
                        name="message"
                        required
                        placeholder="Your Message"
                        rows={5}
                        className="w-full p-4 rounded-2xl bg-white text-black font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500 transition resize-none"
                    />
                    {/* Optional: disable CAPTCHA */}
                    <input type="hidden" name="_captcha" value="false" />
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            opacity: 0.85,
                        }}
                        type="submit"
                        className="w-full bg-orange-600 text-white font-bold py-3 rounded-2xl mt-2 hover:bg-orange-700 transition"
                    >
                        Contact Me
                    </motion.button>
                </form>
            </div>
        </div>
    );
}

export default Contact;