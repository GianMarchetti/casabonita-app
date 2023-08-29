'use client'
import styles from './guiasGratis.module.css'
import { Big_Shoulders_Display } from 'next/font/google'
import Loading from '../components/Loading'
import Link from 'next/link'
import Image from 'next/image'
import Deco from '../assets/imgs/deco.jpg'


const Big = Big_Shoulders_Display({
    weight: '700',
    subsets: ['latin']
  })

export default function contacto(){
    return(
        <main className={styles.guias}>
                
                <h1>Guias Gratis</h1>
            
{/* -----------------------Galeria Principal------------------------ */}

                <div className={styles.container}>
                    <div className={styles.cardMain}>
                        <Image src={Deco} className={styles.imgMain} alt="img deco" />
                        <p className={styles.cardTextMain}>Deco Habitación</p>
                        <div className={styles.divider}></div>
                        <a href='/' className={styles.cardVMMain}>
                            <p >Ver Mas</p>
                        </a>
                    </div>
                    <div className={styles.galleryCard}>

                        <div className={styles.card}>
                                <Image src={Deco} className={styles.cardImg} alt="img deco"/> 
                                <p className={styles.cardText}>Deco Habitación</p>
                            <div className={styles.cardBtn}>
                                <a href='./decoracionHabitacion' className={styles.cardVerMas}>
                                    <p>Ver Mas</p>
                                </a>
                            </div>
                        </div>
                        <div className={styles.card}>
                                <Image src={Deco} className={styles.cardImg} alt="img deco"/> 
                                <p className={styles.cardText}>Deco Habitación</p>
                            <div className={styles.cardBtn}>
                                <a href='./decoracionHabitacion' className={styles.cardVerMas}>
                                    <p>Ver Mas</p>
                                </a>
                            </div>
                        </div>
                        <div className={styles.card}>
                                <Image src={Deco} className={styles.cardImg} alt="img deco"/> 
                                <p className={styles.cardText}>Deco Habitación</p>
                            <div className={styles.cardBtn}>
                                <a href='./decoracionHabitacion' className={styles.cardVerMas}>
                                    <p>Ver Mas</p>
                                </a>
                            </div>
                        </div>
                    
                    </div>
                </div>
            
{/* ---------------------------Galeria ver mas--------------------------- */}

                    <div className={styles.galleryVM}>

                        <h2 className={styles.h2}>Ver mas Guias</h2>

                        <div className={styles.contVideos}>

                            <div className={styles.cardVideos}>
                                <div className={styles.videos}>
                                    <Image src={Deco} className={styles.iframe} alt="img deco"/>
                                    <a href='./decoracionHabitacion' className={styles.BtnVerMas}>
                                        <p>Ver Mas</p>
                                    </a>
                                </div>
                                <p> Deco Habitación </p> 
                            </div> 

                            <div className={styles.cardVideos}>
                                <div className={styles.videos}>
                                    <Image src={Deco} className={styles.iframe} alt="img deco"/>
                                    <a href='./decoracionHabitacion' className={styles.BtnVerMas}>
                                        <p>Ver Mas</p>
                                    </a>
                                </div>
                                <p> Deco Habitación </p> 
                            </div>

                            <div className={styles.cardVideos}>
                                <div className={styles.videos}>
                                    <Image src={Deco} className={styles.iframe} alt="img deco"/>
                                    <a href='./decoracionHabitacion' className={styles.BtnVerMas}>
                                        <p>Ver Mas</p>
                                    </a>
                                </div>
                                <p> Deco Habitación </p> 
                            </div> 

                            <div className={styles.cardVideos}>
                                <div className={styles.videos}>
                                    <Image src={Deco} className={styles.iframe} alt="img deco"/>
                                    <a href='./decoracionHabitacion' className={styles.BtnVerMas}>
                                        <p>Ver Mas</p>
                                    </a>
                                </div>
                                <p> Deco Habitación </p> 
                            </div>

                            <div className={styles.cardVideos}>
                                <div className={styles.videos}>
                                    <Image src={Deco} className={styles.iframe} alt="img deco"/>
                                    <a href='./decoracionHabitacion' className={styles.BtnVerMas}>
                                        <p>Ver Mas</p>
                                    </a>
                                </div>
                                <p> Deco Habitación </p> 
                            </div> 

                            <div className={styles.cardVideos}>
                                <div className={styles.videos}>
                                    <Image src={Deco} className={styles.iframe} alt="img deco"/>
                                    <a href='./decoracionHabitacion' className={styles.BtnVerMas}>
                                        <p>Ver Mas</p>
                                    </a>
                                </div>
                                <p> Deco Habitación </p> 
                            </div>  

                            <div className={styles.cardVideos}>
                                <div className={styles.videos}>
                                    <Image src={Deco} className={styles.iframe} alt="img deco"/>
                                    <a href='./decoracionHabitacion' className={styles.BtnVerMas}>
                                        <p>Ver Mas</p>
                                    </a>
                                </div>
                                <p> Deco Habitación </p> 
                            </div>
                               
                            <div className={styles.cardVideos}>
                                <div className={styles.videos}>
                                    <Image src={Deco} className={styles.iframe} alt="img deco"/>
                                    <a href='./decoracionHabitacion' className={styles.BtnVerMas}>
                                        <p>Ver Mas</p>
                                    </a>
                                </div>
                                <p> Deco Habitación </p> 
                            </div>   
                            
                        </div>  

                    </div>

        </main>
    )
}