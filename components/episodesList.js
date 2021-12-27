import Styles from '../styles/episode.module.scss';

const episodeList = ({episodes}) =>{
    return(
        
        <div className = {Styles.grid}>
            
            {episodes.map((episode) => (
                <div className={Styles.card}>
                    <div className={Styles.cardContent}>
                        <h2> {episode.name} </h2>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default episodeList