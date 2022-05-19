import PostPreview from './post-preview'

export default function MoreStories({ posts }) {
  return (
    <section className="container">
      <h2 className="mb-5">
        Blog Posts
      </h2>
      <div className="row">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
