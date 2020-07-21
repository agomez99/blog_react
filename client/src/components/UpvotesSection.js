import React from 'react';
import {Like} from 'grommet-icons';



const UpvotesSection =({articleName, upvotes, setArticleInfo}) =>{
    const upvoteArticle = async ()=>{
       const result =  await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'post',
        });
        const body = await result.json();
            setArticleInfo(body);
    }
 
return  (
    <div id="upvotes-section">
        
<button onClick={()=> upvoteArticle()}><Like color="white"/></button>
    <p>{upvotes} Upvotes</p>


    </div>

);
}

export default UpvotesSection;