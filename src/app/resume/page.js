"use client";
import React, { useRef, useEffect } from 'react';
import {
    FaAward,
    FaGraduationCap,
    FaLaptopCode,
    FaRegBuilding,
    FaLink,
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaUser,
    FaFileExcel,

} from 'react-icons/fa';
import {
    SiGooglesheets,
    SiTailwindcss,
    SiReact,
    SiNextdotjs,
    SiMongodb,
    SiBootstrap,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiPython,
    SiWindows,
    SiArduino,
    SiOpencv,
    SiCanva,
    SiVisualstudiocode,
} from 'react-icons/si';
import jsPDF from 'jspdf'; // Import jsPDF library
import html2canvas from 'html2canvas';

const Resume = () => {
    const resumeRef = useRef(null); // Reference to the main resume element

    const handleDownloadPDF = () => {
        const input = resumeRef.current;

        html2canvas(input, {
            allowTaint: true,
            useCORS: true,
            scrollX: 0,
            scrollY: 0,
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');

            // A4 size in points (72 points per inch)
            const pageWidth = 595.28;
            const pageHeight = 841.89;

            // Create a portrait-oriented PDF
            const pdf = new jsPDF('p', 'pt', [pageWidth, pageHeight]);

            const imgWidth = canvas.width;
            const imgHeight = canvas.height;

            // Calculate the scaling factor to fit within A4 with some margin
            const margin = 10; // Adjust this value for desired margin
            const scaleFactor = Math.min(
                (pageWidth - margin * 2) / imgWidth,
                (pageHeight - margin * 2) / imgHeight
            );

            // Calculate image dimensions after scaling
            const scaledImgWidth = imgWidth * scaleFactor;
            const scaledImgHeight = imgHeight * scaleFactor;

            // Calculate position to center the image on the page
            const xPosition = (pageWidth - scaledImgWidth) / 2;
            const yPosition = (pageHeight - scaledImgHeight) / 2;

            // Add the image to the PDF at the calculated position
            pdf.addImage(imgData, 'PNG', xPosition, yPosition, scaledImgWidth, scaledImgHeight);

            pdf.save("resume.pdf");
        });
    };
    return (
        <div className='bg-gray-900 max-w-[1100px] mx-auto py-8'>
            <div ref={resumeRef} id="resume" className="bg-gray-900 min-h-screen font-sans text-white py-8 lg:px-10 max-w-[1100px] mx-auto">
                <h1 className="text-5xl font-bold text-orange-500 text-center mb-8 uppercase">
                    Shaikh Adnan
                </h1>
                <hr className='mb-3 border-orange-500' />
                <hr className='border-orange-500' />



                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 ">
                    {/* Left Column (Experience & Skills) */}
                    <div>
                        <h2 className="text-2xl font-bold text-orange-500 mb-4 flex items-center">
                            <FaUser className="inline-block mr-2" /> About Me
                        </h2>
                        <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
                            <p className="text-gray-400 mb-3">
                                I'm a dedicated frontend developer with a passion for creating engaging and user-friendly web experiences.
                                I'm constantly eager to learn new technologies and keep my skillset sharp.
                            </p>
                            <p className="text-gray-400 mb-6">
                                Beyond technical expertise, I'm a collaborative team player who values clear communication and effective problem-solving.
                                I'm always looking for opportunities to contribute to meaningful projects and learn from experienced professionals.
                            </p>
                        </div>

                        <hr className='mb-3 border-orange-500' />
                        <h2 className="text-2xl font-bold text-orange-500 mb-4">
                            <FaLaptopCode className="inline-block mr-2" /> Experience
                        </h2>
                        <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-medium text-white mb-2">
                                <FaRegBuilding className="inline-block mr-2" /> Social Media
                                Executive
                            </h3>
                            <p className="text-gray-400">Ajmera Fashion | Aug 2023 - Present</p>
                            <ul className="list-disc list-inside text-gray-400 ml-4">
                                <li>
                                    Manage YouTube channels, implementing engaging content
                                    strategies to increase brand visibility and engagement.
                                </li>
                                <li>
                                    Optimize social media presence across various platforms to grow
                                    audience reach and engagement.
                                </li>
                            </ul>
                        </div>


                        {/* Freelance Data Entry */}
                        <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-lg font-medium text-white mb-2">
                                <FaRegBuilding className="inline-block mr-2" /> Freelance Data
                                Entry Operator
                            </h3>
                            <p className="text-gray-400">Mar 2023 - Jun 2023</p>
                            <ul className="list-disc list-inside text-gray-400 ml-4">
                                <li>
                                    Independently handled diverse data entry projects, ensuring
                                    high levels of accuracy and timely completion.
                                </li>
                                <li>
                                    Proficiently managed large datasets, maintaining data integrity
                                    and confidentiality.
                                </li>
                            </ul>
                        </div>

                        {/* Data Entry Operator */}
                        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-medium text-white mb-2">
                                <FaRegBuilding className="inline-block mr-2" /> Data Entry
                                Operator
                            </h3>
                            <p className="text-gray-400">
                                Leemboodi Fashion | Jul 2022 - Mar 2023
                            </p>
                            <ul className="list-disc list-inside text-gray-400 ml-4">
                                <li>
                                    Maintained accurate and up-to-date inventory records using
                                    specialized software.
                                </li>
                                <li>
                                    Ensured data accuracy and consistency, contributing to smooth
                                    operational efficiency.
                                </li>
                            </ul>
                        </div>
                        <hr className='mt-4 border-orange-500' />

                        <div className="mt-3">
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">
                                <FaGraduationCap className="inline-block mr-2" /> Education
                            </h2>
                            <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
                                <h3 className="text-lg font-medium text-white mb-2">
                                    Bachelor of Computer Applications (BCA) - Pursuing
                                </h3>
                                <p className="text-gray-400">
                                    Hindustan Institute of Technology & Science (HITS)
                                </p>
                                <p className="text-gray-400">Expected Completion: 2026</p>
                            </div>

                            <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
                                <h3 className="text-lg font-medium text-white mb-2">
                                    Higher Secondary Certificate (HSC)
                                </h3>
                                <p className="text-gray-400">
                                    Maharashtra Board | Completion Year: 2022 | Percentage: 67%
                                </p>
                            </div>

                            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                                <h3 className="text-lg font-medium text-white mb-2">
                                    Secondary School Certificate (SSC)
                                </h3>
                                <p className="text-gray-400">
                                    Maharashtra Board | Completion Year: 2020 | Percentage: 77%
                                </p>
                            </div>
                        </div>

                    </div>

                    <div>

                        <div className="text-center md:text-left mb-6"> {/* Center on smaller screens, align left on larger */}
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">
                                <FaLink className="inline-block mr-2" /> Connect With Me
                            </h2>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start bg-gray-800 p-4 rounded-lg shadow-md">
                                <a
                                    href="https://www.linkedin.com/in/yourlinkedinprofile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex gap-1 text-md underline mr-3 text-gray-400 hover:text-orange-500 transition duration-300"
                                >
                                    LinkedinIn <FaLinkedinIn size={24} />
                                </a>
                                <a
                                    href="https://github.com/yourgithubprofile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex gap-1 text-md underline mr-3 text-gray-400 hover:text-orange-500 transition duration-300"
                                >
                                    Github <FaGithub size={24} />
                                </a>
                                <a
                                    href="https://instagram.com/yourinstagramProfile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex gap-1 text-md underline mr-3 text-gray-400 hover:text-orange-500 transition duration-300"
                                >
                                    Instagram <FaInstagram size={24} />
                                </a>
                                <a
                                    href="https://twitter.com/yourtwitterprofile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex gap-1 text-md underline mr-3 text-gray-400 hover:text-orange-500 transition duration-300"
                                >
                                    Twitter<FaTwitter size={24} />
                                </a>
                                {/* Add the contact number */}
                                <div className="flex gap-1 text-md underline mr-3 text-gray-400 hover:text-orange-500 transition duration-300">
                                    <span>Phone:</span>
                                    <a href="tel:+917621816774" className="underline">
                                        +91 7621816774
                                    </a>
                                </div>
                            </div>
                        </div>

                        <hr className='mt-4 border-orange-500' />
                        <div className="mt-3 mb-6">
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">
                                <FaAward className="inline-block mr-2" /> Skills
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {/* Frontend Skills */}
                                <span className="bg-orange-500 text-white px-2 py-1 rounded-md mr-2 mb-2 flex items-center">
                                    <SiHtml5 className="mr-1" /> HTML
                                </span>
                                <span className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2 mb-2 flex items-center">
                                    <SiCss3 className="mr-1" /> CSS
                                </span>
                                <span className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2 mb-2 flex items-center">
                                    <SiJavascript className="mr-1" /> JavaScript
                                </span>
                                <span className="bg-blue-400 text-white px-2 py-1 rounded-md mr-2 mb-2 flex items-center">
                                    <SiReact className="mr-1" /> React.js
                                </span>
                                <span className="bg-gray-800 text-white px-2 py-1 rounded-md mr-2 mb-2 flex items-center">
                                    <SiNextdotjs className="mr-1" /> Next.js
                                </span>

                                {/* Styling */}
                                <span className="bg-teal-500 text-white px-2 py-1 rounded-md mr-2 mb-2 flex items-center">
                                    <SiTailwindcss className="mr-1" /> Tailwind CSS
                                </span>
                                <span className="bg-purple-600 text-white px-2 py-1 rounded-md mr-2 mb-2 flex items-center">
                                    <SiBootstrap className="mr-1" /> Bootstrap
                                </span>

                                {/* Backend & Database */}
                                <span className="bg-green-600 text-white px-2 py-1 rounded-md mr-2 mb-2 flex items-center">
                                    Node.js
                                </span>
                                <span className="bg-green-500 text-white px-2 py-1 rounded-md mr-2 mb-2 flex items-center">
                                    <SiMongodb className="mr-1" /> MongoDB
                                </span>

                                {/* Other */}
                                <span className="bg-blue-700 text-white px-2 py-1 rounded-md mr-2 mb-2 flex items-center">
                                    <SiPython className="mr-1" /> Python
                                </span>
                                <span className="bg-red-600 text-white px-2 py-1 rounded-md mr-2 mb-2 flex items-center">
                                    <SiGooglesheets className="mr-1" /> Google Sheets
                                </span>
                                <span className="bg-blue-900 text-white px-2 py-1 rounded-md mr-2 mb-2 flex items-center">
                                    <SiWindows className="mr-1" /> Tally Prime
                                </span>
                                <span className="bg-pink-500 text-white px-2 py-1 rounded-md mr-2 mb-2 flex items-center">
                                    <SiCanva className="mr-1" /> Canva
                                </span>
                                <span className="bg-green-700 text-white px-2 py-1 rounded-md mr-2 mb-2 flex items-center">
                                    <FaFileExcel className="mr-1" /> Advanced Excel
                                </span>
                                <span className="bg-blue-300 text-white px-2 py-1 rounded-md mr-2 mb-2 flex items-center">
                                    <SiArduino className="mr-1" /> Arduino
                                </span>
                                <span className="bg-green-400 text-white px-2 py-1 rounded-md mr-2 mb-2 flex items-center">
                                    <SiOpencv className="mr-1" /> OpenCV
                                </span>
                                <span className="bg-blue-800 text-white px-2 py-1 rounded-md mr-2 mb-2 flex items-center">
                                    <SiVisualstudiocode className="mr-1" /> VS Code
                                </span>
                            </div>
                        </div>


                        <hr className='mt-4 border-orange-500' />
                        <div className="mt-3">
                            <h2 className="text-2xl font-bold text-orange-500 mb-4">
                                <FaLaptopCode className="inline-block mr-2" /> Projects
                            </h2>

                            {/* Project 1: PROPrompter */}
                            <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
                                <h3 className="text-lg font-medium text-white mb-2">
                                    PROPrompter{' '}
                                    <a
                                        href="https://pro-prompter.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 text-sm"
                                    >
                                        <FaLink className="inline-block ml-2" />
                                    </a>
                                </h3>
                                <p className="text-gray-400 mb-2">
                                    A platform to store, share, and discover useful prompts for
                                    various tasks, built with Next.js, Tailwind CSS, React.js,
                                    powered by the Gemini API and MongoDB.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-blue-600 text-white px-2 py-1 rounded-md mr-2 mb-2">
                                        Next.js
                                    </span>
                                    <span className="bg-teal-500 text-white px-2 py-1 rounded-md mr-2 mb-2">
                                        Tailwind CSS
                                    </span>
                                    <span className="bg-blue-400 text-white px-2 py-1 rounded-md mr-2 mb-2">
                                        React.js
                                    </span>
                                    <span className="bg-green-500 text-white px-2 py-1 rounded-md mr-2 mb-2">
                                        MongoDB
                                    </span>
                                    <span className="bg-purple-700 text-white px-2 py-1 rounded-md mr-2 mb-2">
                                        Gemini API
                                    </span>
                                </div>
                            </div>

                            {/* Project 2: Games Zone */}
                            <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
                                <h3 className="text-lg font-medium text-white mb-2">
                                    Games Zone{' '}
                                    <a
                                        href="https://checkmytype.vercel.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 text-sm"
                                    >
                                        <FaLink className="inline-block ml-2" />
                                    </a>
                                </h3>
                                <p className="text-gray-400 mb-2">
                                    A website featuring Memory Tiles and Catch the Box games, along
                                    with a typing test to enhance typing speed and accuracy. Built
                                    with Next.js and Tailwind CSS.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-blue-600 text-white px-2 py-1 rounded-md mr-2 mb-2">
                                        Next.js
                                    </span>
                                    <span className="bg-teal-500 text-white px-2 py-1 rounded-md mr-2 mb-2">
                                        Tailwind CSS
                                    </span>
                                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2 mb-2">
                                        JavaScript
                                    </span>
                                </div>
                            </div>

                            {/* Project 3: Tech Showroom */}
                            <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
                                <h3 className="text-lg font-medium text-white mb-2">
                                    Tech Showroom{' '}
                                    <a
                                        href="https://tech-showroom.vercel.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 text-sm"
                                    >
                                        <FaLink className="inline-block ml-2" />
                                    </a>
                                </h3>
                                <p className="text-gray-400 mb-2">
                                    A dynamic website showcasing phone data, highlighting CRUD
                                    operations using Next.js, Tailwind CSS, and MongoDB.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-blue-600 text-white px-2 py-1 rounded-md mr-2 mb-2">
                                        Next.js
                                    </span>
                                    <span className="bg-teal-500 text-white px-2 py-1 rounded-md mr-2 mb-2">
                                        Tailwind CSS
                                    </span>
                                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2 mb-2">
                                        JavaScript
                                    </span>
                                    <span className="bg-green-500 text-white px-2 py-1 rounded-md mr-2 mb-2">
                                        MongoDB
                                    </span>
                                </div>
                            </div>

                            {/* Project 4: Todo List */}
                            <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
                                <h3 className="text-lg font-medium text-white mb-2">
                                    Todo List{' '}
                                    <a
                                        href="https://merekam.vercel.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 text-sm"
                                    >
                                        <FaLink className="inline-block ml-2" />
                                    </a>
                                </h3>
                                <p className="text-gray-400 mb-2">
                                    A user-friendly todo list application for efficient task
                                    management. Built with Next.js and Tailwind CSS.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-blue-600 text-white px-2 py-1 rounded-md mr-2 mb-2">
                                        Next.js
                                    </span>
                                    <span className="bg-teal-500 text-white px-2 py-1 rounded-md mr-2 mb-2">
                                        Tailwind CSS
                                    </span>
                                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2 mb-2">
                                        JavaScript
                                    </span>
                                </div>
                            </div>

                            {/* Project 5: I love Surat */}
                            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                                <h3 className="text-lg font-medium text-white mb-2">
                                    I Love Surat
                                    {/*  Add link if available later */}
                                    {/* <a
                                  href="#" 
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 hover:text-blue-300 text-sm"
                                >
                                  <FaLink className="inline-block ml-2" />
                                </a> */}
                                </h3>
                                <p className="text-gray-400 mb-2">
                                    A website dedicated to Surat, India, showcasing its history and
                                    culture, built with HTML, CSS, and Bootstrap.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-orange-500 text-white px-2 py-1 rounded-md mr-2 mb-2">
                                        HTML
                                    </span>
                                    <span className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2 mb-2">
                                        CSS
                                    </span>
                                    <span className="bg-purple-600 text-white px-2 py-1 rounded-md mr-2 mb-2">
                                        Bootstrap
                                    </span>
                                </div>
                            </div>

                            {/* ... add more projects in the same format ... */}
                        </div>
                    </div>
                </div>
                {/* Add a button to download the PDF */}

            </div>
            <div>
            <button
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleDownloadPDF}
                >
                Download Resume
            </button>
                </div>
        </div>

    );
};

export default Resume;