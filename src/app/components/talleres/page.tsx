'use client'
import NextImage from 'next/image'
import { Image, Button } from '@nextui-org/react';
import BootstrapCarousel from '../../carrousels/Bootstrap'
import BootstrapCarouselTP from '../../carrousels/BootstrapTP'
import styles from './talleres.module.css'
import Link from 'next/link'


export default function Talleres(){

    return(
        <main className={styles.containerMain}>

            <h1>Nuestros Talleres</h1>
            
            <div className={styles.container}>
                <div className={styles.containerQT}>
                    <div className={styles.banner}>
                        <h2>¿Qué es un Taller?</h2>
                        <p>En un mundo digitalizado y acelerado, donde la tecnología a menudo domina nuestras vidas, los talleres de macramé se han convertido en un refugio para aquellos que buscan una experiencia más táctil y artesanal. Estos talleres ofrecen a los participantes la oportunidad de sumergirse en el arte antiguo de tejer y crear intrincados patrones mediante nudos.</p>
                        
                    </div>
                    <div className={styles.bannerCardText}>
                        <h3>¿Qué vas a aprender?</h3>
                        <p>Este es un espacio para aprender y practicar macramé. Te enseñaremos las técnicas básicas para que puedas dejar volar tu creatividad y hacer macramé en diferentes tamaños y formas.</p>
                        <p className={styles.textoEs}>Espero con ansías tenerte en mi taller</p>
                    </div>
                </div>
            </div>
            
            <div className={styles.containerTalleres}>

            <div className={styles.card}>
                <BootstrapCarouselTP />
                <div className={styles.cardBody}>
                    <h3>Talleres presenciales Santa Fe</h3>
                    <p>Taller presencial en la ciudad de Santa Fe(ARG), en este taller vas a aprender a hacer macramé</p>
                    <p>Precio: <strong>$5000</strong></p>
                    <Link 
                      href='/components/products/taller-presencial-santa-fe' className={styles.cardBtn}>
                      <Button className="text-black bg-amber-100 border-2 hover:bg-amber-200 rounded-2xl">Ver Mas</Button>
                      </Link>
                </div>
            </div>

            <div className={styles.card}>
                <BootstrapCarousel />
                <div className={styles.cardBody}>
                    <h3>Taller macramé virtual personalizado (1hs)</h3>
                    <p>Taller virtual personalizado, coordinamos una fecha y horario para que tengas una hora personal para que en este taller puedas aprender a hacer macramé</p>
                    <p>Precio: <strong>$5000</strong></p>
                    <Link 
                      href='/components/products/taller-macram-personalizado' className={styles.cardBtn}>
                      <Button className="text-black bg-amber-100 border-2 hover:bg-amber-200 rounded-2xl">Ver Mas</Button>
                      </Link>
                </div>
            </div>

            <div className={styles.card}>
                <BootstrapCarousel />
                <div className={styles.cardBody}>
                    <h3>Talleres Macramé niveles 1, 2 y 3</h3>
                    <p>Taller virtual, existen 3 niveles en este taller puedas aprender a hacer macramé</p>
                    <p>Precio: <strong>$5000</strong></p>
                    <Link 
                      href='/components/products/taller-virtual-macram' className={styles.cardBtn}>
                      <Button className="text-black bg-amber-100 hover:bg-amber-200 rounded-2xl">Ver Mas</Button>
                      </Link>
                </div>
            </div>
            
            </div>
            
        </main>
    )
}