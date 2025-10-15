import React from 'react'
import Heading from './Heading'
import '../index.css'
// import image1 from '../../public/images'

export default function About() {
    return (
        <section id='about'>
            <Heading>About</Heading>
            <div className="flex flex-col-reverse md:flex-row">
                <div className="p-3 my-4 text-left text-sm/6 md:w-3/5">
                    Hi, I'm Rahul — a full-stack developer who builds clean, scalable web applications that solve real problems. I specialize in the MERN stack and have a knack for turning complex ideas into intuitive user experiences. From crafting responsive React interfaces to architecting robust Node.js backends, I enjoy tackling challenges across the entire development spectrum.
                    <div className='mt-1'> Currently pursuing my Computer Science Engineering degree, I've built several projects involving modern UI with React and Tailwind CSS, RESTful APIs with Express and MongoDB, and seamless deployments on platforms like Vercel and Render.
                        What drives me? The satisfaction of seeing code come to life and knowing it makes someone's day a little easier.</div>
                    <div className='mt-2'>
                        <b> Currently exploring:</b> Next.js, TypeScript, and system design 
                        <br />
                        <b> Open to:</b> Internships, freelance projects, and collaboration opportunities
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center ">
                    <img className='image-shadow h-60 object-cover w-60 md:w-48 rounded-full md:rounded-none' src='./images/image1.jpeg' alt="" />
                </div>
            </div>
        </section>
    )
}

