"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div className="h-[1200px]">
            <div className=' items-center justify-center text-white lg:min-h-content min-h-content overflow-hidden relative'>
                <div className="bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1] w-full h-full min-h-full">
                    <Image
                        src="/image/Nheroimage.jpg"
                        alt="Netflix Hero Image"
                        width={1920}
                        height={1080}
                        className="object-cover w-full h-full opacity-30 "
                    />
                </div>
                <header className=" py-4 sm:px-8 px-4 w-full opacity-100 absolute top-0 left-1/2 transform -translate-x-1/2 lg:max-w-[1320px] ">
                    <div className="container mx-auto flex justify-between items-center ">
                        <Link href="/">
                            <span className="text-2xl font-bold text-red-600 md:text-3xl">MYFLEX</span>
                        </Link>
                        <div className="flex items-center">
                            <Link href="/signup">
                                <span className="text-white hover:text-gray-300 mr-4">Sign In</span>
                            </Link>
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </header>
                <div className="lg:h-[80vh] h-content flex flex-col justify-center items-center text-center pt-32 lg:pt-40 px-7 pb-8 lg:mb-16 md:min-h-[500px]">
                    <h1 className="text-3xl  font-bold mb-4 leading-snug lg:text-5xl">Unlimited movies, TV shows and more</h1>
                    <p className="text-lg mb-6">Watch anywhere. Cancel anytime.</p>
                    <div className=' px-6  '>
                        <p className="text-lg mb-4">
                            Ready to watch? Enter your email to create or restart your membership.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-2">
                            <input
                                type="email"
                                className="bg-black/50 border border-gray-500 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                placeholder="Email address"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <Link href="/signup ">
                                <button className="bg-red-600 hover:bg-red-700 text-white font-bold  px-4 py-3 rounded-sm whitespace-nowrap md:text-2xl ">
                                    Get Started {"  >"}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='w-fill h-3  bg-gray-800'>
                </div>
            </div>
            <section className='bg-black'>
                <div className='flex flex-col lg:flex-row py-14 text-white px-7 items-center gap-2'>
                    <div className='lg:w-1/2 w-full'>
                        <h1 className='text-3xl lg:text-5xl text-center lg:text-left px-1 font-bold lg:font-extrabold mb-4 lg:mb-6'>Enjoy on your TV</h1>
                        <p className='text-xl lg:text-2xl text-center lg:text-left px-1'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div className='h-96 relative overflow-hidden lg:w-1/2 w-full p-16   '>
                        <video className="object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5" autoPlay loop muted>
                            <source src="/image/video-tv-in-0819.m4v" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <Image
                            src="/image/tv.png"
                            alt="Netflix Hero Image"
                            width={1920}
                            height={1080}
                            className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-4/5"
                        />

                    </div>
                </div>
                <div className='w-fill h-3  bg-gray-800'>
                </div>
            </section>

            <section className='py-14 bg-black'>
                <div
                    className='flex flex-col lg:flex-row py-14 text-white px-7 items-center gap-2'
                >
                    <div className='lg:w-1/2 w-full'>
                        <h1 className='text-3xl lg:text-5xl text-center lg:text-left px-1 font-bold lg:font-extrabold mb-4 lg:mb-6'>Download your shows to watch offline</h1>
                        <p>Save your favourites easily and always have something to watch.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}