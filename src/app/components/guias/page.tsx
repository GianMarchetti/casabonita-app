'use client'
import styles from './guiasGratis.module.css'
import { Big_Shoulders_Display } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import Deco from '../../assets/imgs/deco.jpg'


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
                        <Image width={300} height={500} src='https://i.ibb.co/vDTjZqR/asesoria2.jpg' className={styles.imgMain} alt="img deco" />
                        <p className={styles.cardTextMain}>Deco Habitación</p>
                        <div className={styles.divider}></div>
                        <Link href='https://drive.google.com/drive/u/2/folders/11O00vpOO27BpFRFGmm6au_ibkEqEPl3B' className={styles.cardVMMain}>
                            <p >Ver Mas</p>
                        </Link>
                    </div>
                    <div className={styles.galleryCard}>

                        <div className={styles.card}>
                                <Image width={300} height={500} src='https://i.ibb.co/vDTjZqR/asesoria2.jpg' className={styles.cardImg} alt="img deco"/> 
                                <p className={styles.cardText}>Deco Habitación</p>
                            <div className={styles.cardBtn}>
                                <Link href='https://drive.google.com/drive/u/2/folders/11O00vpOO27BpFRFGmm6au_ibkEqEPl3B' className={styles.cardVerMas}>
                                    <p>Ver Mas</p>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.card}>
                                <Image width={300} height={500} src='https://i.ibb.co/vDTjZqR/asesoria2.jpg' className={styles.cardImg} alt="img deco"/> 
                                <p className={styles.cardText}>Deco Habitación</p>
                            <div className={styles.cardBtn}>
                                <Link href='https://drive.google.com/drive/u/2/folders/11O00vpOO27BpFRFGmm6au_ibkEqEPl3B' className={styles.cardVerMas}>
                                    <p>Ver Mas</p>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.card}>
                                <Image width={300} height={500} src='https://i.ibb.co/vDTjZqR/asesoria2.jpg' className={styles.cardImg} alt="img deco"/> 
                                <p className={styles.cardText}>Deco Habitación</p>
                            <div className={styles.cardBtn}>
                                <Link href='https://drive.google.com/drive/u/2/folders/11O00vpOO27BpFRFGmm6au_ibkEqEPl3B' className={styles.cardVerMas}>
                                    <p>Ver Mas</p>
                                </Link>
                            </div>
                        </div>
                    
                    </div>
            </div>
            
{/* ---------------------------Galeria ver mas--------------------------- */}

            <div className={styles.galleryVM}>

                        <h2 className={styles.h2}>Mas Guias</h2>

                        <div className={styles.contVideos}>

                            <div className={styles.cardVideos}>
                                <div className={styles.videos}>
                                    <Image width={300} height={500} src='https://i.ibb.co/vDTjZqR/asesoria2.jpg' className={styles.iframe} alt="img deco"/>
                                    <Link href='https://drive.google.com/drive/u/2/folders/11O00vpOO27BpFRFGmm6au_ibkEqEPl3B' className={styles.BtnVerMas}>
                                        <p>Ver Mas</p>
                                    </Link>
                                </div>
                                <p> Deco Habitación </p> 
                            </div> 

                            <div className={styles.cardVideos}>
                                <div className={styles.videos}>
                                    <Image width={300} height={500} src='https://i.ibb.co/vDTjZqR/asesoria2.jpg' className={styles.iframe} alt="img deco"/>
                                    <Link href='https://drive.google.com/drive/u/2/folders/11O00vpOO27BpFRFGmm6au_ibkEqEPl3B' className={styles.BtnVerMas}>
                                        <p>Ver Mas</p>
                                    </Link>
                                </div>
                                <p> Deco Habitación </p> 
                            </div>

                            <div className={styles.cardVideos}>
                                <div className={styles.videos}>
                                    <Image width={300} height={500} src='https://i.ibb.co/vDTjZqR/asesoria2.jpg' className={styles.iframe} alt="img deco"/>
                                    <Link href='https://drive.google.com/drive/u/2/folders/11O00vpOO27BpFRFGmm6au_ibkEqEPl3B' className={styles.BtnVerMas}>
                                        <p>Ver Mas</p>
                                    </Link>
                                </div>
                                <p> Deco Habitación </p> 
                            </div> 

                            <div className={styles.cardVideos}>
                                <div className={styles.videos}>
                                    <Image width={300} height={500} src='https://i.ibb.co/vDTjZqR/asesoria2.jpg' className={styles.iframe} alt="img deco"/>
                                    <Link href='https://drive.google.com/drive/u/2/folders/11O00vpOO27BpFRFGmm6au_ibkEqEPl3B' className={styles.BtnVerMas}>
                                        <p>Ver Mas</p>
                                    </Link>
                                </div>
                                <p> Deco Habitación </p> 
                            </div>

                            {/* <div className={styles.cardVideos}>
                                <div className={styles.videos}>
                                    <Image width={300} height={500} src='https://i.ibb.co/vDTjZqR/asesoria2.jpg' className={styles.iframe} alt="img deco"/>
                                    <Link href='https://drive.google.com/drive/u/2/folders/11O00vpOO27BpFRFGmm6au_ibkEqEPl3B' className={styles.BtnVerMas}>
                                        <p>Ver Mas</p>
                                    </Link>
                                </div>
                                <p> Deco Habitación </p> 
                            </div> 

                            <div className={styles.cardVideos}>
                                <div className={styles.videos}>
                                    <Image width={300} height={500} src='https://i.ibb.co/vDTjZqR/asesoria2.jpg' className={styles.iframe} alt="img deco"/>
                                    <Link href='https://drive.google.com/drive/u/2/folders/11O00vpOO27BpFRFGmm6au_ibkEqEPl3B' className={styles.BtnVerMas}>
                                        <p>Ver Mas</p>
                                    </Link>
                                </div>
                                <p> Deco Habitación </p> 
                            </div>  

                            <div className={styles.cardVideos}>
                                <div className={styles.videos}>
                                    <Image width={300} height={500} src='https://i.ibb.co/vDTjZqR/asesoria2.jpg' className={styles.iframe} alt="img deco"/>
                                    <Link href='https://drive.google.com/drive/u/2/folders/11O00vpOO27BpFRFGmm6au_ibkEqEPl3B' className={styles.BtnVerMas}>
                                        <p>Ver Mas</p>
                                    </Link>
                                </div>
                                <p> Deco Habitación </p> 
                            </div>
                               
                            <div className={styles.cardVideos}>
                                <div className={styles.videos}>
                                    <Image width={300} height={500} src='https://i.ibb.co/vDTjZqR/asesoria2.jpg' className={styles.iframe} alt="img deco"/>
                                    <Link href='https://drive.google.com/drive/u/2/folders/11O00vpOO27BpFRFGmm6au_ibkEqEPl3B' className={styles.BtnVerMas}>
                                        <p>Ver Mas</p>
                                    </Link>
                                </div>
                                <p> Deco Habitación </p> 
                            </div>    */}
                            
                        </div>  

            </div>

        </main>
    )
}