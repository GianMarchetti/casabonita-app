import Link from 'next/link'
import { Button } from '../ui/button'
import styles from './contact.module.css'




export default function contacto(){
    return(
        <main>

            <div className={styles.contact}>

                <div className={styles.fondo}>     
                    
                    <h1>Contactanos</h1>
                         
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
            
        </main>
    )
}
