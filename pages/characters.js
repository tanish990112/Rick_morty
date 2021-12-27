import List from '../components/characterList'
import styles from '../styles/character.module.scss'

export default function characters({characters}){
    return (   
        <div className={styles.titlecard}>
            <h1 className={styles.title}>Characters</h1>
            
            <List characters= {characters} />
        </div>
    )
    
}


export const getStaticProps = async() => {
    const res = await fetch ('https://rickandmortyapi.com/api/character')
    const data = await res.json();
    const characters = data.results;
    return {
        props:{
            characters
        }
    }   
}