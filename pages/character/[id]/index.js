import Image from "next/image"
import Link from "next/link"
import style from "../[id]/character.module.scss"


const character = ({character}) => {
    return(
        <div className={style.card}>
            <h1>{character.name}</h1>
            <p>Status: {character.status}</p>
            <p>Speices: {character.species} </p>
            <p>Location: {character.location.name}</p>
            <Image src = {character.image}
                   height={300}
                   width={300}
            />
            <br />
        </div>
    )

}


export const getStaticPaths = async () =>{
    const res  =  await  fetch('https://rickandmortyapi.com/api/character')
    const data = await res.json();
    const characters = data.results;
    const ids = characters.map(character => character.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}));

    return {
        paths,
        fallback: false
    }  
}


export const getStaticProps = async (context) =>{
    const res  =  await  fetch(`https://rickandmortyapi.com/api/character/${context.params.id}`)
    const character = await res.json();
    return {
        props:{
            character
        }
        
    }  
}


export default character