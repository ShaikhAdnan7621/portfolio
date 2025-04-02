import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
    return {
        title: "Shaikh Adnan | Frontend Developer & AI Enthusiast",
        description: "Shaikh Adnan - A passionate Frontend Developer specializing in React.js, Next.js, and AI-driven automation.",
        openGraph: {
            title: "Shaikh Adnan | Frontend Developer & AI Enthusiast",
            description: "Explore my portfolio showcasing projects in React.js, Next.js, and AI-driven automation.",
            url: "https://officialad.vercel.app/",
            siteName: "Shaikh Adnan Portfolio",
            images: [
                {
                    url: "https://officialad.vercel.app/profile-pic.jpg", // Replace with your actual image
                    width: 1200,
                    height: 630,
                    alt: "Shaikh Adnan - Frontend Developer & AI Enthusiast",
                },
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Shaikh Adnan | Frontend Developer & AI Enthusiast",
            description: "Frontend Developer skilled in React.js, Next.js, and AI-driven automation.",
            images: ["https://officialad.vercel.app/profile-pic.jpg"], // Update with actual social image URL
        },
    };
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
