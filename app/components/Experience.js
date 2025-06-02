import React from 'react';

const Experience = () => {
    const skills = [
        {
            title: "JavaScript (3+ Years)",
            desc: "Strong understanding of ES6+, DOM manipulation, async programming, and using JavaScript for both client-side and server-side development.",
        },
        {
            title: "React.js",
            desc: "Built interactive, component-based web apps using Hooks, Context API, and conditional rendering. Familiar with performance optimization and state management.",
        },
        {
            title: "Next.js",
            desc: "Experience with full-stack features like API routes, dynamic routing, static generation (SSG), and server-side rendering (SSR) to build SEO-friendly apps.",
        },
        {
            title: "Tailwind CSS",
            desc: "Skilled at building clean, responsive UI layouts quickly using Tailwind's utility classes and customizing themes for consistent design systems.",
        },
        {
            title: "Framer Motion",
            desc: "Used to create smooth, interactive animations that improve user experience, including scroll-based effects, transitions, and hover interactions.",
        },
        {
            title: "C++ (DSA)",
            desc: "Solid grasp of algorithms and data structures such as arrays, linked lists, trees, graphs, and sorting techniques — useful for coding competitions and logic building.",
        },
    ];

    return (
        <div id="experience" className="flex flex-col md:flex-row relative w-full">
            {/* Left: Title and Skill Icons */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex items-center justify-center z-10">
                <div className="relative w-full">
                    <div className="absolute top-0 left-0 w-full h-full bg-purple-900/20 rounded-[100px] md:rounded-[190px] blur-3xl -z-10"></div>
                    <h1 className="font-bold text-4xl sm:text-6xl md:text-[90px] lg:text-[120px] leading-tight">
                        my skills <span className="text-orange-700">.</span>
                    </h1>
                </div>
            </div>

            {/* Right: Scrollable Skills Section */}
            <div className="w-full md:w-1/2 px-4 py-10 sm:px-6 md:py-20 overflow-y-auto max-h-[80vh] md:max-h-none">
                {skills.map((skill, index) => (
                    <div key={index} className="mt-8">
                        <h2 className="font-bold text-xl sm:text-2xl md:text-4xl mb-2">{skill.title}</h2>
                        <p className="text-base font-medium text-white/60">{skill.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;