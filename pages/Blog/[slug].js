import { createClient } from "contentful";
import styles from "./blog.module.scss";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


const client =  createClient({
    space: process.env.CONTENTFUL_SPACE_ID ,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () =>{
    
    const res = await client.getEntries({ content_type: 'blogPost'});
    const paths = res.items.map(item => {
        return {
            params : { slug: item.fields.slug }
        }
    })
    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const {items} = await client.getEntries({ 
        content_type: 'blogPost',
        'fields.slug': params.slug
    });

    return{
        props:{
            blog: items[0]
        },
        revalidate: 5
    }
    
}


export default function BlogDetail({blog}) {
    const { title,experience } = blog.fields
    return(
        <div className={styles.container}>
            <div className={styles.grid}>
                    <h2>{title}</h2>
                    <div className={styles.description}>{documentToReactComponents(experience)}</div>
            </div>
        </div>
    )
}



