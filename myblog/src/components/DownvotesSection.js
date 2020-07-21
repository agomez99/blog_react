import React from 'react';
import {Dislike } from 'grommet-icons';



const DownvotesSection =({articleName, downvotes, setArticleInfo}) =>{

    const downvoteArticle = async ()=>{
        const result =  await fetch(`/api/articles/${articleName}/downvote`, {
             method: 'post',
         });
         const body = await result.json();
             setArticleInfo(body);
     }
return  (
    <div id="downvotes-section">
        

    <button onClick={()=> downvoteArticle()}><Dislike color="white"/></button>
    <p> {downvotes} Downvotes</p>

    </div>

);
}

export default DownvotesSection;