import styles from './contact.module.css'




export default function contacto(){
    return(
        <main>

                <h1>Contactanos</h1>
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

                    <p className={styles.fondoText}>Tambien te dejamos un link con destino a nuestro whatsapp, en el que podes comunicarte con nosotros y dejarnos las preguntas que tengas.</p>
                
                </div>

                <a href='https://wa.link/duppll'>
                    <button className={styles.buttonContact}>Ir a Whatsapp</button>
                </a>
            
            </div>
            
        </main>
    )
}
