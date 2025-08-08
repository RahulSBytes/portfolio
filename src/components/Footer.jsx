import { RiGithubLine, RiLinkedinFill, RiMailSendLine } from "@remixicon/react";

export default function Footer() {

  const data = [
    {
      icon: RiMailSendLine,
      text: "rraj25198@gmail.com"
    },
    {
      icon: RiLinkedinFill,
      link: "https://www.linkedin.com/in/rahul-sharma-427a35273"
    },
    {
      icon: RiGithubLine,
      link: 'https://github.com/RahulSBytes',
    },
  ]

  return (
    <div className=" flex gap-x-5 gap-y-1 flex-wrap py-6 justify-center m-auto text-sm">
      {
        data.map((el, index) => <a key={index} className="flex" href={el.link ? el.link : ''}><el.icon size={16} color="#e2e2e2" /><span className="ml-2 hidden md:inline">{el.text ? el.text : el.link}</span></a>)
      }
    </div>
  )
}
