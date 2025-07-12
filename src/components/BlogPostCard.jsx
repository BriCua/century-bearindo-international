import { Link } from 'react-router-dom';

export default function BlogPostCard({ post }) {
  return (
    <div className="card">
      <Link to={`/blog/${post.slug}`}>
        <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title} />
        <div className="card-details">
          <h2 className="card-title">{post.frontmatter.title}</h2>
          <p>{post.frontmatter.excerpt}</p>
          <p>{post.frontmatter.date}</p>
        </div>
      </Link>
    </div>
  );
}
