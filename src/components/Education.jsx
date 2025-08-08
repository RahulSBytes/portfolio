import { RiGraduationCapLine, RiUserLocationLine } from "@remixicon/react"
import Heading from "./Heading"

export default function Education() {
    return (
        <section className=" ">
            <Heading>Education</Heading>
            <div className="text-left flex flex-col gap-2 bg-[#36363655] p-10 w-full m-auto">
                <h3 className="font-bold text-xl">Bachelor of Technology - Computer Science and Engineering</h3>
                <p className="flex gap-2"><RiGraduationCapLine color="#008080" />Deen Dayal Upadhyaya Gorakhpur University</p>
                <p className="flex gap-1"><RiUserLocationLine color="#008080" />Gorakhpur, Uttar Pradesh | Expected 2026</p>
                <h3><b> CGPA:</b> 7.9/10</h3>
                <h3><b>Key Focus:</b>  Full-stack development, algorithms</h3>
            </div>
        </section>
    )
}
