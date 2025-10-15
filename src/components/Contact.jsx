import { useRef, useState } from 'react';
import Heading from './Heading'
import Button from './Button'
import emailjs from '@emailjs/browser'

function FormInput({
    label,
    type = 'text',
    placeholder = '',
    onChange,
    value,
    name
}) {

    const baseStyling = 'bg-[#323232] placeholder:text-sm rounded-xl m-auto text-sm w-full px-4 max-w-[800px] '

    return <div className="flex flex-col gap-1 my-3 m-auto w-full ">
        <label className='text-left text-sm w-full max-w-[800px] m-auto'>{label}</label>
        {
            type === 'textarea' ?
                <textarea onChange={onChange} value={value} name={name} required rows={6} placeholder={placeholder} className={`${baseStyling} py-4`}></textarea>
                : <input onChange={onChange} value={value} name={name} required className={`${baseStyling} py-2`} type={type} placeholder={placeholder} />
        }
    </div>

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


    async function handleSubmit(e) {
        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }).then(() => {
            alert("Message sent successfully!");
            form.current.reset();
            setFormData({
                user_name: '',
                user_email: '',
                message: ''
            })
        })
            .catch((error) => {
                console.error(error);
                alert("Failed to send message.");
            });

    }


    return (
        <section className='px-5 ' id='contact'>
            <Heading className={'!mb-4'}>Get in Touch</Heading>
            <p className='italic text-sm text-zinc-200 mb-12'>Feel free to reach out for collaboration, job opportunities, or just to say hi!</p>

            <form className='flex flex-col' ref={form} onSubmit={handleSubmit}>
                <FormInput value={formData.user_name} onChange={changeHandler} placeholder='Your Name' name="user_name" label='Name' type='text' />
                <FormInput value={formData.user_email} onChange={changeHandler} placeholder='Your Name' name="user_email" label='Email' type='text' />
                <FormInput value={formData.message} onChange={changeHandler} name="message" placeholder='Tell me about your project or how can we work together....' label='Message' type='textarea' />
                <div className='w-full max-w-[800px] m-auto'>
                <Button variant='primary' className='h-7 max-w-min rounded-md' type='submit'>Send Message</Button>
                </div>
            </form>
        </section>
    )
}

export default Contact