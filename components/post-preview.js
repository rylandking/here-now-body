import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  thumbnailImage,
  date,
  description,
  author,
  slug,
  category
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} url={thumbnailImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{category}</p>
      <p className="text-lg leading-relaxed mb-4">{description}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}
