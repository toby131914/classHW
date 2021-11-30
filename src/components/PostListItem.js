import './PostListItem.css';

function PostListItem({ id, title, timestamp, img, content }) {
  return (
    <div className="PostListItem">
      {title ?
        <>
          <div className="row">
            <img src={img} className="item-img" alt={title} />
            <div className="col">
              <div className="item-header row">
                <div>{title}</div>
                <div>{timestamp}</div>
              </div>
              <div className="item-content">{content}</div>
            </div>
          </div>
              <hr />
        </>
        :
        <>
          Loading...
        </>
      }
    </div>
  );
}

export default PostListItem;
