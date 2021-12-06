import './PostListItem.css';

function PostListItem({ id, title, timestamp, img, content }) {
  return (
    <>
      {title ?
        <div>
          <div className="PostListItem flex-row">
            <img src={img} className="item-img" alt={title} />
            <div className="flex-col">
              <div className="item-header flex-row">
                <div>{title}</div>
                <div>{timestamp}</div>
              </div>
              <div className="item-content">{content}</div>
            </div>
          </div>
          <hr />
        </div>
        :
        <>
          Loading...
        </>
      }
    </>
  );
}

export default PostListItem;
