import { RiGithubLine, RiMailSendLine, RiFileDownloadLine, RiContactsLine, RiLinkedinBoxFill } from "@remixicon/react";
import Button from "./Button";
import Footer from "./Footer";


export default function HeroSection() {

    const data = [
        {
            icon: RiMailSendLine,
            text: "rraj25198@gmail.com"
        },
        {
            icon: RiLinkedinBoxFill,
            link: "https://www.linkedin.com/in/rahul-sharma-427a35273"
        },
        {
            icon: RiGithubLine,
            link: 'https://github.com/RahulSBytes',
        },
    ]

    return (
        <section className='flex flex-col flex-1 w-full gap-4 justify-center items-center  '>
            <div className='font-sans font-bold text-3xl'>Hi, I'm <img className='inline h-12 rounded-xl' src="images/image2.jpeg" alt="" /> Rahul Sharma. <br />
           <div className="mt-3 mb-2">A Passionate MERN Stack Developer</div> 
                </div>
            {/* <p className='text-lg font-medium font-sans my-3'>
            </p> */}
            <p className="text-sm max-w-[800px] text-[#d4d4d4]">I'm a Computer Science student and self-taught developer focused on crafting full-stack web applications.
                Currently exploring the MERN stack, deploying real-world projects, and always eager to learn and grow.</p>
            <div className="flex gap-4 mt-4 mb-6">
                {/* <RiGithubLine/>
                    <RiLinkedinLine/>
                    <RiMailSendLine/> */}
                {
                    data.map((el, index) => <a key={index} className="flex rounded-md p-[3px] hover:bg-[#353535]" href={el.link ? el.link : `mailto:${import.meta.env.VITE_MY_EMAIL}`}>
                        <el.icon size={24} color="#fafafa" />
                    </a>)
                }
            </div>
            <div className="flex gap-6">
                <Button variant="primary">
                    Resume <RiFileDownloadLine size={20} />
                </Button>
                <Button >
                    Contact <RiContactsLine size={18} />
                </Button>
            </div>
        </section>
    )
}
