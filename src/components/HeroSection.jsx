import { RiGithubLine, RiMailSendLine, RiFileDownloadLine, RiContactsLine, RiLinkedinBoxFill } from "@remixicon/react";
import Button from "./Button";
import resume from '../../public/images/resume.pdf';
import Footer from "./Footer";


export default function HeroSection() {

    const data = [
        {
            icon: RiMailSendLine,
            link: `mailto:${import.meta.env.VITE_MY_EMAIL}`
        },
        {
            icon: RiLinkedinBoxFill,
            link: "linkedin.com/in/thedevrahul"
        },
        {
            icon: RiGithubLine,
            link: 'https://github.com/RahulSBytes',
        },
    ]

    return (
        <section className='flex flex-col flex-1 w-full gap-4 justify-center items-center  '>
            <div className='font-sans font-bold text-3xl'>Hi, I'm <img className='inline h-12 rounded-xl' src="./images/image2.jpeg" alt="" /> Rahul Sharma. <br />
                <div className="mt-3 mb-2">A Passionate MERN Stack Developer</div>
            </div>
            {/* <p className='text-lg font-medium font-sans my-3'>
            </p> */}
            <p className="text-sm max-w-[800px] text-[#d4d4d4]">Full-stack developer building scalable web apps and exploring Generative AI. CSE undergrad who ships real products, not just tutorials.</p>
            <div className="flex gap-4 mt-4 mb-6">
                {
                    data.map((el, index) => <a key={index} className="flex rounded-md p-[3px] hover:bg-[#353535]" href={el.link}>
                        <el.icon size={24} color="#fafafa" />
                    </a>)
                }
            </div>
            <div className="flex gap-6">
                <Button variant="primary" href={resume} download="RahulSharma-Resume.pdf">
                    Resume <RiFileDownloadLine size={20} />
                </Button>
                <Button href={'#contact'}>
                    Contact <RiContactsLine size={18} />
                </Button>
            </div>
        </section>
    )
}
