import { useState } from 'react';
import './Switch.css';

function Switch() {
  const [isPosts, setIsPosts] = useState(true);

  return (
    <div className="Switch">
      <div className="btnBG"></div>
      {isPosts ?
        <>
          <div className="btnPosts selected">Posts</div>
          <div className="btnMap unselected" onClick={()=>setIsPosts(false)}>Map</div>
        </>
        :
        <>
          <div className="btnPosts unselected" onClick={()=>setIsPosts(true)}>Posts</div>
          <div className="btnMap selected">Map</div>
        </>
      }
    </div>
  );
}

export default Switch;
