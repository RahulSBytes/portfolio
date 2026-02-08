import Heading from './Heading'
import '../index.css'
import {
    RiHtml5Line,
    RiCss3Line,
    RiJavascriptLine,
    RiReactjsLine,
    RiFigmaLine,
    RiNodejsLine,
    RiDatabase2Line,
    RiGitBranchLine,
    RiGithubLine,
    RiCodeLine,
    // RiPythonLine,
    RiJavaLine,
    RiFileList2Line,
    RiMailSendLine,
    RiServerLine,
    RiTerminalBoxLine,
    RiToolsLine,
    RiCloudLine,
    RiFlashlightLine,
    RiSendPlaneLine,
    RiMagicLine,
    RiSparklingLine,
    RiRobot2Line,
    RiShieldKeyholeLine,
    RiWifiLine,
    RiArchiveLine,
    RiStackLine,
    RiPaintBrushLine,
    RiCupLine,
    RiCodeSSlashLine,
    RiBrainLine
} from '@remixicon/react'



function TechPills({ data, title, HeadingIcon }) {
    return (
        <div className="">
            <div className="flex gap-2 mb-5">
                <span><HeadingIcon color='#008080' /></span>
                <h3 className='text-primary text-lg'>{title}</h3>
            </div>

            <ul className="flex flex-wrap gap-3  ml-8">
                {data.map((item, index) => (
                    <li key={index} className=" tech-pills px-2 py-1 flex items-center gap-2 rounded-2xl bg-[#2D2D2D]">
                        <item.icon size={18} color={item.color} />
                        <span className="text-sm font-medium">{item.label}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}




export default function TechnicalSkills() {

    const skills = {
    languages: [
        {
            label: 'JavaScript',
            icon: RiJavascriptLine,
            color: '#F7DF1E'
        },
        {
            label: 'Python',
            icon: RiCodeLine,
            color: '#3776AB'
        },
        {
            label: 'Java',
            icon: RiCupLine,
            color: '#007396'
        },
        {
            label: 'SQL',
            icon: RiDatabase2Line,
            color: '#00618A'
        }
    ],
    frontend: [
        {
            label: 'React.js',
            icon: RiReactjsLine,
            color: '#61DAFB'
        },
        {
            label: 'Tailwind CSS',
            icon: RiPaintBrushLine,
            color: '#06B6D4'
        },
        {
            label: 'Redux',
            icon: RiStackLine,
            color: '#764ABC'
        },
        {
            label: 'Zustand',
            icon: RiArchiveLine,
            color: '#443E38'
        },
        {
            label: 'HTML/CSS',
            icon: RiHtml5Line,
            color: '#E34F26'
        }
    ],
    backend: [
        {
            label: 'Node.js',
            icon: RiNodejsLine,
            color: '#339933'
        },
        {
            label: 'Express.js',
            icon: RiServerLine,
            color: '#000000'
        },
        {
            label: 'Socket.io',
            icon: RiWifiLine,
            color: '#010101'
        },
        {
            label: 'REST APIs',
            icon: RiFileList2Line,
            color: '#6DB33F'
        },
        {
            label: 'JWT/OAuth',
            icon: RiShieldKeyholeLine,
            color: '#000000'
        }
    ],
    database: [
        {
            label: 'MongoDB',
            icon: RiDatabase2Line,
            color: '#47A248'
        },
        {
            label: 'Mongoose',
            icon: RiDatabase2Line,
            color: '#880000'
        },
        {
            label: 'MySQL',
            icon: RiDatabase2Line,
            color: '#00758F'
        }
    ],
    ai: [
        {
            label: 'LLM Integration',
            icon: RiRobot2Line,
            color: '#10A37F'
        },
        {
            label: 'Groq API',
            icon: RiSparklingLine,
            color: '#F55036'
        },
        {
            label: 'Prompt Engineering',
            icon: RiMagicLine,
            color: '#8B5CF6'
        },
        {
            label: 'Tool Calling',
            icon: RiToolsLine,
            color: '#FF6B6B'
        }
    ],
    tools: [
        {
            label: 'Git/GitHub',
            icon: RiGitBranchLine,
            color: '#F05032'
        },
        {
            label: 'Postman',
            icon: RiSendPlaneLine,
            color: '#FF6C37'
        },
        {
            label: 'Vite',
            icon: RiFlashlightLine,
            color: '#646CFF'
        },
        {
            label: 'Cloudinary',
            icon: RiCloudLine,
            color: '#3448C5'
        }
    ]
};




    return (
        <section className="" id='tack-stacks'>
            <Heading>Technical Skills</Heading>
            <div className=" flex flex-col gap-16">
                <TechPills title={'Frontend Development'} data={skills.frontend} HeadingIcon={RiCodeLine} />
                <TechPills title={'Backend Development'} data={skills.backend} HeadingIcon={RiServerLine} />
                <TechPills title={'Database'} data={skills.database} HeadingIcon={RiDatabase2Line} />
                <TechPills title={'AI'} data={skills.ai} HeadingIcon={RiBrainLine} />
                <TechPills title={'Programming Languages'} data={skills.languages} HeadingIcon={RiTerminalBoxLine} />
                <TechPills title={'Tools I Use'} data={skills.tools} HeadingIcon={RiToolsLine} />
            </div>


        </section>
    )
}