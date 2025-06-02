import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
    return (
        <div id={'projects'} className="relative min-h-screen px-4 py-16 md:px-16 overflow-hidden z-10 mt-10">
            <div className="absolute w-[300px] h-[300px] md:w-[700px] md:h-[300px] bg-purple-900/20 rounded-full blur-3xl z-0 top-0 left-0" />

            <h1 className="relative z-10 font-bold text-5xl sm:text-6xl md:text-8xl lg:text-[120px] leading-tight">
                my projects <span className="text-orange-700">.</span>
            </h1>

            <div className="relative z-10 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
                <Cards title="LadyCom" desc="LadyCom is a community of women supporting each other during tough times, sharing stories, and raising their voices to be heard. By joining this movement, you’re not just speaking out — you’re becoming a part of something powerful. One voice may not change the world, but a united community will." image="/lady-com.png" linkSite={`https://lady-com.vercel.app`} />

                <Cards title="BlogIn" desc="BlogIn is a platform where people can share their thoughts by writing blogs. It has a variety of features, such as-A Centralized Viewing Area and Competitions." image="/blogin.png" linkSite={`https://blog-in-main-oonc.vercel.app/`}/>
            </div>
        </div>
    )
}

const Cards = ({ title, desc, image, linkSite }) => {
    return (
        <Link href={linkSite} className={`cursor-pointer`} to={linkSite}>
        <div
            className={`
                bg-gradient-to-br from-slate-900 via-gray-900 to-purple-950
                border border-white/10
                shadow-2xl
                rounded-3xl
                p-6
                w-80
                flex flex-col items-center
                hover:scale-105 hover:shadow-purple-700/30 transition-all duration-300 ease-in-out
                group
            `}
        >

            <div className="w-72 h-52 rounded-2xl overflow-hidden transition-all duration-300 relative flex items-center justify-center rounded-4xl">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-contain rounded-4xl"
                    sizes="(max-width: 768px) 100vw, 208px"
                    priority
                />
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-2 text-center tracking-tight drop-shadow-md group-hover:text-purple-400 transition-colors duration-300">
                {title}
            </h2>
            <p className="text-base font-medium text-slate-300 text-center">
                {desc}
            </p>
        </div>
        </Link>
    )
}

export default Projects