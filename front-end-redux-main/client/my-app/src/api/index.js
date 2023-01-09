 import axios from 'axios';

 const API = axios.create({ baseURL: 'http://localhost:5000' });
 export const fetchPost = (id) => API.get(`/ideas/${id}`);
 export const fetchPosts = (page) => API.get(`/ideas?page=${page}`);
 export const fetchPostsBySearch = (searchQuery) => API.get(`/ideas/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
 export const createPost = (newPost) => API.post('/ideas', newPost);

 export const updatePost = (id, updatedPost) => API.patch(`/ideas/${id}`, updatedPost);
 export const deletePost = (id) => API.delete(`/ideas/${id}`);

// export const signUp = (input) => API.post(`/signup`, input);

// export const signIn = (formdata) => API.post(`/signin`, formdata);