import {
  GET_ALL_POSTS,
  ADD_NEW_POST,
  EDIT_POST,
  DELETE_POST,
  LOADED_ALL_POST} from './types';


export const getAllPost = () => ({
  type: GET_ALL_POSTS,
  payload: {}
})

export const getSuccessGettingAllPost = postList => ({
  type: LOADED_ALL_POST,
  payload: {
    postList
  }
})

export const addNewPost = (post) => ({
  type: ADD_NEW_POST,
  payload: {
    post
  }
});

export const editPost = (post) => ({
  type: EDIT_POST,
  payload: {
    post
  }
});

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: {
    id
  }
});