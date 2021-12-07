import { useState } from 'react';
import PostList from "./PostList";
import MapView from "./MapView";
import './Switch.css';

function Switch() {
  const [isPosts, setIsPosts] = useState(true);

  return (
    <div className="Switch">
      {isPosts ?
        <div>
          <div className="btns">
            <div className="btn btnBG"></div>
            <div className="btn btnPosts selected">Posts</div>
            <div className="btn btnMap unselected" onClick={() => setIsPosts(false)}>Map</div>
          </div>
          <PostList />
        </div>
        :
        <div>
          <div  className="btns">
            <div className="btn btnBG"></div>
            <div className="btn btnPosts unselected" onClick={() => setIsPosts(true)}>Posts</div>
            <div className="btn btnMap selected">Map</div>
          </div>
          <MapView />
        </div>
      }
    </div>
  );
}

export default Switch;
