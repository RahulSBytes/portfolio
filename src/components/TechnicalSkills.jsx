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
    RiToolsLine
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
        frontend: [
            {
                label: 'HTML5',
                icon: RiHtml5Line,
                color: '#E34F26'
            },
            {
                label: 'CSS3',
                icon: RiCss3Line,
                color: '#1572B6'
            },
            {
                label: 'JavaScript',
                icon: RiJavascriptLine,
                color: '#F7DF1E'
            },
            {
                label: 'Reactjs',
                icon: RiReactjsLine,
                color: '#61DAFB'
            },
            {
                label: 'Figma',
                icon: RiFigmaLine,
                color: '#F24E1E'
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
                label: 'REST API',
                icon: RiFileList2Line,
                color: '#6DB33F'
            },
            {
                label: 'Nodemailer',
                icon: RiMailSendLine,
                color: '#0A66C2'
            }
        ],
        database: [
            {
                label: 'MongoDB',
                icon: RiDatabase2Line,
                color: '#47A248'
            },
            {
                label: 'MySQL',
                icon: RiDatabase2Line,
                color: '#00758F'
            }
        ],
        languages: [
            {
                label: 'JavaScript',
                icon: RiJavascriptLine,
                color: '#F7DF1E'
            },
            // {
            //   label: 'Python',
            //   icon: RiPythonLine,
            //   color: '#3776AB'
            // },
            {
                label: 'Java',
                icon: RiJavaLine,
                color: '#007396'
            },
            {
                label: 'C',
                icon: RiCodeLine,
                color: '#A8B9CC'
            },
            {
                label: 'SQL',
                icon: RiDatabase2Line,
                color: '#00618A'
            }
        ],
        tools: [
            {
                label: 'Git',
                icon: RiGitBranchLine,
                color: '#F05032'
            },
            {
                label: 'GitHub',
                icon: RiGithubLine,
                color: '#181717'
            },
            {
                label: 'VS Code',
                icon: RiTerminalBoxLine,
                color: '#007ACC'
            },
            {
                label: 'Postman',
                icon: RiServerLine,
                color: '#FF6C37'
            },
            {
                label: 'MongoDB Compass',
                icon: RiDatabase2Line,
                color: '#00ED64'
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
                <TechPills title={'Programming Languages'} data={skills.languages} HeadingIcon={RiTerminalBoxLine} />
                <TechPills title={'Tools I Use'} data={skills.tools} HeadingIcon={RiToolsLine} />
            </div>


        </section>
    )
}