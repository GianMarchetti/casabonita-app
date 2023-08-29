
import Image from "next/image"

let style ={width:400 ,height:400, marginBottom:200}
export default function Loading () {
    return(
        <div className="loading">
        <h1>Pagina en proceso...</h1>
        <Image src={'https://i.ibb.co/68xbVtF/wait.gif'} alt="loading" style={style} />
        </div>
    )
}
