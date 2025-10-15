import Heading from './Heading'
import { RiExternalLinkLine } from '@remixicon/react'


function Block() {


    const data = [
        {
            heading: "Machine Learning with Python",
            source: "NIELIT (National Institute of Electronics & IT) | 2024",
            link: "./images/ml.jpg"
        },
        {
            heading: "Coding and Programming Fundamentals",
            source: "Samsung Innovation Campus | 2024",
            link: "./images/candp.jpg"
        },
        {
            heading: "Cyber Security & Privacy",
            source: "NPTEL (IIT/IISc Initiative) | 2024",
            link: "./images/cyber.jpg"
        },
    ]

    return data.map((el, index) => <div className='min-w-96 w-[48%] pl-4' key={index}>
        <h4 className='font-bold'>{el.heading}</h4>
        <p className='text-sm my-1'>{el.source}</p>
        {/* <a className='flex gap-2 text-[#008080] text-sm' href={el.link} rel="noopener noreferrer">View Certificate <RiExternalLinkLine size={20} /> </a> */}
        <a href={el.link}
            className='flex gap-2 text-[#008080] text-sm'
            onclick="window.open(this.href, 'ImageWindow', 'width=800,height=600'); return false;"
            rel="noopener noreferrer">
            View Certificate <RiExternalLinkLine size={20} />
        </a>
    </div>
    )

}


function Certifications() {
    return (
        <section>
            <Heading>Certifications</Heading>
            <div className="text-left flex-wrap flex flex-row gap-y-10">
                <Block />
            </div>
        </section>
    )
}

export default Certifications