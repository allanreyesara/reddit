import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Header } from './components/header';
import { Posts } from './components/post';



function App() {

  const [posts, setPosts] = useState([]);
  const [subReddit, setSubReddit] = useState('ubius');

  useEffect(() => {
    fetch("https://www.reddit.com/r/" + subReddit + ".json").then(result => {
      if (result.status != 200){
        console.log("Error Bro");
        return;
      }

      result.json().then(data => {
        if (data != null){
          setPosts(data.data.children);
        }
      });
    })
  }, [subReddit])
  
  return (
    <div className="App">
      <div className='header'>
        <Header />
        <input type="text" className='input' value={subReddit} onChange={e => setSubReddit(e.target.value)}></input>
      </div>
        <div className='postsContainer'>
          <div className='posts'>
            {
              (posts != null) ? posts.map((post, index) => <Posts key={index} post={post.data}  />) : ''
            }

          </div>
          
        </div>
    </div>
      
  );
}

export default App;
