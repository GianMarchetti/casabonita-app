import BootstrapCarousel from '../../carrousels/Bootstrap'
import styles from './talleres.module.css'
import Loading from '../Loading'
import Image from 'next/image'
import tallerP from '../../assets/imgs/tallerPresencial.jpeg'
import tallerM from '../../assets/imgs/tallerMacrame.jpg'
import tallerM2 from '../../assets/imgs/asesoria.jpg'
import Link from 'next/link'
import '../../globals.css'

export default function contacto(){

    // const addCart = console.log('agregado al carro');
    

    return(
        <main className={styles.containerMain}>

            <h1>Nuestros Talleres</h1>
                
            {/* <Loading /> */}
            
            <div className={styles.container}>
                <div className={styles.containerQT}>
                    <div className={styles.banner}>
                        <h2>¿Qué es un Taller?</h2>
                        <p>lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className={styles.cardText}>
                        <h3>¿Qué es un Taller?</h3>
                        <p>lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className={styles.textoEs}>Espero con ansías tenerte en mi taller</p>
                    </div>
                </div>
            </div>
            
            <div className={styles.containerTalleres}>
            
            <div className={styles.card}>
                <BootstrapCarousel className={styles.cardCorrousel}/>
                {/* <Image src={tallerP} alt='taller presencial santa fe' width={200} height={200} className={styles.cardImg} /> */}
                <div className={styles.cardBody}>
                    <h3>Talleres presenciales Santa Fe</h3>
                    <p>En este taller vas a aprender a hacer macramé</p>
                    <p>Precio: <strong>$2500</strong></p>
                    <Link 
                      href='#' className={styles.cardBtn}>
                      <p>Agregar al Carrito</p>
                      </Link>
                </div>
            </div>

            <div className={styles.card}>
                <BootstrapCarousel className={styles.cardCorrousel} />
                {/* <Image src={tallerM} alt='taller macrame virtual personalizado' width={200} height={200} className={styles.cardImg} /> */}
                <div className={styles.cardBody}>
                    <h3>Taller macramé virtual personalizado (1hs)</h3>
                    <p>En este taller vas a aprender a hacer macramé</p>
                    <p>Precio: <strong>$2500</strong></p>
                    <Link 
                      href='#' className={styles.cardBtn}>
                      <p>Agregar al Carrito</p>
                      </Link>
                </div>
            </div>

            <div className={styles.card}>
                <BootstrapCarousel className={styles.cardCorrousel} />
                {/* <Image src={tallerM2} alt='taller Macramé niveles 1, 2 y 3' width={200} height={200} className={styles.cardImg} /> */}
                <div className={styles.cardBody}>
                    <h3>Talleres Macramé niveles 1, 2 y 3</h3>
                    <p>En este taller vas a aprender a hacer macramé</p>
                    <p>Precio: <strong>$2500</strong></p>
                    <Link 
                      href='#' className={styles.cardBtn}>
                      <p>Agregar al Carrito</p>
                      </Link>
                </div>
            </div>
            
            </div>
            
        </main>
    )
}