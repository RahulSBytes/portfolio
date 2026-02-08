import React from 'react'
import Heading from './Heading'
import '../index.css'
// import image1 from '../../public/images'

export default function About() {
    return (
        <section id='about'>
            <Heading>About</Heading>
            <div className="flex flex-col-reverse md:flex-row">
                <div className="p-3 my-4 text-left text-sm/6 md:w-3/5 leading-6">
                   <b> Hi, I'm Rahul — a full-stack developer now mastering Generative AI.</b> <br />
                    I build web applications that are fast, scalable, and solve real problems. From crafting intuitive interfaces to designing robust backend systems — I enjoy working across the entire development spectrum.
                    Currently, I'm diving deep into LLM integration, prompt engineering, and building AI-powered applications that go beyond simple chatbots.
                <br /><br />  <b>What drives me?</b>   The thrill of shipping products that actually work and make someone's life easier.
                 <br /> <b> Open to:</b>  Internships, freelance projects, and collaborations
                </div>
                <div className="flex-1 flex justify-center items-center ">
                    <img className='image-shadow h-60 object-cover w-60 md:w-48 rounded-full md:rounded-none' src='./images/image1.jpeg' alt="" />
                </div>
            </div>
        </section>
    )
}

