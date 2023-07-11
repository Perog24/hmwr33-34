import {useState, useEffect} from "react";
import { handleNextButton, handlePrevButton } from "../constants/hadnleFunctions";

import '../scss/Comments.css.scss'

interface IComments{
   postId: number;
   id: number;
   name: string;
   email: string;
   body: string;
}

const Comments = () => {
   const [comments, setComment] = useState<IComments[]>([]);
   const [currentPage, setCurrentPage] = useState<number>(1);
   const commentsOnPage:number = 10;
   
   useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then(response => response.json())
      .then((data) =>setComment(data))
      .catch((err)=> {throw new Error("Error", err)})
   }, []);

   const totalComments: number = comments.length;
   const totalPages:number = Math.ceil(totalComments/commentsOnPage);
   const startIndex:number = (currentPage-1) * commentsOnPage;
   const endIndex:number= startIndex + commentsOnPage;

   const renderedComments:JSX.Element[] = comments.slice(startIndex, endIndex).map((comment:IComments)=>
   <div key={comment.id} className="commentWrap">
      <p>Comment ID: {comment.id}</p>
      <p><strong>Name:</strong> {comment.name}</p>
      <p><strong>Email:</strong>{comment.email}</p>
      <p><strong>{comment.body}</strong></p>
   </div>);



   return (
      <div>
         <h3> Read comments for any post:</h3>
         {comments.length === 0 ? (
         <p style={{ color: "red" }}>No data found</p>
         ) : (
            <div>
               {renderedComments}
               <div className="pageInfo"><p>{currentPage > 1 ?  <>&larr;</> : " "}{currentPage}{currentPage < totalPages ? <>&rarr;</> : " "}</p> <p>Total pages: {totalPages}</p></div>
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
   )
}
export default Comments;