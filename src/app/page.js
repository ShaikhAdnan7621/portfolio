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
} from "react-icons/fa";
import {
    SiMongodb,
    SiTailwindcss,
    SiGooglesheets,
    SiWindows,
} from "react-icons/si";
// import {  } from "react-icons/fa"; // Import social media icons
const projects = [
    {
        title: "Games Zone",
        description:
            "A fun and interactive website featuring two engaging games: Memory Tiles and Catch the Box. Challenge yourself with a typing test to boost your typing speed and accuracy. This project showcases my ability to create engaging user experiences with Next.js and Tailwind CSS.",
        technologies: ["Next.js", "Tailwind CSS", "Javascript"],
        link: "https://checkmytype.vercel.app",
    },
    {
        title: "Tech Showroom",
        description:
            "A dynamic website that displays phone data, showcasing my understanding of CRUD operations in a real-world context. Built with Next.js, Tailwind CSS, and MongoDB, this project demonstrates my proficiency in building interactive web applications with a database backend.",
        technologies: ["Next.js", "Tailwind CSS", "MongoDB", "AOS Animations"],
        link: "https://tech-showroom.vercel.app",
    },
    {
        title: "Todo List",
        description:
            "A user-friendly todo list application designed for efficient task management. Built with Next.js and Tailwind CSS, this project highlights my ability to create functional and visually appealing interfaces.  Users can add, edit, delete, and reorder tasks, ensuring a smooth and organized workflow.",
        technologies: ["Next.js", "Tailwind CSS", "Javascript"],
        link: "https://merekam.vercel.app",
    },
    {
        title: "I love Surat",
        description:
            "A website dedicated to the city of Surat, India, showcasing its rich historical and cultural heritage. Built with HTML, CSS and  Bootstrap this project demonstrates my ability to create visually appealing and user-friendly websites.",
        technologies: ["HTML", "CSS", "Bootstrap"],
        link: "https://allbyadnan.netlify.app/project%201/",
    },
    
    {
        title: "PROPrompter",
        description:
            "A web application built with Next.js, Tailwind CSS, and React.js, powered by the Gemini API and MongoDB. It offers a platform to store, share, and discover useful prompts for various tasks.",
        technologies: ["Gemini API","Next.js", "Tailwind CSS", "MongoDB",],
        link: "https://pro-prompter.vercel.app",
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
];

export default function Home() {
    const [activeNav, setActiveNav] = useState("home");

    const handleNavClick = (nav) => {
        setActiveNav(nav);
    };

    return (
        <div className="bg-gray-100 min-h-screen font-sans">
            <Head>
                <title>Shaikh Adnan - Frontend Developer</title>
                <meta
                    name="description"
                    content="Portfolio website of Shaikh Adnan, a frontend developer."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav className="flex justify-between items-center px-4 py-2 bg-white shadow-md fixed w-full z-10">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold text-gray-800 mr-4">
                        Shaikh Adnan
                    </h1>
                </div>

                <ul
                    className={`hidden md:flex space-x-8 font-medium text-gray-600 ${
                        activeNav === "home" ? "text-blue-500" : ""
                    }`}
                >
                    <li
                        className={`cursor-pointer ${
                            activeNav === "home"
                                ? "text-blue-500"
                                : "text-gray-600"
                        }`}
                    >
                        <a href="#home" onClick={() => handleNavClick("home")}>
                            <AiOutlineHome size={24} />
                        </a>
                    </li>
                    <li
                        className={`cursor-pointer ${
                            activeNav === "about"
                                ? "text-blue-500"
                                : "text-gray-600"
                        }`}
                    >
                        <a
                            href="#about"
                            onClick={() => handleNavClick("about")}
                        >
                            <AiOutlineUser size={24} />
                        </a>
                    </li>
                    <li
                        className={`cursor-pointer ${
                            activeNav === "skills"
                                ? "text-blue-500"
                                : "text-gray-600"
                        }`}
                    >
                        <a
                            href="#skills"
                            onClick={() => handleNavClick("skills")}
                        >
                            <AiOutlineBook size={24} />
                        </a>
                    </li>
                    <li
                        className={`cursor-pointer ${
                            activeNav === "projects"
                                ? "text-blue-500"
                                : "text-gray-600"
                        }`}
                    >
                        <a
                            href="#projects"
                            onClick={() => handleNavClick("projects")}
                        >
                            <AiOutlineProject size={24} />
                        </a>
                    </li>
                    <li
                        className={`cursor-pointer ${
                            activeNav === "contact"
                                ? "text-blue-500"
                                : "text-gray-600"
                        }`}
                    >
                        <a
                            href="#contact"
                            onClick={() => handleNavClick("contact")}
                        >
                            <AiOutlineMail size={24} />
                        </a>
                    </li>
                </ul>
            </nav>

            <main className="py-16 lg:px-10">
                <section id="home" className="container mx-auto px-4">
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src="/profile-pic.jpg" // Replace with your profile picture
                            alt="Shaikh Adnan"
                            width={200}
                            height={200}
                            className="rounded-full mb-4"
                        />
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">
                            Shaikh Adnan
                        </h1>
                        <h2 className="text-lg font-medium text-gray-600 mb-4">
                            Frontend Developer
                        </h2>
                        <p className="text-gray-500 mb-6">
                            {
                                "A passionate and motivated Frontend Developer seeking a challenging opportunity to utilize my skills in HTML, CSS, Javascript, React.js, Next.js, and MongoDB to create innovative and user-friendly web applications."
                            }
                        </p>
                        <a
                            href="#projects"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                        >
                            View Projects
                        </a>
                    </div>
                </section>

                <section id="about" className="container mx-auto px-4 mt-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        About Me
                    </h2>
                    <p className="text-gray-500 mb-6">
                        {
                            "I'm a dedicated frontend developer with a passion for creating engaging and user-friendly web experiences. My journey began with a strong foundation in fundamental technologies like HTML, CSS, and Javascript. Over time, I've expanded my skills to include popular frameworks and libraries such as React.js, Next.js, and MongoDB. I'm constantly eager to learn new technologies and keep my skillset sharp."
                        }
                    </p>
                    <p className="text-gray-500 mb-6">
                        {
                            "Beyond technical expertise, I'm a collaborative team player and I believe in the importance of clear communication and effective problem-solving. I'm always looking for opportunities to contribute my skills to meaningful projects and learn from experienced professionals."
                        }
                    </p>
                </section>

                <section id="skills" className="container mx-auto px-4 mt-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        My Skills
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md "
                            >
                                <span className="text-5xl text-blue-500">
                                    {skill.icon}
                                </span>
                                <h3 className="text-lg font-medium text-gray-800 mt-2">
                                    {skill.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="projects" className="container mx-auto px-4 mt-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        My Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <div
                                key={project.title}
                                className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out hover:shadow-xl flex flex-col justify-between"
                            >
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-500 mb-4">
                                        {project.description}
                                    </p>
                                    <ul className="flex space-x-2 flex-wrap">
                                        {project.technologies.map(
                                            (technology) => (
                                                <li
                                                    key={technology}
                                                    className="text-gray-600 font-medium"
                                                >
                                                    {technology}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <div className="p-4 bg-gray-100 flex justify-center items-center">
                                    <a
                                        href={project.link}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="contact" className="container mx-auto px-4 mt-8">
                    <div className="container mx-auto px-4 py-12 bg-gray-200 rounded-lg shadow-md mt-8 ">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                            {"Let's Connect"}
                        </h2>
                        <div className="flex flex-col items-center space-y-4">
                            <p className="text-gray-500 text-center">
                                {
                                    " I'd love to hear from you! Feel free to reach out through any of the channels below."
                                }
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 ">
                                <a
                                    href="mailto:shaikhadnan7621@gmail.com"
                                    className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 focus:outline-none focus:ring focus:ring-blue-300 w-40 h-12 mt-2" // Added w-40 class
                                >
                                    <CgMail className="mr-2" />
                                    Email
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/shaikhadnan7621"
                                    className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 focus:outline-none focus:ring focus:ring-blue-300 w-40 h-12 mt-2" // Added w-40 class
                                >
                                    <FaLinkedinIn className="mr-2" />
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com/ShaikhAdnan7621" // Replace with your Github URL
                                    className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 focus:outline-none focus:ring focus:ring-blue-300 w-40 h-12 mt-2" // Added w-40 class
                                >
                                    <FaGithub className="mr-2" />
                                    GitHub
                                </a>
                                <a
                                    href="https://www.instagram.com/mr_silent7621/" // Replace with your Instagram URL
                                    className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 focus:outline-none focus:ring focus:ring-blue-300 w-40 h-12 mt-2" // Added w-40 class
                                >
                                    <FaInstagram className="mr-2" />
                                    Instagram
                                </a>
                                <a
                                    href="https://twitter.com/ShaikhAdnan7622"
                                    className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 focus:outline-none focus:ring focus:ring-blue-300 w-40 h-12 mt-2" // Added w-40 class
                                >
                                    <FaTwitter className="mr-2" />
                                    Twitter
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-4 ">
                <div className="container mx-auto text-center">
                    <p>© 2023 Shaikh Adnan. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
