import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './PostColection.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 500,  
  },
  media: {
    height: 500,
  },
});

const PostColection = (props) => {
const {id, title, body} = props.post;

const history = useHistory();

const handleclick = (id) =>{
  const url =`/postDetail/${id}`;
  history.push(url)
}

const classes = useStyles();
return (
        <div className="post-show col-md-12">
          <Container maxWidth="sm">
           <Card className={classes.root} className = "card-container">
      <CardActionArea>
        
        <CardContent className="col-md-12">
          <Typography gutterBottom variant="h5" component="h2">
           <h3> {title}</h3> 
          </Typography>
          <Typography  variant="body2" color="textSecondary" component="p">
           <h3>Post :{body}</h3> 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <p></p> 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      {/* <Link to={`/postDetail/${id}`}>Show More </Link> */}
      <Button variant="contained" color="primary" onClick={() => handleclick(id)}>
  Show More 
</Button>
      </CardActions>
    </Card>
    </Container>
        </div>
    );
};

export default PostColection;