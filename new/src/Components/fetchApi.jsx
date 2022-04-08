import { useState, useEffect } from 'react';
import React from 'react';
// import Data from "./data.json"
import './fetchapi.css';
import axios from 'axios';

const FetchApi = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(' http://localhost:8002/blogs')
      .then((response) => {
      //  console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sortL = () => {
	 
  }

  return (
    <div>
		<button onClick= {sortL}>sortLto H rating</button>
      <div className="container">
        {posts.map((a) => {
          return (
            <>
              <div>
                <div className="one">
                  <div>
                    <h1 >{a.name}</h1>
                  </div>
                  <div>
                    <h1 >{a.rating}</h1>
                  </div>
                  <div>
                    {' '}
                    <img src={a.image} alt="" />
                  </div>
                  <div>
                    <h1 >{a.category}</h1>
                  </div>
                  <div>
                    <h1 >{a.payment_methods.card}</h1>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FetchApi;
