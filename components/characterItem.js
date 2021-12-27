import styles from '../styles/character.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import { Card } from 'antd';

const characterItem = ({character}) =>{
    const { Meta } = Card;
    
    return(
            <div>
                <Link href='/character/[id]' as= {`/character/${character.id}`}>
                <a>
                    <Card className={styles.card} hoverable cover={<Image src = {character.image} height={300} width={300} />}>
                        <Meta title={character.name} description={character.status}/>
                    </Card>
                </a>
                </Link>
            </div>
    )
    

}

export default characterItem