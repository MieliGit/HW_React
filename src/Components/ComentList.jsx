import React, { useState } from "react";

function ComentList(props) {
  const [сommentsList, setCommentsList] = useState([]);
  const [сomment, setComment] = useState("");
  const [deletedComments, setDeletedComments] = useState([]);
  const [commentId, setCommentId] = useState(1);

  const updateId = () => {
    setCommentId(commentId + 1);
  };

  const addComment = (event) => {
    event.preventDefault();
    if (!сomment.trim()) return;
    setCommentsList([...сommentsList, { id: commentId, text: сomment }]);
    updateId();
    setComment("");
  };

  const deleteComment = (id) => {
    setDeletedComments((prevDeletedComments) => {
      return [...prevDeletedComments, id];
    });
  };

  return (
    <div className="comment">
      <div className="comment__add">
        <input
          className="comment__add_input"
          type="text"
          value={сomment}
          onChange={(event) => setComment(event.target.value)}
        ></input>
        <button className="comment__add_button" onClick={addComment}>
          Добавить
        </button>
      </div>
      <div className="comment__list">
        <ul className="comment__list_items">
          {сommentsList
            .filter((comment) => !deletedComments.includes(comment.id))
            .map((comment) => (
              <li className="comment__list_item" key={comment.id}>
                <p className="comment__list_content">{comment.text}</p>
                <button
                  className="comment__list_deletebtn"
                  onClick={() => deleteComment(comment.id)}
                >
                  Удалить
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ComentList;
