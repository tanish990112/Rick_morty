import { createClient } from "contentful";
import styles from "./blog.module.scss"
import Blogcard from "../../components/blogCard"

export async function getStaticProps() {
    const client =  createClient({
        space: process.env.CONTENTFUL_SPACE_ID ,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });
    const res = await client.getEntries({ content_type: 'blogPost'});
    return{
        props:{
            blogs: res.items
        }
    }
}

export default function blogs({blogs}) {
    console.log(blogs)
    return(
        <div className={styles.bloglist}>
            <h1>Blog List</h1>
            {blogs.map((blog) => (<Blogcard key={blog.sys.id} blog={blog}/> 
            ))}
        </div>
    )
}