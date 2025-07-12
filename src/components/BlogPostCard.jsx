
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/date';
import '../partials/blog/card.css';

export default function BlogPostCard({ post }) {
  return (
    <div className="blog-post-card" id='break-ratio'>
      <Link to={`/blog/${post.slug.current}`}>
        <img src={post.mainImage.asset.url} alt={post.title} />
        <div className="card-content">
          <h5>{post.title}</h5>
          <p className='excerpt'>{post.excerpt}</p>
          <p className="post-date">{formatDate(post.publishedAt)}</p>
        </div>
      </Link>
    </div>
  );
}


