import React,{useState} from "react";

const AddCommentForm = ({articleName, setArticleInfo}) => {

    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () =>{
      const result = await fetch(`/api/articles/${articleName}/add-comment`,{
        method:'post',
        body: JSON.stringify({username, text: commentText}), 
        headers:{
            'Content-Type': 'application/json',
        }
    });


    
    const body = await result.json();
    setArticleInfo(body);
    setUsername('');
    setCommentText('');
    
}


  return (
    <div id="add-comment-form">
      <h3>Add a comment</h3>
      <form>

        <label>
          Name:
        <input placeholder="Name" type="text" value={username} onChange={(event) => setUsername(event.target.value)} />

        </label>
        <label>
          Comment:
        <textarea placeholder="Enter your comment" rows="4" cols="50" value={commentText} onChange={(event) => setCommentText(event.target.value)} />
        </label>
        <button type="button" onClick={() => addComment()}> Add Comment</button>
      </form>

    </div>
  );
}

export default AddCommentForm;