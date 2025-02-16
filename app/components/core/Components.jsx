import Link from "next/link";
const LiensBtn =({content, link})=>{

    return(
        <Link className="px-2 py-1 rounded-full bg-blue-200" href={link} > {content} </Link>

    )
}

export {LiensBtn}