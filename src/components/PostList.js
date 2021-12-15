import { useState, useEffect } from 'react';
import PostListItem from "./PostListItem";
import './PostList.css';

function PostList() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setPosts(
        [
          { id: 1, title: "阿里山藝妓咖啡", timestamp: "2021-11-26 15:30:30", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXBlVQ8gqAXGIoQHLUz0xWqX-IlVuANvFVQg&usqp=CAU", content: "He'll want to use your yacht, and I don't want this thing smelling like fish." },
          { id: 2, title: "卓武山咖啡", timestamp: "2021-11-26 15:31:30", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXBlVQ8gqAXGIoQHLUz0xWqX-IlVuANvFVQg&usqp=CAU", content: "He'll want to use your yacht, and I don't want this thing smelling like fish." },
          { id: 3, title: "嵩岳咖啡", timestamp: "2021-11-26 15:32:30", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXBlVQ8gqAXGIoQHLUz0xWqX-IlVuANvFVQg&usqp=CAU", content: "He'll want to use your yacht, and I don't want this thing smelling like fish." },
        ]
      );
    }, 3000);
  },[]);

  return (
    <div className="PostList">
      {posts ?
        <>
          {posts.map(post => <PostListItem key={post.id} {...post} />)}
        </>
        :
        <>
          Loading...
          
        </>
      }
    </div>
  );
}

export default PostList;
