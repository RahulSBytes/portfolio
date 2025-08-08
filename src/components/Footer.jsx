import { RiGithubLine, RiLinkedinFill, RiMailSendLine } from "@remixicon/react";

export default function Footer() {

  const basestyle = 'flex gap-2 text-sm text-zinc-300'

  return (
    <ul className="mb-5 flex gap-x-5 gap-y-1 flex-wrap">
      <li className={`${basestyle}`}><RiMailSendLine size={16} color="#e2e2e2" />rraj25198@gmail.com</li>
      <li className={`${basestyle}`}><RiLinkedinFill size={16} color="#e2e2e2" /><a href="https://www.linkedin.com/in/rahul-sharma-427a35273">https://www.linkedin.com/in/rahul-sharma-427a35273</a></li>
      <li className={`${basestyle}`}><RiGithubLine size={16} color="#e2e2e2" /><a href="https://github.com/RahulSBytes">https://github.com/RahulSBytes</a></li>
    </ul>
  )
}
