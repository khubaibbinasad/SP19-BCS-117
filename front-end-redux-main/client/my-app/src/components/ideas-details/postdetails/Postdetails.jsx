import React,{useEffect} from 'react'
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { getPost, getPostsBySearch } from '../../../actions/posts';
import { useParams, useNavigate } from 'react-router-dom';
import useStyles from './styles';
const Postdetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
 
   const classes = useStyles();
   const { id } = useParams();
  
useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  

  if (!post) return null;



  
 
  return (
    
  
<Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{post.title}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
          <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
          <Typography variant="h6">Created by: {post.creator}</Typography>
          <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
         
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>Comments - coming soon!</strong></Typography>
          <Typography variant="body1"><strong>Chat will be there comming soon </strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={post.selectedFile } alt={post.title} />
        </div>
      
    </div>
     

   

         
        
      

    </Paper>
  )
}

export default Postdetails