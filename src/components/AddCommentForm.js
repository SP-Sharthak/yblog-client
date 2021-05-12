import React, { useState } from 'react';

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState('');
  const [commentText, setcommentText] = useState('');

  const addComment = async () => {
    const result = await fetch(
      `https://yblog.herokuapp.com/api/articles/${articleName}/add-comment`,
      {
        method: 'post',
        body: JSON.stringify({ username, text: commentText }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const body = await result.json();
    setArticleInfo(body);
    setUsername('');
    setcommentText('');
  };

  return (
    <div id="add-comment-form">
      <h3>Add a Coment</h3>
      <label>
        Name:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>

      <label>
        Comment:
        <textarea
          rows="4"
          cols="50"
          value={commentText}
          onChange={(event) => setcommentText(event.target.value)}
        />
      </label>

      <button onClick={() => addComment()}>Add Comment</button>
    </div>
  );
};

export default AddCommentForm;
