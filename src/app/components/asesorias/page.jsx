'use client'
import styles from './asesorias.module.css'
import Image from 'next/image'
import deco from '../../assets/imgs/decoremos.png'
import aseso from '../../assets/imgs/asesoria.jpg'
import asesoDeco from '../../assets/imgs/asesoria2.jpg'
import valoracion1 from '../../assets/imgs/valoracion1.jpeg'
import valoracion2 from '../../assets/imgs/valoracion2.jpg'
import valoracion3 from '../../assets/imgs/valoracion3.jpg'
import cuadro from '../../assets/imgs/cuadroAsesoria.png'
import Instagram from '../../assets/icons/instagram.svg'
import {Button} from "@nextui-org/react";
import Link from 'next/link'

export default function contacto(){
    return(
        <main className={styles.mainAsesorias}>

            <h1>Asesorias Deco Online</h1>
            
            {/* <Image src={deco} heigth='1500' width='1500' className={styles.banner} /> */}
            
            <div className={styles.container}>
            
                <div className={styles.row}>
                    <div className={styles.column}>
                        <h2><strong>¿Qué es una asesoria?</strong></h2>
                        <p>Descubri la magia de un HOGAR RENOVADO con mi servicio de asesoramiento de interiores.En cada sesión, te acompaño y te guío para crear espacios acogedores y con estilo.Mi enfoque se basa en entender tus gustos y necesidades, brindándote soluciones creativas y prácticas que se adapten a tu presupuesto.</p>
                    </div>
                    <Image src={aseso} heigth='800' width='500' className={styles.imgCol} />
                </div>
                
                <div className={styles.row2}>
                    <Image src={asesoDeco} heigth='800' width='600' className={styles.imgCol}/>
                    <div className={styles.column}>
                        <h2><strong>¿Qué Incluye?</strong></h2>
                        <p>Te envío un informe escrito realizado para vos con moodboard, croquis distribución muebles, paleta de colores, estilo decorativo, links de compra, sugerencias y proyectos creativos para realizar en tu hogar. Luego realizamos una videollamada de 1 hs para charlar de estas ideas y despejar dudas. Y por supuesto te acompaño por whatsapp mientras realizas el proyecto, voy a estar para ayudarte en la toma de decisiones y las dudas que te surjan al momento de ponerte manos a la obra. Juntas, daremos nueva vida a tu casa, convirtiéndola en un reflejo de tu personalidad y una fuente de inspiración diaria</p>
                    </div>
                </div>

{/* ----------------consulta---------------- */}
                
                <div className={styles.consulta}>
                    <div className={styles.contText}>
                        <p className={styles.texto}>Si soñas con un hogar único y lleno de amor... estoy aquí para ayudarte a hacerlo realidad! Contame qué ambiente de tu casa querés renovar y te envío el presupuesto personalizado.</p>
                        <h2 className={styles.tittle}>Recibir tu consulta me pone feliz!</h2>
                        <Link href='https://wa.link/7bzsei' className={styles.boton}><Button radius="full" className="bg-gradient-to-tr from-pink-500 to-salmon-500 text-black shadow-lg">Consultar</Button></Link>
                    </div>
                    <div className={styles.contCuadro}>
                        <Image src={cuadro} height='300' width='300' className={styles.imgConsulta} />
                        <Link href='https://www.instagram.com/yas.casabonita/' className={styles.instaBanner}>
                            <div className={styles.instaDiv}>
                                <Image src={Instagram} height='50' width='50' alt='logo insta' className={styles.insta} />
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
                        <Image src={asesoDeco} height='300' width='300' className={styles.imgValoraciones}/>
                        <h3>Graciela</h3>
                        <p>Desde ya superagradecida por tan excelente asesoramiento. Todo muy detallado, muy amable y amorosa en todo momento incluso en la conexion por meet. La superpaciencia y una atenta escucha a efectos de dar una certera opinion o respuesta. Muy feliz de haberme puesto en contacto con vos. Ahora queda por mi parte plasmar en la practica lo transmitido. 🙏 te reagradezco</p>
                    </div>
                    <div>
                        <Image src={asesoDeco} height='300' width='300' className={styles.imgValoraciones}/>
                        <h3>Susana</h3>
                        <p>Desde hace muchos años que quiero dejar mi casa tan bonita como se ve en pinterest y te encontré sin querer en instagram, fué una alegría para mí saber que podía al fin hacer los cambios que necesitaba acompañada con vos que haces todo tan fácil. Aún estoy en el proceso de cambio, aunque ya me entregaste el proyecto seguis acompañandome en la ejecución y eso es lo que más valoro. Muchas gracias por tu predisposición!!!! Encantada con tus ideas 😍😍</p>
                    </div>
                    <div>
                        <Image src={asesoDeco} height='300' width='300' className={styles.imgValoraciones}/>
                        <h3>Caro</h3>
                        <p>Hola, en cuanto a mi devolución de tu trabajo la verdad que quedé contestísima!!! Nos te gustó todo lo que nos propusiste cada una de las ideas que nos mandaste, de los links, nos re sirvio!!! hemos mirado todo, todavía no hemos puesto en práctica mucho pero la verdad que tu predisposición fue divina nos sentimos muy a gusto, muy cómodos con tu trabajo!! Asi que estamos muy contentos!! Gracias miles!!!🥰</p>
                    </div>
                </div>
            </div>
            
        </main>
    )
}