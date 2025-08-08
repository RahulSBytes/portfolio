import React from 'react'
import Heading from './Heading'




function FormInput({
    label,
    type = 'text',
    placeholder = ''
}) {

    const baseStyling = 'bg-[#323232] placeholder:text-sm rounded-xl m-auto text-sm w-full px-4 max-w-[800px] '

    return <div className="flex flex-col gap-1 my-5 w-full">
        <label className='text-left text-sm w-full max-w-[800px]'>{label}</label>
        {
            type === 'textarea' ? 
            <textarea rows={6} placeholder={placeholder} className={`${baseStyling} py-4`}></textarea>
            : <input className={`${baseStyling} py-2`} type={type} placeholder={placeholder} />
            
        }
    </div>

}




function Contact() {
    return (
        <section className='mt-10 py-10 px-5 '>
            <Heading className={"!my-4"}>Get in Touch</Heading>
            <p className='italic text-sm text-zinc-200 mb-12'>Feel free to reach out for collaboration, job opportunities, or just to say hi!</p>
            <div>
                <FormInput placeholder='Your Name' label='Name' type='text' />
                <FormInput placeholder='Your Name' label='Email' type='text' />
                <FormInput placeholder='Tell me about your project or how can we work together....' label='Message' type='textarea' />
            </div>
        </section>
    )
}

export default Contact