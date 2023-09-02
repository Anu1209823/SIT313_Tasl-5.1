import React, { useState } from 'react';
import './ArticleTemplate.css'; // Import the CSS file for styling

const ArticleTemplate = () => {
  const [title, setTitle] = useState(''); // State for the title
  const [content, setContent] = useState(''); // State for the content
  const [tags, setTags] = useState([]); // State for tags
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

  // Function to handle submitting the article
  const handleSubmit = () => {
    // You can perform actions to submit the article here
    // Include title, content, and tags in your submission logic
    alert('Article submitted successfully');
  };

  return (
    <div className="article-container">
      <h2 style={{ color: '#fff' }}>Title:</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter the title"
        className="text-box"
      />

      <div>
        <label htmlFor="content" style={{ color: '#fff', marginBottom: '10px' }}>
          Content:
        </label>
        <div
          contentEditable
          className="content-textarea"
          onInput={(e) => setContent(e.currentTarget.textContent)}
          placeholder="Describe your problem..."
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
          Submit
        </button>
      </div>
    </div>
  );
};

export default ArticleTemplate;
