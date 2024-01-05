import styles from './Components.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '../../../config/site'
import { Instagram } from "lucide-react"

export function Footer () {
  return (
    <>
      <footer className={styles.footer}>

        <div className={styles.redes}>

          <p className="border-b border-gray-200">Casa Bonita</p>

          <Link href='https://www.instagram.com/yas.casabonita/'> 
            <Instagram width={25} height={25} className={styles.ig} />
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

          <p className="mt-2 block text-center text-xs leading-5 font-mono">
            <Link href='https://www.linkedin.com/in/gian-marchetti-8713ba1b6/' >
              Page created by Gian Marchetti
            </Link>
          </p>
          <p className="mt-8 block text-center text-xs leading-5">
          &copy; {new Date().getFullYear()} {siteConfig.name} LLC. All rights
          reserved.
        </p>

        </div>
        
      </footer>
    </>
  )
}