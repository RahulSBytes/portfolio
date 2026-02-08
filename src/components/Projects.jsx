import Button from './Button'
import '../index.css'
import { RiGithubLine, RiPlayCircleLine } from '@remixicon/react'
import Heading from './Heading'


export default function Projects() {

    const projects = [
    {
        image: './images/axon.png',
        title: 'Axon – AI-Powered Chat Assistant',
        description: 'Intelligent conversational AI assistant with real-time web search, multi-provider authentication, and dynamic tool calling for accurate, up-to-date responses.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Groq API', 'Passport.js', 'Tailwind CSS'],
        links: {
            github: 'https://github.com/RahulSBytes/Axon',
            live: 'http://axon-nine-mu.vercel.app'
        }
    },
    {
        image: './images/syncchat.png',
        title: 'SyncChat – Real-Time Messaging Platform',
        description: 'Full-featured messaging platform supporting 400+ concurrent users with <50ms latency, secure OAuth 2.0 authentication, role-based access, and multi-format file sharing.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT', 'Zustand', 'Cloudinary'],
        links: {
            github: 'https://github.com/RahulSBytes/synqChat-frontend',
            live: 'https://synqchatapp.vercel.app'
        }
    },
    {
        image: './images/homitly.png',
        title: 'Homitly – Airbnb-Inspired Booking Platform',
        description: 'Full-stack accommodation booking app with user authentication, property listings, image uploads, booking management, and email confirmations.',
        tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Cloudinary', 'Passport.js'],
        links: {
            github: 'https://github.com/RahulSBytes/Homitly',
            live: 'https://homitly.onrender.com'
        }
    },
    {
        image: './images/portfolio.png',
        title: 'Personal Portfolio Website',
        description: 'A responsive personal portfolio website to showcase my skills, projects, and contact information. Built with React and styled using Tailwind CSS, featuring email integration via EmailJS.',
        tech: ['React', 'Vite', 'Tailwind CSS', 'EmailJS', 'Remix Icons'],
        links: {
            github: 'https://github.com/RahulSBytes/portfolio',
            live: 'http://localhost:5173/portfolio/'
        }
    },
]

    return (
        <section className='' id='projects'>
            <Heading>Projects</Heading>
            <div className="flex gap-12 flex-row flex-wrap">
                {
                    projects.map((el, index) => <div key={index} className='project-cards w-80 m-auto p-3 pt-4'>
                        <img className='project-card-image rounded-2xl w-full h-36 object-cover' src={el.image} alt={el.title} />
                        <div className="text-left my-3">
                            <h3 className='text-lg font-bold line-clamp-1 mb-2 text-primary'>{el.title}</h3>
                            <p className='text-zinc-200 line-clamp-3 mx-2 text-sm'>{el.description}</p>
                            <div className="my-4 mb-5 flex gap-2 flex-wrap">
                                {
                                    el.tech.map((item, index) => <span className='w-fit bg-zinc-800 text-xs rounded-md text-zinc-100  px-3 py-1 ' key={index}>{item}</span>
                                )
                                }
                            </div>
                            <div className="flex mt-4 gap-3 flex-wrap">
                               <a className='' href={el.links.github}><Button variant='primary'><RiGithubLine size={20} /> View Code</Button></a> 
                             {el.links.live  && <a href={el.links.live}><Button ><RiPlayCircleLine size={20} />Explore Live</Button></a>}
                            </div>
                        </div>
                    </div>
                    )
                }

            </div>



        </section>
    )
}
