import { useState } from 'react';
import PostList from "./PostList";
import './Switch.css';

function Switch() {
  const [isPosts, setIsPosts] = useState(true);

  return (
    <div className="Switch">
      {isPosts ?
        <div>
          <div className="btns">
            <div className="btnBG"></div>
            <div className="btnPosts selected">Posts</div>
            <div className="btnMap unselected" onClick={() => setIsPosts(false)}>Map</div>
          </div>
          <PostList />
        </div>
        :
        <div  className="btns">
          <div className="btnBG"></div>
          <div className="btnPosts unselected" onClick={() => setIsPosts(true)}>Posts</div>
          <div className="btnMap selected">Map</div>
        </div>
      }
    </div>
  );
}

export default Switch;
