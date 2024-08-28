import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogItem

  return (
    <Link to={`/blogs/${id}`}>
      <div className="blog-item-container">
        <img src={imageUrl} alt={`item${id}`} className="item-image" />
        <div className="item-info">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-container">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar-image" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
