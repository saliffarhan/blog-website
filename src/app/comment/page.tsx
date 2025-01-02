"use client"
import { useState } from "react";

export default function Comments() {
  // States for input and list of comments
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  // Function to handle adding a comment
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment("");
    }
  };


  return (
    <div  className="flex flex-col justify-center items-start mx-auto px-4 md:px-16 lg:px-[250px]">
      <h1 className="font-sans font-semibold text-sm ">If you liked the article, please share your feedback...</h1>
      <div>
        <input
          className="border border-gray-400 rounded-full my-7"
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Type your comment here..."
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "13px",
            marginBottom: "10px",
          }}
        />
        <button
          onClick={handleAddComment}
          className="px-6 font-semibold my-2 hover:text-black py-2 border hover:border-orange-500 rounded-3xl bg-orange-400 text-white duration-200"
        >
          Add Comment
        </button>
      </div>
      <div>
        <h2 className="font-sans font-semibold text-sm">All Comments:</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {comments.map((cmt, index) => (
            <li
              className="font-sans font-semibold "
              key={index}
              style={{
                width: "100%",
                background: "#f0f0f0",
                margin: "10px 0",
                padding: "10px",
                borderRadius: "20px",
              }}
            >
              {cmt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
