import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationItem } from '@material-ui/lab';

import { Link } from 'react-router-dom';
import useStyles from './styles';
import { getPosts } from '../../../actions/posts';
const Paginate = ({page}) => {
  // useSelector is used to fetch the data from from redux state
  const { numberofpages } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    const classes = useStyles();
    useEffect(() => {
        if(page){
     dispatch(getPosts(page))
        }
    
      
     }, [dispatch,page])
    
  return (
    <>
    <Pagination
    classes={{ul:classes.ul}}
    count={numberofpages}
    variant="outlined"
    // Number there ensures the digitally representation of number
    page={Number(page) ||1}
    renderItem={(item) => (
      <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
    )}
    
    />
    

        
    
    
    </>
  )
}

export default Paginate