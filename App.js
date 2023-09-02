import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header'; // Import your Header component
import Body from './Body'; // Import your Body component
import ArticleTemplate from './ArticleTemplate'; // Import the ArticleTemplate component
import './App.css';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  // Initialize articleData state with default values
  const [articleData, setArticleData] = useState({
    title: 'Sample Article',
    content: 'This is the content of the article.',
  });

  // Function to handle the selected option
  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <Header />
      <Container text>
        {/* Render the appropriate content based on selectedOption */}
        {selectedOption === 'Article' ? (
          <ArticleTemplate articleData={articleData} />
        ) : (
          <Body onSelectOption={handleSelectOption} />
        )}
      </Container>
    </div>
  );
}

export default App;
