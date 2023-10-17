import styles from './Components.module.css'
import Image from 'next/image';
import Instagram from '../assets/icons/insta2.png'
import Link from 'next/link';
import { siteConfig } from '../../../config/site'

export function Footer () {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.redes}>
          <p class="border-b border-b-slate-300 ...">Casa Bonita</p>
          <Link href='https://www.instagram.com/yas.casabonita/'> 
            <Image src={Instagram} alt='icono de Instagram' width={25} height={25} className={styles.ig} />
          </Link>

          <ul className={styles.footlist}>
              {siteConfig.footer.map(({ name, href }) => (
              <li key={href}>
                <Link href={href}>
                  {name}
                </Link>
              </li>
            ))}
          </ul> 

          <marquee className={styles.aLink}>Page created by  
            <Link href='https://www.linkedin.com/in/gian-marchetti-8713ba1b6/' > Gian Marchetti</Link>
          </marquee>
        </div>
      </footer>
    </>
  )
}