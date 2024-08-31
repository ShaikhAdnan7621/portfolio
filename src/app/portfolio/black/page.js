"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineBook,
    AiOutlineProject,
    AiOutlineMail,
} from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import {
    FaHtml5,
    FaJs,
    FaReact,
    FaCss3,
    FaFileExcel,
    FaPython,
    FaBootstrap,
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaTwitter,
    FaNodeJs,
    FaFigma,
    FaWix,
} from "react-icons/fa";
import {
    SiMongodb,
    SiTailwindcss,
    SiGooglesheets,
    SiWindows,
    SiArduino,
    SiOpencv,
    SiNextdotjs,
    SiCanva,
    SiVisualstudiocode,
} from "react-icons/si";
import { GiJourney } from "react-icons/gi";
import Link from "next/link";

const projects = [
    {
        title: "Games Zone",
        description:
            "A fun and interactive website featuring two engaging games: Memory Tiles and Catch the Box. Challenge yourself with a typing test to boost your typing speed and accuracy. This project showcases my ability to create engaging user experiences with Next.js and Tailwind CSS.",
        technologies: ["Next.js", "Tailwind CSS", "Javascript"],
        link: "https://checkmytype.vercel.app",
        githubLink: "https://github.com/ShaikhAdnan7621/checkmytype"
    },
    {
        title: "Tech Showroom",
        description:
            "A dynamic website that displays phone data, showcasing my understanding of CRUD operations in a real-world context. Built with Next.js, Tailwind CSS, and MongoDB, this project demonstrates my proficiency in building interactive web applications with a database backend.",
        technologies: ["Next.js", "Tailwind CSS", "Javascript", "MongoDB", "AOS Animation"],
        link: "https://tech-showroom.vercel.app",
        githubLink: "https://github.com/ShaikhAdnan7621/Tech-Showroom"
    },
    {
        title: "Todo List",
        description:
            "A user-friendly todo list application designed for efficient task management. Built with Next.js and Tailwind CSS, this project highlights my ability to create functional and visually appealing interfaces.  Users can add, edit, delete, and reorder tasks, ensuring a smooth and organized workflow.",
        technologies: ["Next.js", "Tailwind CSS", "Javascript"],
        link: "https://merekam.vercel.app",
        githubLink: "https://github.com/ShaikhAdnan7621/merekam"
    },
    {
        title: "I love Surat",
        description:
            "A website dedicated to the city of Surat, India, showcasing its rich historical and cultural heritage. Built with HTML, CSS and  Bootstrap this project demonstrates my ability to create visually appealing and user-friendly websites.",
        technologies: ["HTML", "CSS", "Bootstrap"],
        link: "https://allbyadnan.netlify.app/project%201/",
        githubLink: "#" // Placeholder - Add actual link if available
    },
    {
        title: "PROPrompter",
        description: `a web application built with Next.js, Tailwind CSS, and React.js, powered by the Gemini API and MongoDB. It offers a platform to store, share, and discover useful prompts for various tasks.`,
        technologies: ["Gemini API", "Next.js", "Tailwind CSS", "Javascript", "Mongodb"],
        link: "https://pro-prompter.vercel.app/",
        githubLink: "https://github.com/ShaikhAdnan7621/PROPrompter"
    },
    {
        title: "TechBrust",
        description: "An e-commerce web application built with Wix Studio, showcasing a curated selection of fashion products and accessories.",
        technologies: ["Wix Studio"],
        link: "https://techbrust.in",
    },
];

const skills = [
    {
        icon: <FaHtml5 />,
        name: "HTML",
    },
    {
        icon: <FaCss3 />,
        name: "CSS",
    },
    {
        icon: <FaJs />,
        name: "Javascript",
    },
    {
        icon: <FaReact />,
        name: "React.js",
    },
    {
        icon: <SiNextdotjs />,
        name: "Next.js",
    },
    {
        icon: <FaNodeJs />,
        name: "Node.js",
    },
    {
        icon: <SiMongodb />,
        name: "MongoDB",
    },
    {
        icon: <FaPython />,
        name: "Python",
    },
    {
        icon: <SiTailwindcss />,
        name: "Tailwind CSS",
    },
    {
        icon: <FaBootstrap />,
        name: "Bootstrap",
    },
    {
        icon: <SiGooglesheets />,
        name: "Google Sheets",
    },
    {
        icon: <SiWindows />,
        name: "Tally Prime",
    },
    {
        icon: <FaFileExcel />,
        name: "Advance Excel",
    },
    {
        icon: <SiArduino />,
        name: "Arduino",
    },
    {
        icon: <SiOpencv />,
        name: "OpenCV",
    },
    {
        icon: <SiCanva />,
        name: "Canva",
    },
    {
        icon: <FaFigma />,
        name: "Figma",
    },
    {
        icon: <SiVisualstudiocode />,
        name: "VS Code",
    },
    {
        icon: <FaGithub />,
        name: "GitHub",
    },
    {
        icon: <FaWix />,
        name: "Wix Studio",
    },
];

export default function Home() {
    const [activeNav, setActiveNav] = useState("home");

    const handleNavClick = (nav) => {
        setActiveNav(nav);
    };

    return (
        <div className="bg-gray-900 min-h-screen font-sans text-white">
            <Head>
                <title>Shaikh Adnan - Frontend Developer</title>
                <meta
                    name="description"
                    content="Portfolio website of Shaikh Adnan, a frontend developer."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav className="flex justify-between items-center px-4 py-2 bg-gray-800 shadow-md fixed w-full z-10">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold text-orange-500 mr-4">
                        Shaikh Adnan
                    </h1>
                </div>

                <ul
                    className={`hidden md:flex space-x-8 font-medium text-gray-400 ${activeNav === "home" ? "text-orange-500" : ""
                        }`}
                >
                    <li
                        className={`cursor-pointer ${activeNav === "home" ? "text-orange-500" : "text-gray-400"
                            }`}
                    >
                        <a href="#home" onClick={() => handleNavClick("home")}>
                            <AiOutlineHome size={24} />
                        </a>
                    </li>
                    <li
                        className={`cursor-pointer ${activeNav === "about" ? "text-orange-500" : "text-gray-400"
                            }`}
                    >
                        <a href="#about" onClick={() => handleNavClick("about")}>
                            <AiOutlineUser size={24} />
                        </a>
                    </li>
                    <li
                        className={`cursor-pointer ${activeNav === "skills" ? "text-orange-500" : "text-gray-400"
                            }`}
                    >
                        <a href="#skills" onClick={() => handleNavClick("skills")}>
                            <AiOutlineBook size={24} />
                        </a>
                    </li>
                    <li
                        className={`cursor-pointer ${activeNav === "projects" ? "text-orange-500" : "text-gray-400"
                            }`}
                    >
                        <a href="#projects" onClick={() => handleNavClick("projects")}>
                            <AiOutlineProject size={24} />
                        </a>
                    </li>
                    <li
                        className={`cursor-pointer ${activeNav === "timeline" ? "text-orange-500" : "text-gray-400"
                            }`}
                    >
                        <a href="#timeline" onClick={() => handleNavClick("timeline")}>
                            <GiJourney size={24} />
                        </a>
                    </li>
                    <li
                        className={`cursor-pointer ${activeNav === "contact" ? "text-orange-500" : "text-gray-400"
                            }`}
                    >
                        <a href="#contact" onClick={() => handleNavClick("contact")}>
                            <AiOutlineMail size={24} />
                        </a>
                    </li>
                </ul>
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
                        <h1 className="text-4xl font-bold text-orange-500 mb-2">
                            Shaikh Adnan
                        </h1>
                        <h2 className="text-lg font-medium text-gray-400 mb-4">
                            Frontend Developer
                        </h2>
                        <p className="text-gray-400 mb-6">
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

                <section id="about" className="container mx-auto px-4 pt-16">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">
                        About Me
                    </h2>
                    <p className="text-gray-400 mb-3">
                        {
                            "I'm a dedicated frontend developer with a passion for creating engaging and user-friendly web experiences. My journey began with a strong foundation in fundamental technologies like HTML, CSS, and Javascript. Over time, I've expanded my skills to include popular frameworks and libraries such as React.js, Next.js, and MongoDB. I'm constantly eager to learn new technologies and keep my skillset sharp."
                        }
                    </p>
                    <p className="text-gray-400 mb-6">
                        {
                            "Beyond technical expertise, I'm a collaborative team player and I believe in the importance of clear communication and effective problem-solving. I'm always looking for opportunities to contribute my skills to meaningful projects and learn from experienced professionals."
                        }
                    </p>
                    <div className="text-left">
                        <Link href="/resume" target="_blank"> {/* Replace '/resume' with your actual resume page route */}
                            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                                View My Resume
                            </button>
                        </Link>
                    </div>
                </section>

                <section id="skills" className="container mx-auto px-4 pt-16">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">
                        My Skills
                    </h2>
                    <div className="flex flex-wrap gap-3 md:gap-6 justify-center w-full">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-md w-32 md:52 hover:scale-105 transition duration-300 ease-in-out"
                            >
                                <span className="text-3xl md:text-5xl text-orange-500">{skill.icon}</span>
                                <h3 className="text-sm md:text-md font-medium text-orange-500 mt-3 text-center">
                                    {skill.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="projects" className="container mx-auto px-4 pt-16">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">
                        My Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <div
                                key={project.title}
                                className="bg-gray-800 rounded-lg overflow-hidden transition duration-300 ease-in-out shadow-md hover:shadow-xl flex flex-col justify-between hover:scale-105 "
                            >
                                <div className="p-3 md:p-6">
                                    <h3 className="text-xl font-bold text-orange-500 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4">{project.description}</p>
                                    <ul className="flex flex-wrap">
                                        {project.technologies.map((technology) => (
                                            <li
                                                key={technology}
                                                className="text-gray-400 font-medium mr-2"
                                            >
                                                {technology}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-4 bg-gray-700 flex justify-center items-center">
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

                <section id="timeline" className="container mx-auto px-4 pt-16 ">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6">
                        Life Journey
                    </h2>
                    <div className="relative pt-3">
                        <div className="absolute top-1/2 left-1/2  w-1 h-full bg-gray-700 -translate-x-1/2 -translate-y-1/2 "></div>
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
                                        <div className="p-4 bg-gray-800 shadow-md hover:shadow-lg rounded-lg md:w-3/4 w-4/5 hover:scale-105 transition duration-300 ease-in-out ">
                                            <p className="text-gray-400 mb-2">- Completed secondary school education in Shegaon, Maharashtra, with a strong academic record, achieving 77% in the Secondary School Certificate (SSC) examination.</p>
                                            <p className="text-gray-400 mb-2">- Furthered my technical skills by obtaining an Advance Diploma in Computer Application (ADCA) from the Center Technical Organization (CTO), demonstrating a strong foundation in computer fundamentals.</p>
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
                                        <div className="p-4 bg-gray-800 shadow-md hover:shadow-lg rounded-lg md:w-3/4 w-4/5 hover:scale-105 transition duration-300 ease-in-out">
                                            <p className="text-gray-400 mb-2">- Successfully completed higher secondary education (HSC) in Shegaon, Maharashtra, achieving 67% marks.</p>
                                            <p className="text-gray-400 mb-2">- Further expanded my skillset with certifications in Advanced Tally and Advanced Excel, gaining practical knowledge in financial accounting software and advanced spreadsheet functionalities.</p>
                                            <p className="text-gray-400 mb-2">- Embarked on a self-learning journey in Python programming, demonstrating a proactive approach to expanding my technical capabilities.</p>
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
                                        <div className="p-4 bg-gray-800 shadow-md hover:shadow-lg rounded-lg md:w-3/4 w-4/5 hover:scale-105 transition duration-300 ease-in-out">
                                            <p className="text-gray-400 mb-2">- Gained valuable practical experience as a Data Entry Operator at Leemboodi Fashion, contributing to their operations by managing inventory records and maintaining data accuracy.</p>
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
                                        <div className="p-4 bg-gray-800 shadow-md hover:shadow-lg rounded-lg md:w-3/4 w-4/5 hover:scale-105 transition duration-300 ease-in-out">
                                            <p className="text-gray-400 mb-2">- Engaged in freelance data entry projects, further honing my attention to detail and proficiency in data management. </p>
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
                                        <div className="p-4 bg-gray-800 shadow-md hover:shadow-lg rounded-lg md:w-3/4 w-4/5 hover:scale-105 transition duration-300 ease-in-out">
                                            <p className="text-gray-400 mb-2">- Currently working as a Social Media Executive at Ajmera Fashion, effectively managing YouTube channels, implementing engaging content strategies, and optimizing social media presence.</p>
                                            <p className="text-gray-400 mb-2">- Simultaneously pursuing a Bachelor of Computer Application (BCA) through a distance learning program at the Hindustan Institute of Technology & Science (HITS), demonstrating a commitment to expanding my knowledge and skills in the field of computer applications.  </p>
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
                                        <div className="p-4 bg-gray-800 shadow-md hover:shadow-lg rounded-lg md:w-3/4 w-4/5 hover:scale-105 transition duration-300 ease-in-out">
                                            <p className="text-gray-400 mb-2">- Immersed myself in self-directed learning of web development, building a strong foundation in HTML, CSS, JavaScript, React.js, Next.js, MongoDB, Bootstrap, Tailwind CSS, and Python, demonstrating my passion for continuous learning and skill development.</p>
                                        </div>
                                        <div className="w-1/5 md:w-1/4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="container mx-auto px-4 pt-16">
                    <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
                        Get in Touch
                    </h2>
                    <div className="flex flex-col items-center space-y-6">
                        <p className="text-gray-400 text-center">
                            I'm always open to collaborating on exciting projects! Feel free to
                            reach out through any of the channels below.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                                href="https://github.com/ShaikhAdnan7621"
                                className="flex items-center justify-center bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 focus:outline-none focus:ring focus:ring-orange-300"
                            >
                                <FaGithub className="mr-2" />
                                GitHub
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

            <footer className="bg-gray-900 text-gray-400 py-4 ">
                <div className="container mx-auto text-center">
                    <p>© 2023 Shaikh Adnan. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}