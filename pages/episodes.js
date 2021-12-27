import List from '../components/episodesList'
import styles from '../styles/episode.module.scss'
export default function episode({episodes}){
    return (
        <div className={styles.container}>
            <h1 className={styles.title}> Episodes</h1>
            <div className={styles.grid}>
                <List episodes = {episodes} />
            </div>
        </div>
    )
}


export const getStaticProps = async() => {
    const res = await fetch ('https://rickandmortyapi.com/api/episode')
    const data = await res.json();
    const episodes = data.results;
    return {
        props:{
            episodes
        }
    }   
}