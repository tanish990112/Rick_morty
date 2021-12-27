import styles from '../styles/character.module.scss'
import CharacterItem from '../components/characterItem'
const characterList = ({characters}) =>{
    
    return(
        <div className={styles.grid}>
            {characters.map((character,index) => ( 
                <CharacterItem key={index} character={character} />
            ))};
        </div>
    )

}

export default characterList