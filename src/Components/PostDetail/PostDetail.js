import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Comment from '../Comment/Comment'
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
     maxWidth: 345,
      },
    media: {
       height: 140,
    },
  });
  


const PostDetail = () => {
    const { postDetailId } = useParams();
    const [information, setInformation] = useState([])
    const [comments, setComment] = useState([])
   
  
    // fetch data for post 
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postDetailId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInformation(data))
    }, [])
    // fetch data for comments 
    useEffect(() => {

        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postDetailId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComment(data))

    }, [])
    
    
    
    
    const classes = useStyles();
    return (
        <div>
            
            <Card className={classes.root} >
      <CardActionArea>
        
        <CardContent className="col-md-12">
          <Typography gutterBottom variant="h5" component="h2">
           <h3> UserId :{information.userId}</h3> 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <p>Title :{information.body}</p> 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <p>Title :{information.body}</p> 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <br/>
    
    <br/>
    
            
            {
                comments.map(comments =><Comment comments={comments}></Comment>)
            }
            
            
        </div>
    );
};

export default PostDetail;