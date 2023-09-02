import React, { useState } from 'react';
import { Button, Container } from 'semantic-ui-react'; 
import ArticleTemplate from './ArticleTemplate'; 
import PostTemplate from './PostTemplate'; 
import './Body.css'; 

const Body = ({ onSelectOption }) => {
  // State to manage which template should be displayed
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Event handler for the "Article" button
  const handleArticleClick = () => {
    // You can perform actions specific to the "Article" button here
    console.log('Article button clicked');
    onSelectOption('Article'); // Optionally, call the parent component's function
    setSelectedTemplate('Article'); // Set the selected template to 'Article'
  };

  // Event handler for the "Post" button
  const handlePostClick = () => {
    // You can perform actions specific to the "Post" button here
    console.log('Post button clicked');
    onSelectOption('Post'); // Optionally, call the parent component's function
    setSelectedTemplate('Post'); // Set the selected template to 'Post'
  };

  // Article data (replace with your actual data)
  const articleData = {
    title: 'Sample Article',
    content: 'This is the content of the article.',
  };

  // Post data (replace with your actual data)
  const postData = {
    title: 'Sample Post',
    content: 'This is the content of the post.',
  };

  return (
    <Container className="body-container">
      <div className="select-option">
        <span>Select an Option:</span>
      </div>
      <div className="option-buttons">
        {/* Use a container to wrap the buttons */}
        <div className="button-container">
          <Button primary className="custom-button" onClick={handleArticleClick}>
            Article
          </Button>
          <Button primary className="custom-button" onClick={handlePostClick}>
            Post
          </Button>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="left-content">&copy; 2023 DEV@Deakin</div>
          <div className="right-content">
            Contact: your@anushika4763.be22@chitkara.edu.in
          </div>
        </div>
      </footer>

      {/* Display the selected template */}
      {selectedTemplate === 'Article' && <ArticleTemplate articleData={articleData} />}
      {selectedTemplate === 'Post' && <PostTemplate postData={postData} />}
    </Container>
  );
};

export default Body;
