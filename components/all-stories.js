import PostPreview from './post-preview'

export default function AllStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        All Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            thumbnailImage={post.thumbnailImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            description={post.description}
            category={post.category}
          />
        ))}
      </div>
    </section>
  )
}
