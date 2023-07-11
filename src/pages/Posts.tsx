import { useEffect, useState } from "react";
import { handleNextButton, handlePrevButton } from "../constants/hadnleFunctions";
import '../scss/Posts.css.scss'

interface Iposts {
   userId: number;
   id: number;
   title: string;
   body?: string;
}
const Posts = () => {
   const [posts, setPosts] = useState<Iposts[]>([]);
   const [currentPage, setCurrentPage] = useState<number>(1)
   const postsOnPage:number = 5;

   useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response=> response.json())
      .then(data =>{setPosts(data)})
   },[]);

   const totalPosts:number = posts.length;
   const totalPages:number = Math.ceil(totalPosts / postsOnPage);
   const startIndex: number = (currentPage - 1) * postsOnPage;
   const endIndex: number = startIndex + postsOnPage;
      
   const renderedPosts: JSX.Element[] = posts.slice(startIndex, endIndex)
      .map((posts:Iposts) =>
       <div key={posts.id} className="postWrap">
         <p>Post Id: {posts.id}, User ID: {posts.userId}</p>
         <h3>{posts.title}</h3>
         <p>{posts.body}</p>
       </div>);

return (
   <div>
     <h3>Users posts list:</h3>
     {posts.length === 0 ? (
       <p style={{ color: "red" }}>No data found</p>
     ) : (
       <div>
         {renderedPosts}
         <p>{currentPage > 1 ?  <>&larr;</> : " "}{currentPage}{currentPage < totalPages ? <>&rarr;</> : " "}</p>
         <div>
           <button onClick={()=>setCurrentPage(handlePrevButton(currentPage))} disabled={currentPage === 1}>
             Previous
           </button>
           <button onClick={()=>setCurrentPage(handleNextButton(currentPage, totalPages ))} disabled={currentPage === totalPages}>
             Next
           </button>
         </div>
       </div>
     )}
   </div>
 );
};

export default Posts;