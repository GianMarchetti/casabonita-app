import styles from './talleres.module.css'
import Loading from '../components/Loading'

export default function contacto(){
    return(
        <main>

            <div className={styles.talleres}>
                
                <h1>Nuestros Talleres</h1>
            
                <Loading />
            
            </div>
            
        </main>
    )
}