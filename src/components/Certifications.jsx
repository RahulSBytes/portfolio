import Heading from './Heading'
import { RiExternalLinkLine } from '@remixicon/react'


function Block() {


    const data = [
        {
            heading: "Machine Learning with Python",
            source: "NIELIT (National Institute of Electronics & IT) | 2024",
            link: "#"
        },
        {
            heading: "Coding and Programming Fundamentals",
            source: "Samsung Innovation Campus | 2024",
            link: "#"
        },
        {
            heading: "Cyber Security & Privacy",
            source: "NPTEL (IIT/IISc Initiative) | 2024",
            link: "#"
        },
    ]

    return data.map((el, index) => <div key={index}>
        <h4 className='font-bold'>{el.heading}</h4>
        <p className='text-sm my-1'>{el.source}</p>
        <a className='flex gap-2 text-[#008080] text-sm' href={el.link}>View Certificate <RiExternalLinkLine size={20} /> </a>
    </div>
    )

}


function Certifications() {
    return (
        <section>
            <Heading>Certifications</Heading>
            <div className="text-left flex flex-col gap-6">
                <Block />
            </div>
        </section>
    )
}

export default Certifications