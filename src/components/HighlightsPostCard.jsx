
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/date';
import '../partials/highlights/card.css';

export default function HighlightsPostCard({ post }) {
  return (
    <div className="highlights-post-card" id='break-ratio'>
      <Link to={`/highlights/${post.slug.current}`}>
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


