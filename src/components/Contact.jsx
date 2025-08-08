import { useRef, useState } from 'react';
import Heading from './Heading'

function FormInput({
    label,
    type = 'text',
    placeholder = '',
    onChange,
    value,
    name
}) {

    const baseStyling = 'bg-[#323232] placeholder:text-sm rounded-xl m-auto text-sm w-full px-4 max-w-[800px] '

    return <div className="flex flex-col gap-1 my-5 m-auto w-full ">
        <label className='text-left text-sm w-full max-w-[800px] m-auto'>{label}</label>
        {
            type === 'textarea' ?
                <textarea onChange={onChange} value={value} name={name} required rows={6} placeholder={placeholder} className={`${baseStyling} py-4`}></textarea>
                : <input onChange={onChange} value={value} name={name} required className={`${baseStyling} py-2`} type={type} placeholder={placeholder} />
        }
    </div>

}


function handleSubmit() {

}



function Contact() {

    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });


    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    return (
        <section className='px-5 '>
            <Heading className={'!mb-4'}>Get in Touch</Heading>
            <p className='italic text-sm text-zinc-200 mb-12'>Feel free to reach out for collaboration, job opportunities, or just to say hi!</p>

            <div ref={form} onSubmit={handleSubmit}>
                <FormInput value={formData.user_name} onChange={changeHandler} placeholder='Your Name' name="user_name" label='Name' type='text' />
                <FormInput value={formData.user_email} onChange={changeHandler} placeholder='Your Name' name="user_email" label='Email' type='text' />
                <FormInput value={formData.message} onChange={changeHandler} name="message" placeholder='Tell me about your project or how can we work together....' label='Message' type='textarea' />
            </div>
        </section>
    )
}

export default Contact