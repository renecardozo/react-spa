import {
  GET_ALL_POSTS,
  ADD_NEW_POST,
  EDIT_POST,
  DELETE_POST,
  LOADED_ALL_POST} from './types';


export const initialState = {
  postList: []
};


export const reducer = (state, action) => {
  switch(action.type) {
    case LOADED_ALL_POST:
      return {
        postList: [...action.payload.postList]
      }
    case GET_ALL_POSTS:
      return state;
    case ADD_NEW_POST:
      return {
        postList: [...state.postList, action.payload.post]
      }
    case EDIT_POST: {
      const index = state.postList.findIndex(p => p.id === action.payload.post.id);
      if (index !== -1) {
        state.postList[index] = action.payload.post;
      }
      return {
        ...state
      };
    }
    case DELETE_POST:
      return {
        postList: [...state.postList.filter(p => p.id !== action.payload.id)]
      }
    default:
      return state;
  }
}
