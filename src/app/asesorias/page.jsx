import styles from './asesorias.module.css'
import Loading from '../components/Loading'

export default function contacto(){
    return(
        <main>

            <div className={styles.asesorias}>
                
                <h1>Asesorias Deco Online</h1>
            
                <Loading />
            
            </div>
            
        </main>
    )
}