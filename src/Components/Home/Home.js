import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import PostColection from '../PostCollection/PostColection';

const Home = () => {
   const [post , setPost] = useState([])
   useEffect( () =>{
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json())
   .then(data =>setPost(data))
   
   },[])
    return (
        <div>
            
            {
                post.map(post =><PostColection post ={post}></PostColection>)
            }
        </div>
    );
};

export default Home;