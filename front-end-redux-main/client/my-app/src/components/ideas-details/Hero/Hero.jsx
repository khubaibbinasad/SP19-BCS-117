import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid,AppBar, TextField, Button, Paper} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import ChipInput from 'material-ui-chip-input'


import { getPosts } from '../../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import {useNavigate} from "react-router-dom"

import useStyles from './styles';
import { useLocation } from 'react-router-dom';
import Paginate from '../pagination/Paginate';
import { getPostsBySearch } from '../../../actions/posts';
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = () => {
  
  const classes = useStyles();
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  const searchpost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      navigate(`/ideas/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      navigate('/');
    }
  };

  const handlekey = (e) => {
    if (e.keyCode === 13) {
      searchpost();
    }
  };

  const addtags = (tag) => setTags([...tags, tag]);

  const delettags= (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));

 

  

  return (
    <>
    <AppBar style={{width:'50%',marginLeft:'210px'}} className={classes.appBarSearch} position="static" color="inherit">
              <TextField onKeyDown={handlekey} name="search" variant="outlined" label="Search Memories" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
              <ChipInput
                style={{ margin: '10px 0' }}
                value={tags}
                onAdd={(chip) => addtags(chip)}
                onDelete={(chip) => delettags(chip)}
                label="Search Tags"
                variant="outlined"
              />
              <Button  onClick={searchpost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
            </AppBar>
    <Grow in>
      <Container maxWidth="xl">
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid  item xs={12} sm={6} md={3}>
             <Form currentId={currentId} setCurrentId={setCurrentId} /> 
            {(!searchQuery && !tags.length) && (
              <Paper className={classes.pagination} elevation={6}>
                <Paginate page={page} />
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
    
    
    </>
  )
}

export default Home