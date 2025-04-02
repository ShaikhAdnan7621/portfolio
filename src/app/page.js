"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { generateMetadata } from "./metadata"; 

import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineBook,
    AiOutlineProject,
    AiOutlineMail,
} from "react-icons/ai";
import { CgDarkMode, CgMail } from "react-icons/cg";
import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaTwitter,
    FaFacebook,
    FaYoutube
} from "react-icons/fa";
import { GiJourney } from "react-icons/gi";
import Link from "next/link";
import { skills } from "@/app/data/skillsData";
import { projects } from "@/app/data/projectsData";

export async function generateMetadata() {
    return {
        title: "Shaikh Adnan | Frontend Developer & AI Enthusiast",
        description: "Shaikh Adnan - A passionate Frontend Developer specializing in React.js, Next.js, and AI-driven automation. Building dynamic, user-friendly web applications and innovative AI-powered tools.",
        openGraph: {
            title: "Shaikh Adnan | Frontend Developer & AI Enthusiast",
            description: "Explore my portfolio showcasing projects in React.js, Next.js, and AI-driven automation. Passionate about building scalable and dynamic web applications.",
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
            description: "Frontend Developer skilled in React.js, Next.js, and AI-driven automation. Check out my portfolio for exciting projects!",
            images: ["https://officialad.vercel.app/profile-pic.jpg"], // Update with your actual social image
        },
    };
}


export default function Home() {
    const [activeNav, setActiveNav] = useState("home");

    const handleNavClick = (nav) => {
        setActiveNav(nav);
    };


    return (
        <div className="bg-white min-h-screen font-sans text-gray-900"> {/* Changed background to white */}
 

            <nav className=" px-4 py-2 bg-gray-100 shadow-md fixed w-full z-10"> {/* Changed background to light gray */}
                <div className=" flex justify-between items-center lg:px-10 max-w-[1320px] mx-auto">
                    <div className="  md:flex hidden items-center pl-4">
                        <h1 className="text-2xl font-bold text-orange-500 mr-4 uppercase">
                            Shaikh Adnan
                        </h1>
                    </div>

                    <ul
                        className={`mx-auto md:m-0 flex space-x-8 font-medium text-gray-600 pr-4 ${activeNav === "home" ? "text-orange-500" : ""}`}
                    >
                        <li
                            className={`cursor-pointer ${activeNav === "home" ? "text-orange-500" : "text-gray-600"
                                }`}
                        >
                            <a href="#home" onClick={() => handleNavClick("home")}>
                                <AiOutlineHome size={24} />
                            </a>
                        </li>
                        <li
                            className={`cursor-pointer ${activeNav === "about" ? "text-orange-500" : "text-gray-600"
                                }`}
                        >
                            <a href="#about" onClick={() => handleNavClick("about")}>
                                <AiOutlineUser size={24} />
                            </a>
                        </li>
                        <li
                            className={`cursor-pointer ${activeNav === "skills" ? "text-orange-500" : "text-gray-600"
                                }`}
                        >
                            <a href="#skills" onClick={() => handleNavClick("skills")}>
                                <AiOutlineBook size={24} />
                            </a>
                        </li>
                        <li
                            className={`cursor-pointer ${activeNav === "projects" ? "text-orange-500" : "text-gray-600"
                                }`}
                        >
                            <a href="#projects" onClick={() => handleNavClick("projects")}>
                                <AiOutlineProject size={24} />
                            </a>
                        </li>
                        <li
                            className={`cursor-pointer ${activeNav === "timeline" ? "text-orange-500" : "text-gray-600"
                                }`}
                        >
                            <a href="#timeline" onClick={() => handleNavClick("timeline")}>
                                <GiJourney size={24} />
                            </a>
                        </li>
                        <li
                            className={`cursor-pointer ${activeNav === "contact" ? "text-orange-500" : "text-gray-600"
                                }`}
                        >
                            <a href="#contact" onClick={() => handleNavClick("contact")}>
                                <AiOutlineMail size={24} />
                            </a>
                        </li>
                        <li
                            className={`cursor-pointer ${activeNav === "black" ? "text-orange-500" : "text-gray-600"
                                }`}
                        >
                            <a href="/black" onClick={() => handleNavClick("contact")}>
                                <CgDarkMode size={24} />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <main className="py-16 lg:px-10 max-w-[1320px] mx-auto">
                <section id="home" className="container mx-auto px-4 ">
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src="/profile-pic.jpg" // Replace with your profile picture
                            alt="Shaikh Adnan"
                            width={200}
                            height={200}
                            className="rounded-full mb-4"
                        />
                        <h1 className="text-4xl font-bold text-orange-500 mb-1 uppercase">
                            Shaikh Adnan
                        </h1>
                        <h2 className="text-lg font-medium text-gray-600 mb-4"> {/* Changed text color to dark gray */}
                            Frontend Developer
                        </h2>
                        <p className="text-gray-600 mb-6"> {/* Changed text color to dark gray */}
                            {
                                "A passionate and motivated Frontend Developer seeking a challenging opportunity to utilize my skills in HTML, CSS, Javascript, React.js, Next.js, and MongoDB to create innovative and user-friendly web applications."
                            }
                        </p>
                        <a
                            href="#projects"
                            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                        >
                            View Projects
                        </a>
                    </div>
                </section>

                <hr className=" border-orange-500 my-16" />

                <section id="about" className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-orange-500 mb-10">
                        About Me
                    </h2>
                    <p className="text-gray-600 mb-3"> {/* Changed text color to dark gray */}
                        {
                            "I'm a dedicated frontend developer with a passion for creating engaging and user-friendly web experiences. My journey began with a strong foundation in fundamental technologies like HTML, CSS, and Javascript. Over time, I've expanded my skills to include popular frameworks and libraries such as React.js, Next.js, and MongoDB. I'm constantly eager to learn new technologies and keep my skillset sharp."
                        }
                    </p>
                    <p className="text-gray-600 mb-6"> {/* Changed text color to dark gray */}
                        {
                            "Beyond technical expertise, I'm a collaborative team player and I believe in the importance of clear communication and effective problem-solving. I'm always looking for opportunities to contribute my skills to meaningful projects and learn from experienced professionals."
                        }
                    </p>
                    <div className="text-left">
                        <Link href="/resume" target="_blank"> {/* Replace '/resume' with your actual resume page route */}
                            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 opacity-90">
                                View My Resume
                            </button>
                        </Link>
                    </div>
                </section>
                <hr className=" border-orange-500 my-16" />
                <section id="skills" className="container mx-auto px-4 ">
                    <h2 className="text-3xl font-bold text-center text-orange-500 mb-10">
                        My Skills
                    </h2>
                    <div className="flex flex-wrap gap-3 md:gap-6 justify-center w-full">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="flex flex-col items-center justify-center p-4 bg-gray-200 rounded-lg shadow-md w-32 md:52 hover:scale-105 transition duration-300 ease-in-out"
                            //  {/* Changed background to light gray */}
                            >
                                <span className="text-3xl md:text-5xl text-orange-500">{skill.icon}</span>
                                <h3 className="text-sm md:text-md font-medium text-orange-500 mt-3 text-center">
                                    {skill.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </section>

                <hr className=" border-orange-500 my-16" />

                <section id="projects" className="container mx-auto px-4 ">
                    <h2 className="text-3xl font-bold text-center text-orange-500 mb-10">
                        My Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <div
                                key={project.title}
                                className="bg-gray-100 rounded-lg overflow-hidden transition duration-300 ease-in-out shadow-md hover:shadow-xl flex flex-col justify-between hover:scale-105 "
                            >
                                <div className="p-3 md:p-6">
                                    <h3 className="text-xl font-bold text-orange-500 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4"> {/* Changed text color to dark gray */}
                                        {project.description}</p>
                                    <ul className="flex flex-wrap">
                                        {project.technologies.map((technology) => (
                                            <li
                                                key={technology}
                                                className="text-gray-600 font-medium mr-2"
                                            // {/* Changed text color to dark gray */}
                                            >
                                                {technology}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-4 bg-gray-200 flex justify-center items-center"> {/* Changed background to lighter gray */}
                                    <a
                                        href={project.link}
                                        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-2 md:py-2 md:px-4  rounded"
                                    >
                                        View Project
                                    </a>
                                    {
                                        project.githubLink &&
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center ml-2 bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded  "
                                        >
                                            <FaGithub /> Repo Link
                                        </a>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <hr className=" border-orange-500 my-16" />

                <section id="timeline" className="container mx-auto px-4 ">
                    <h2 className="text-3xl font-bold text-center text-orange-500 mb-10">
                        Life Journey
                    </h2>
                    <div className="relative pt-3">
                        <div className="absolute top-1/2 left-1/2  w-1 h-full bg-gray-300 -translate-x-1/2 -translate-y-1/2 "></div> {/* Changed line color to lighter gray */}
                        <div className="relative">
                            <div className="">
                                <div className="mb-8">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-medium text-orange-500 w-1/2 pr-3 text-right">
                                            2018 - 2020
                                        </h3>
                                        <div className="w-1/2"></div>
                                    </div>

                                    <div className="flex items-center ">
                                        <div className="w-1/5 md:w-1/4"></div>
                                        <div className="p-4 bg-gray-100 shadow-md hover:shadow-lg rounded-lg md:w-3/4 w-4/5 hover:scale-105 transition duration-300 ease-in-out "> {/* Changed background to lighter gray */}
                                            <p className="text-gray-600 mb-2">- Completed secondary school education in Shegaon, Maharashtra, with a strong academic record, achieving 77% in the Secondary School Certificate (SSC) examination.</p> {/* Changed text color to dark gray */}
                                            <p className="text-gray-600 mb-2">- Furthered my technical skills by obtaining an Advance Diploma in Computer Application (ADCA) from the Center Technical Organization (CTO), demonstrating a strong foundation in computer fundamentals.</p> {/* Changed text color to dark gray */}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="w-1/2"></div>
                                        <h3 className="text-lg font-medium text-orange-500 w-1/2 pl-3 text-left">
                                            2020 - 2022
                                        </h3>
                                    </div>

                                    <div className="flex items-center ">
                                        <div className="p-4 bg-gray-100 shadow-md hover:shadow-lg rounded-lg md:w-3/4 w-4/5 hover:scale-105 transition duration-300 ease-in-out"> {/* Changed background to lighter gray */}
                                            <p className="text-gray-600 mb-2">- Successfully completed higher secondary education (HSC) in Shegaon, Maharashtra, achieving 67% marks.</p> {/* Changed text color to dark gray */}
                                            <p className="text-gray-600 mb-2">- Further expanded my skillset with certifications in Advanced Tally and Advanced Excel, gaining practical knowledge in financial accounting software and advanced spreadsheet functionalities.</p> {/* Changed text color to dark gray */}
                                            <p className="text-gray-600 mb-2">- Embarked on a self-learning journey in Python programming, demonstrating a proactive approach to expanding my technical capabilities.</p> {/* Changed text color to dark gray */}
                                        </div>
                                        <div className="w-1/5 md:w-1/4"></div>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-medium text-orange-500 w-1/2 pr-3 text-right">
                                            July 2022 - March 2023
                                        </h3>
                                        <div className="w-1/2"></div>
                                    </div>
                                    <div className="flex items-center ">
                                        <div className="w-1/5 md:w-1/4"></div>
                                        <div className="p-4 bg-gray-100 shadow-md hover:shadow-lg rounded-lg md:w-3/4 w-4/5 hover:scale-105 transition duration-300 ease-in-out"> {/* Changed background to lighter gray */}
                                            <p className="text-gray-600 mb-2">- Gained valuable practical experience as a Data Entry Operator at Leemboodi Fashion, contributing to their operations by managing inventory records and maintaining data accuracy.</p> {/* Changed text color to dark gray */}
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="w-1/2"></div>
                                        <h3 className="text-lg font-medium text-orange-500 w-1/2 pl-3 text-left">
                                            March 2023 - June 2023
                                        </h3>
                                    </div>
                                    <div className="flex items-center ">
                                        <div className="p-4 bg-gray-100 shadow-md hover:shadow-lg rounded-lg md:w-3/4 w-4/5 hover:scale-105 transition duration-300 ease-in-out"> {/* Changed background to lighter gray */}
                                            <p className="text-gray-600 mb-2">- Engaged in freelance data entry projects, further honing my attention to detail and proficiency in data management. </p> {/* Changed text color to dark gray */}
                                        </div>
                                        <div className="w-1/5 md:w-1/4"></div>
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-medium text-orange-500 w-1/2 pr-3 text-right">
                                            August 2023 - Present
                                        </h3>
                                        <div className="w-1/2"></div>
                                    </div>
                                    <div className="flex items-center ">
                                        <div className="w-1/5 md:w-1/4"></div>
                                        <div className="p-4 bg-gray-100 shadow-md hover:shadow-lg rounded-lg md:w-3/4 w-4/5 hover:scale-105 transition duration-300 ease-in-out"> {/* Changed background to lighter gray */}
                                            <p className="text-gray-600 mb-2">- Currently working as a Social Media Executive at Ajmera Fashion, effectively managing YouTube channels, implementing engaging content strategies, and optimizing social media presence.</p> {/* Changed text color to dark gray */}
                                            <p className="text-gray-600 mb-2">- Simultaneously pursuing a Bachelor of Computer Application (BCA) through a distance learning program at the Hindustan Institute of Technology & Science (HITS), demonstrating a commitment to expanding my knowledge and skills in the field of computer applications.  </p> {/* Changed text color to dark gray */}
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <div className="flex items-center justify-between mb-2  ">
                                        <div className="w-1/2"></div>
                                        <h3 className="text-lg font-medium text-orange-500 w-1/2 pl-3 text-left">
                                            Since Joining BCA
                                        </h3>
                                    </div>
                                    <div className="flex items-center ">
                                        <div className="p-4 bg-gray-100 shadow-md hover:shadow-lg rounded-lg md:w-3/4 w-4/5 hover:scale-105 transition duration-300 ease-in-out"> {/* Changed background to lighter gray */}
                                            <p className="text-gray-600 mb-2">- Immersed myself in self-directed learning of web development, building a strong foundation in HTML, CSS, JavaScript, React.js, Next.js, MongoDB, Bootstrap, Tailwind CSS, and Python, demonstrating my passion for continuous learning and skill development.</p> {/* Changed text color to dark gray */}
                                        </div>
                                        <div className="w-1/5 md:w-1/4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr className=" border-orange-500 my-16" />
                <section id="contact" className=" container mx-auto px-4 ">
                    <h2 className="text-3xl font-bold text-orange-500 mb-10 text-center">
                        Get in Touch
                    </h2>
                    <div className="flex flex-col  items-center space-y-6">
                        <p className="text-gray-600 text-center"> {/* Changed text color to dark gray */}
                            I'm always open to collaborating on exciting projects! Feel free to
                            reach out through any of the channels below.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center justify-center ">
                            <a
                                href="mailto:shaikhadnan7621@gmail.com"
                                className="flex items-center justify-center bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 focus:outline-none focus:ring focus:ring-orange-300"
                            >
                                <CgMail className="mr-2" />
                                Email
                            </a>
                            <a
                                href="https://www.linkedin.com/in/shaikhadnan7621"
                                className="flex items-center justify-center bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 focus:outline-none focus:ring focus:ring-orange-300"
                            >
                                <FaLinkedinIn className="mr-2" />
                                LinkedIn
                            </a>
                            <a
                                href="https://www.youtube.com/@CodeONfinGER"
                                className="flex items-center justify-center bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 focus:outline-none focus:ring focus:ring-orange-300"
                            >
                                <FaYoutube className="mr-2" />
                                Youtube
                            </a>
                            <a
                                href="https://github.com/ShaikhAdnan7621"
                                className="flex items-center justify-center bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 focus:outline-none focus:ring focus:ring-orange-300"
                            >
                                <FaGithub className="mr-2" />
                                GitHub
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=100074050533332"
                                className="flex items-center justify-center bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 focus:outline-none focus:ring focus:ring-orange-300"
                            >
                                <FaFacebook className="mr-2" />
                                FaceBook
                            </a>
                            <a
                                href="https://www.instagram.com/mr_silent7621/"
                                className="flex items-center justify-center bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 focus:outline-none focus:ring focus:ring-orange-300"
                            >
                                <FaInstagram className="mr-2" />
                                Instagram
                            </a>
                            <a
                                href="https://twitter.com/ShaikhAdnan7622"
                                className="flex items-center justify-center bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 focus:outline-none focus:ring focus:ring-orange-300"
                            >
                                <FaTwitter className="mr-2" />
                                Twitter
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-100 text-gray-600 py-4 "> {/* Changed background and text color to light gray */}
                <div className="container mx-auto text-center">
                    <p>© 2023 Shaikh Adnan. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
