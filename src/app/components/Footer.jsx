import styles from './Components.module.css'
import Image from 'next/image';
import Instagram from '../assets/icons/insta2.png'

export function Footer () {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.redes}>
          <p>Seguinos en</p>
            <a href='https://www.instagram.com/yas.casabonita/'> 
              <Image src={Instagram} alt='icono de Instagram' width={20} height={20} className={styles.ig} />
            </a>
        <marquee className={styles.aLink}>Page created by  
          <a href='https://www.linkedin.com/in/gian-marchetti-8713ba1b6/' > Gian Marchetti</a>
        </marquee>
      </div>
      </footer>
    </>
  )
}