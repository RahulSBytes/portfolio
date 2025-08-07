import Button from './Button'
import '../index.css'
import { RiGithubLine, RiPlayCircleLine } from '@remixicon/react'
import Heading from './Heading'


function Projects() {

    const projects = [
        {
            id: 1,
            image: '',
            title: '',
            description: '',
            tech: [],
            links: {
                github: '',
                live: ''
            }
        }
    ]

    return (
        <section className='border border-red-600 py-12'>
            <Heading>Projects</Heading>
            <div className="flex gap-12 flex-row flex-wrap">
                <div className='project-cards w-80 m-auto p-3 pt-4'>
                    <img className='rounded-2xl w-full h-48 object-cover' src="/images/image1.jpeg" alt="" />
                    <div className="text-left my-3">
                        <h3 className='text-lg font-bold line-clamp-1 mb-2 text-primary'>Homitly - a hotel booking platform</h3>
                        <p className='text-zinc-200 line-clamp-3 mx-2 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos repellendus odit necessitatibus nam adipisci consequatur quisquam, nulla culpa commodi ipsa!</p>
                        <div className="my-4 mb-5 flex gap-2 flex-wrap">
                            {
                                ['CSS', 'HTML', 'mongodb', 'mongodb', 'mongodb'].map((item) => <span className='w-fit bg-zinc-800 text-xs rounded-md text-zinc-100  px-3 py-1 ' key={Math.random()}>{item}</span>

                                )
                            }
                        </div>
                        <div className="flex mt-4 gap-3 flex-wrap">
                            <Button variant='primary'><RiGithubLine size={20} /> View Code</Button>
                            <Button ><RiPlayCircleLine size={20} />Explore Live</Button>
                        </div>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default Projects