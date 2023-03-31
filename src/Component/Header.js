
import React, { useState, useEffect } from 'react';
import RandomNavbar from './RandomNavbar'
import Home from './Home'
import Markdown from 'markdown-to-jsx';

function Header() {

  const file_name = '../components/mike.md';
  const [post, setPost] = useState('');

  useEffect(() => {
      import({file_name})
          .then(res => {
              fetch(res.default)
                  .then(res => res.text())
                  .then(res => setPost(res))
                  .catch(err => console.log(err));
          })
          .catch(err => console.log(err));
  });

  return (
    <div>
      <h1 className='text-center'>This is my first App</h1>
      <RandomNavbar />
      <Home />
      <Markdown>{post}</Markdown>
    </div>
  )
}

export default Header
