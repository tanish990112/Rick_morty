import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


export default function BlogCard({ blog }) {
  const { title, slug, experience } = blog.fields

  return (
    <div className="card">
      <div className="content">
        <ul>
            <li>
                <div className="info">
                    <h2>{ title }</h2>
                    <div>{documentToReactComponents(experience)}</div>
                </div>
                <div className="actions">
                    <Link href={'/Blog/blogs' + slug}><a>Check the review</a></Link>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}