import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


export default function BlogCard({ blog }) {
  const { title, slug, experience } = blog.fields

  return (
    <div>
      <div>
        <ul>
            <li>
                <div>
                    <h2>{ title }</h2>      
                </div>
                <div>
                    <Link href={'/Blog/'+slug}>Check the review</Link>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}