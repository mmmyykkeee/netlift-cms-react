
import React, { useState, useEffect } from 'react';
import RandomNavbar from './RandomNavbar'
import Home from './Home'
import ReactMarkdown from 'react-markdown';
import axios from 'axios';


function Header() {
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get('').then((response) => {
      setContent(response.data);
    });
  }, []);
  

  return (
    <div>
      <h1 className='text-center'>This is my first App</h1>
      <RandomNavbar />
      <Home />
      <div>{content}</div>
    </div>
  )
}

export default Header
