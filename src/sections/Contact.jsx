import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = ({ target: { name, value }}) => {
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: 'Christian Garcia',
                    from_email: form.email,
                    to_email: 'christian.jgarcia03@gmail',
                    message: form.message
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

            setLoading(false);
            alert('Your message has been sent!');

            setForm({
                name: '',
                email: '',
                message: ''
            })
        } catch (error) {
            setLoading(false);

            console.log(error);

            alert('Something went wrong. Please try again.');
        }



    }

    return (
        <section className='c-space my-20' id='contact'>
            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                <img src='/assets/terminal.png' alt='terminal background' className='absolute inset-0 min-h-screen' />

                <div className='contact-container'>
                    <h3 className='head-text'>Let's Talk</h3>
                    <p className='text-lg text-white-600 mt-3'>Do you like my work? I'd love to hear from you! Whether you have a project in mind or just want to chat, feel free to reach out – let's create something amazing together!</p>

                    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                        <label className='space-y-3'>
                            <span className='field-label'>Full Name</span>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='John Doe'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Email</span>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='johndoe@example.com'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Your Message</span>
                            <textarea
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className='field-input'
                                placeholder='Hi, I am interested in...'
                            />
                        </label>

                        <button className='field-btn' type='submit' disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}

                            <img src='/assets/arrow-up.png' alt='arrow' className='field-btn_arrow' />
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}
export default Contact
