'use client'
import Link from 'next/link'
import { Button } from '../ui/button'
import styles from './contact.module.css'
import axios from 'axios';
import React, { useState } from 'react';



export default function Contact(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const endpoint = 'https://formspree.io/f/xyyreoya';

        try {
        await axios.post(endpoint, {
            name,
            email,
            message,
        });

        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
        } catch (error) {
        console.error('Error sending message:', error);
        alert('Error sending message. Please try again later.');
        }
    };

    return(
        <main className='flex flex-col'>

            <h1>Contactanos</h1>

            <section className='flex flex-col-reverse lg:flex-row'>

                <div className={styles.contact}>

                    <div className={styles.fondo}>     
                        
                            
                        <h2 className={styles.infoTitle}>Te ayudaremos con lo que necesites a la brevedad</h2>
            
                        <div className={styles.info}>
                            <div className={styles.infoDiv}>
                                <p className={styles.infoTitle}>Ubicación</p>
                                <p className={styles.infoText}>Santa Fe, Arg</p>
                            </div>
                            <div className={styles.infoDiv}>
                                <p className={styles.infoTitle}>Correo electrónico</p>
                                <p className={styles.infoText}>yasminlmarchetti@gmail.com</p>
                            </div>
                            <div className={styles.infoDiv}>
                                <p className={styles.infoTitle}>Instagram</p>
                                <p className={styles.infoText}><a href={`https://www.instagram.com/yas.casabonita/`}>@yas.casabonita</a></p>
                            </div>
                        </div>

                        <div className={styles.fondoText}>
                            <p>Tambien te dejamos un link con destino a nuestro whatsapp, en el que podes comunicarte con nosotros y dejarnos las preguntas que tengas.</p>
                            <Link href='https://wa.link/duppll'>
                                <Button className='bg-yellow-200 text-black w-fit shadow shadow-black hover:bg-yellow-500 mt-2' >Ir a WhatsApp</Button>
                            </Link>
                        </div>

                    </div>

                
                </div>
            
                <div className="w-full flex flex-col items-center p-8 lg:w-1/2" id="contact">
                
                    <form onSubmit={handleSubmit} className="form w-full justify-between items-center p-8">
                        <input type="hidden" name="contact_number"/>
                        <div className="flex justify-between items-center md:flex-col gap-2 w-full mb-2">
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre y Apellido" className="bg-white h-10 mb-2 text-black rounded-md p-4 w-full sm:p-1 " />
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="bg-white h-10 mb-2 text-black rounded-md p-4 w-full sm:p-1 " />
                        </div>
                        <textarea aria-label="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Mensaje" className="bg-white h-32 text-black rounded-md p-4 sm:p-1 w-full"></textarea>
                        <Button className="text-black bg-amber-100 border-0 hover:bg-amber-200 rounded-2xl mt-4 p-2 sm:p-1">
                            <input type="submit" value="Send" className="cursor-pointer w-full" />
                        </Button>
                    </form>

                </div>

            </section>

        </main>
    )
}
