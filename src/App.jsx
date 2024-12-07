import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-gray-500 flex justify-center items-center h-16 w-full fixed top-0 left-0 right-0">
      <h1 className="text-center text-white">ChatBot</h1>
    </div>
  );
}

function Body() {
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = () => {
    console.log('Message sent:', message);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendClick();
    }
  };

  return (
    <div className="flex justify-center items-center h-full w-full mt-16 mb-16 p-4">
      <div className="flex flex-col items-center w-full">
        <div className="flex w-full">
          <img src="src/assets/front.svg" alt="frontMuscleGroups" className="border-none" />
          <img src="src/assets/back.svg" alt="backMuscleGroups" className="border-none" />
        </div>
      </div>
      <div className="flex flex-col items-center h-full p-4 w-full">
        <div className="displayChat border-2 border-solid border-gray-700 p-4 w-customBox h-customBox mb-0">
          <h1 className="text-xl text-center">Body</h1>
        </div>
        <div className="w-customBox max-w-2xl flex items-center border-2 border-solid border-gray-800 rounded-md p-0">
          <input
            type="text"
            placeholder="Type a message"
            className="border-none p-2 w-full rounded-l-md focus:outline-none"
            value={message}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button className="bg-blue-500 text-white p-2 rounded-r-md flex items-center" onClick={handleSendClick}>
            <img src="src/assets/send.svg" alt="send" className="w-10" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-gray-500 flex justify-center items-center h-16 w-full fixed bottom-0 left-0 right-0">
      <p className="text-center text-white">Footer</p>
    </div>
  );
}

export default App;
