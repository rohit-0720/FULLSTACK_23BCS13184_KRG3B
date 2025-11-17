import React, { useState } from "react";
import "./App.css";

function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    });

    if (response.ok) {
      setMessage("Data submitted successfully!");
      setTitle("");
      setBody("");
    } else {
      setMessage("Failed to submit!");
    }
  };

  return (
    <div className="form-container">
      <h2>Create Post</h2>

      <form className="post-form" onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          className="textarea-field"
          placeholder="Enter body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />

        <button className="submit-btn" type="submit">Submit</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default PostForm;
