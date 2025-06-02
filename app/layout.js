import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// --- Start of comprehensive Metadata ---
export const metadata = {
    // 1. Basic Metadata (Title, Description)
    title: {
        default: "Shashwat Singh | Full-stack Developer & Creator", // Default title for your homepage
        template: "%s | Shashwat Singh", // Template for other pages (e.g., "About | Shashwat Singh")
    },
    description: "Explore the portfolio and blog of Shashwat Singh, a passionate Full-stack Developer, focused on building impactful web applications and innovative solutions.",

    // 2. Keywords (for search engines, though less impactful than content)
    keywords: [
        "Shashwat Singh",
        "Full-stack Developer",
        "Web Development",
        "Software Engineer",
        "Portfolio",
        "Blog",
        "React",
        "Next.js",
        "Node.js",
        "JavaScript",
        "TypeScript",
        // Add more relevant keywords specific to your skills/niche
    ],

    // 3. Canonical URL (to prevent duplicate content issues)
    alternates: {
        canonical: "https://shashwatsingh.tech/", // Your main domain
    },

    // 4. Authors (optional, for content attribution)
    authors: [{ name: "Shashwat Singh", url: "https://shashwatsingh.tech" }],

    // 5. Open Graph (for social media sharing like Facebook, LinkedIn)
    openGraph: {
        title: "Shashwat Singh | Full-stack Developer & Creator",
        description: "Explore the portfolio and blog of Shashwat Singh, a passionate Full-stack Developer, focused on building impactful web applications and innovative solutions.",
        url: "https://shashwatsingh.tech/", // The URL that will be shared
        siteName: "Shashwat Singh's Portfolio", // The name of your website
        images: [
            {
                url: "https://shashwatsingh.tech/og-image.jpg", // Path to your Open Graph image (e.g., a banner for social media)
                width: 1200,
                height: 630,
                alt: "Shashwat Singh's Portfolio and Blog",
            },
            // You can add more image objects if you have variations
        ],
        locale: "en_US", // Language locale
        type: "website", // Type of content (e.g., article, website, profile)
    },

    // 6. Twitter Card (for Twitter sharing)
    twitter: {
        card: "summary_large_image", // Can be 'summary', 'summary_large_image', 'app', or 'player'
        title: "Shashwat Singh | Full-stack Developer & Creator",
        description: "Explore the portfolio and blog of Shashwat Singh, a passionate Full-stack Developer, focused on building impactful web applications and innovative solutions.",
        // You can specify more properties like site and domain
    },

    // 7. Robots (for controlling search engine crawling)
    robots: {
        index: true, // Allow search engines to index this page
        follow: true, // Allow search engines to follow links on this page
        nocache: true, // Request search engines to not cache the page
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true, // Don't index images on this page
            "max-video-preview": -1, // Allow full video preview
            "max-snippet": -1, // Allow full snippet
        },
    },

    // 8. Viewport (optional, for responsive design)
    viewport: "width=device-width, initial-scale=1",

    // 9. Apple Web App (for iOS devices saving to home screen)
    appleWebApp: {
        capable: true,
        title: "Shashwat Singh",
        statusBarStyle: "default",
        // startUpImage: [], // You can define startup images here
    },

    // 10. Favicons/Icons (you'll usually put these files in your `public` directory)
    icons: {
        icon: "/favicon.ico",
}};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}