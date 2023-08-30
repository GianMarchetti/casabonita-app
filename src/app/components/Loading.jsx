
import Image from "next/image"
import Load from '../assets/imgs/loading.jpg'

let style ={marginBottom:200}
export default function Loading () {
    return(
        <div className="loading" style={style}>
        <h1>Pagina en proceso...</h1>
        <Image src={Load} alt="loading" width={400} height={400} />
        </div>
    )
}
