import React, { useState } from 'react';
import './PostTemplate.css'; // Import the CSS file for styling

const PostTemplate = () => {
  const [title, setTitle] = useState(''); // State for the post title
  const [content, setContent] = useState(''); // State for the post content
  const [tags, setTags] = useState([]); // State for post tags
  const [tagInput, setTagInput] = useState(''); // State for the tag input text

  // Function to handle adding tags
  const handleAddTag = () => {
    if (tags.length < 5) {
      // Limit tags to a maximum of 5
      if (tagInput.trim() !== '') {
        setTags([...tags, tagInput]);
        setTagInput(''); // Clear the tag input
      }
    } else {
      alert('You can only add up to 5 tags.');
    }
  };

  // Function to handle submitting the post
  const handleSubmit = () => {
    // You can perform actions to submit the post here
    // Include title, content, and tags in your submission logic
    alert('Post submitted successfully');
  };

  return (
    <div className="post-container">
      <h2 style={{ color: '#fff' }}>Post Title:</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter the post title"
        className="text-box"
      />

      <div>
        <label htmlFor="content" style={{ color: '#fff', marginBottom: '10px' }}>
          Post Content:
        </label>
        <div
          contentEditable
          className="content-textarea"
          onInput={(e) => setContent(e.currentTarget.textContent)}
          placeholder="Write your post..."
          style={{ direction: 'ltr' }} // Set text direction to left-to-right
        >
          {content}
        </div>
      </div>

      <div className="tags-section">
        <label style={{ color: '#fff', marginBottom: '10px' }}>Tags:</label>
        <div className="tag-input-section">
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            placeholder="Add tags..."
            className="tag-input"
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: '1px solid #fff',
              direction: 'ltr', // Set text direction to left-to-right
            }}
          />
        </div>
        <ul className="tags-list">
          {tags.map((tag, index) => (
            <li key={index} className="tag-item">
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button onClick={handleSubmit} className="submit-button">
          Submit Post
        </button>
      </div>
    </div>
  );
};

export default PostTemplate;
