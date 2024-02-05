'use client'
import styles from './asesorias.module.css'
import NextImage from 'next/image'
import {Button, Image} from "@nextui-org/react";
import Link from 'next/link'
import { User } from 'lucide-react';
import { UserCircleIcon } from '@heroicons/react/24/solid';

export default function contacto(){
    return(
        <main className={styles.mainAsesorias}>

            <h1>Asesorias Deco Online</h1>

            <div className={styles.container}>
            
                <div className={styles.row}>
                    <div className={styles.column}>
                        <h2><strong>¿Qué es una asesoria?</strong></h2>
                        <p>Descubri la magia de un HOGAR RENOVADO con mi servicio de asesoramiento de interiores. En cada sesión, te acompaño y te guío para crear espacios acogedores y con estilo.Mi enfoque se basa en entender tus gustos y necesidades, brindándote soluciones creativas y prácticas que se adapten a tu presupuesto.</p>
                    </div>
                    <Image
                        as={NextImage}  
                        src='https://i.ibb.co/NVvJ7Rj/taller-Presencial.jpg'
                        alt='asesoria' 
                        height='800'
                        width='400' 
                        className={styles.imgCol} 
                    />
                </div>
                
                <div className={styles.row}>
                    <Image
                        as={NextImage}
                        src='https://i.ibb.co/N91ydLC/taller-Macrame.jpg' 
                        alt='asesoria'
                        height='800' 
                        width='800' 
                        className={styles.imgCol}
                     />
                    <div className={styles.column}>
                        <h2><strong>¿Qué Incluye?</strong></h2>
                        <p>Te envío un informe escrito realizado para vos con moodboard, croquis distribución muebles, paleta de colores, estilo decorativo, links de compra, sugerencias y proyectos creativos para realizar en tu hogar. Luego realizamos una videollamada de 1 hs para charlar de estas ideas y despejar dudas. Y por supuesto te acompaño por whatsapp mientras realizas el proyecto, voy a estar para ayudarte en la toma de decisiones y las dudas que te surjan al momento de ponerte manos a la obra. Juntas, daremos nueva vida a tu casa, convirtiéndola en un reflejo de tu personalidad y una fuente de inspiración diaria</p>
                    </div>
                </div>


{/* ----------------consulta---------------- */}
                
                <div className={styles.consulta}>
                    <div className={styles.contText}>
                        <p className={styles.texto}>Si soñas con un hogar único y lleno de amor... estoy aquí para ayudarte a hacerlo realidad! Contame qué ambiente de tu casa querés renovar</p>
                        <h2 className={styles.tittle}>Recibir tu consulta me pone feliz!</h2>
                        <Link href='https://wa.link/7bzsei' className={styles.boton}><Button radius="full" className="bg-gradient-to-tr from-pink-500 to-salmon-500 text-black shadow-lg">Consultar</Button></Link>
                        
                        <Link href='/components/products/asesoria-de-decoracion' className={styles.boton}><Button radius="full" className="bg-gradient-to-tr from-pink-500 to-salmon-500 text-black shadow-lg">Conseguir mi Asesoria</Button></Link>

                    </div>
                    <div className={styles.contCuadro}>
                        <Image 
                            as={NextImage}
                            alt='asesoria'
                            src='https://i.ibb.co/L1vqw0y/cuadro-Asesoria.png' 
                            height='800' 
                            width='500' 
                            className={styles.imgConsulta} 
                        />
                        <Link href='https://www.instagram.com/yas.casabonita/' className={styles.instaBanner}>
                            <div className={styles.instaDiv}>
                                <Image src='https://i.ibb.co/k6j3Lkj/insta.png' height='50' width='50' alt='logo insta' className={styles.insta} />
                                <p>Seguinos en ig <strong className={styles.textoS}>yas.casabonita</strong></p>
                            </div>
                        </Link>
                    </div>
                </div>
            
            </div>

{/* ------------------------------------Valoraciones----------------------------- */}
            <div className={styles.containerClientes}>
                <h2>Clientes Satisfechos</h2>
                <div className={styles.valoraciones}>
                    <div>
                        <div className='flex flex-row bg-yellow-50 border rounded-lg'>
                            <Image 
                                as={NextImage}
                                alt='asesoria'
                                src='https://i.ibb.co/7CfMn6p/antes.jpg' 
                                height='800' 
                                width='400' 
                                className={styles.imgValoraciones}
                            />
                            <Image 
                                as={NextImage}
                                alt='asesoria'
                                src='https://i.ibb.co/vDTjZqR/asesoria2.jpg' 
                                height='800' 
                                width='400' 
                                className={styles.imgValoraciones}
                            />
                        </div>
                        <div className={styles.client}>
                            <UserCircleIcon className='w-10 h-10' />
                            <h3>Graciela</h3>
                        </div>
                        <p>Desde ya superagradecida por tan excelente asesoramiento. Todo muy detallado, muy amable y amorosa en todo momento incluso en la conexion por meet. La superpaciencia y una atenta escucha a efectos de dar una certera opinion o respuesta. Muy feliz de haberme puesto en contacto con vos. Ahora queda por mi parte plasmar en la practica lo transmitido. Te reagradezco 🙏🙏</p>
                    </div>
                    <div>
                        <div className='flex flex-row bg-yellow-50 border rounded-lg'>
                            <Image 
                                as={NextImage}
                                alt='asesoria'
                                src='https://i.ibb.co/7CfMn6p/antes.jpg' 
                                height='800' 
                                width='400' 
                                className={styles.imgValoraciones}
                            />
                            <Image 
                                as={NextImage}
                                alt='asesoria'
                                src='https://i.ibb.co/vDTjZqR/asesoria2.jpg' 
                                height='800' 
                                width='400' 
                                className={styles.imgValoraciones}
                            />
                        </div>
                        <div className={styles.client}>
                            <UserCircleIcon className='w-10 h-10' />
                            <h3>Susana</h3>
                        </div>
                        <p>Desde hace muchos años que quiero dejar mi casa tan bonita como se ve en pinterest y te encontré sin querer en instagram, fué una alegría para mí saber que podía al fin hacer los cambios que necesitaba acompañada con vos que haces todo tan fácil. Aún estoy en el proceso de cambio, aunque ya me entregaste el proyecto seguis acompañandome en la ejecución y eso es lo que más valoro. Muchas gracias por tu predisposición!!!! Encantada con tus ideas 😍😍</p>
                    </div>
                    <div>
                        <div className='flex flex-row bg-yellow-50 border rounded-lg'>
                            <Image 
                                as={NextImage}
                                alt='asesoria'
                                src='https://i.ibb.co/7CfMn6p/antes.jpg' 
                                height='800' 
                                width='400' 
                                className={styles.imgValoraciones}
                            />
                            <Image 
                                as={NextImage}
                                alt='asesoria'
                                src='https://i.ibb.co/vDTjZqR/asesoria2.jpg' 
                                height='800' 
                                width='400' 
                                className={styles.imgValoraciones}
                            />
                        </div>
                        <div className={styles.client}>
                            <UserCircleIcon className='w-10 h-10' />
                            <h3>Caro</h3>
                        </div>
                        <p>Hola, en cuanto a mi devolución de tu trabajo la verdad que quedé contestísima!!! Nos te gustó todo lo que nos propusiste cada una de las ideas que nos mandaste, de los links, nos re sirvio!!! hemos mirado todo, todavía no hemos puesto en práctica mucho pero la verdad que tu predisposición fue divina nos sentimos muy a gusto, muy cómodos con tu trabajo!! Asi que estamos muy contentos!! Gracias miles!!!🥰</p>
                    </div>
                </div>
            </div>
            
        </main>
    )
}