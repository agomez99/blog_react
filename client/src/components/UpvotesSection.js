
import React, { useState } from "react";
import {Like} from 'grommet-icons';
import Heart from "react-animated-heart";


const UpvotesSection =({articleName, upvotes, setArticleInfo}) =>{

    const [isClick, setClick] = useState(false);

    const upvoteArticle = async ()=>{
       const result =  await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'post',
        });
        const body = await result.json();
            setArticleInfo(body);
            setClick(!isClick);
    }
 
return  (
    <div id="upvotes-section">
              <Heart isClick={isClick} onClick={() => upvoteArticle()} />
              {/* <button onClick={()=> upvoteArticle()}></button> */}

{/* <button onClick={()=> upvoteArticle()}><Like color="white"/></button> */}
    <label>{upvotes} Likes</label>


    </div>

);
}

export default UpvotesSection;