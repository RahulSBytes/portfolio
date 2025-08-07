import { RiGithubLine, RiLinkedinLine, RiMailLine, RiFileDownloadLine, RiContactsLine  } from "@remixicon/react";
import Button from "./Button";


export default function HeroSection() {
    return (
        <section className='flex flex-col flex-1 w-full gap-6 justify-center items-center  '>
          <div className='font-sans font-bold text-3xl'>Hi, I'm <img className='inline h-12 rounded-xl' src="images/image2.jpeg" alt="" /> Rahul Sharma</div>
            <p className='text-lg font-medium font-sans'>MERN Stack Developer
                Passionate about building impactful web experiences
            </p>
            <p className="text-sm max-w-[800px] text-[#d4d4d4]">I'm a Computer Science student and self-taught developer focused on crafting full-stack web applications.
                Currently exploring the MERN stack, deploying real-world projects, and always eager to learn and grow.</p>
                <div className="flex gap-4 mt-4 mb-6">
                    <RiGithubLine/>
                    <RiLinkedinLine/>
                    <RiMailLine/>
                </div>
                <div className="flex gap-6">
                    <Button variant="primary">
                        Resume <RiFileDownloadLine size={20}/>
                    </Button>
                    <Button >
                        Contact <RiContactsLine size={18}/>
                    </Button>
                </div>
        </section>
    )
}
