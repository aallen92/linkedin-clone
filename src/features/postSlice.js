import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'post', 
  initialState: {
    post: '',
  },
  reducers: {
    setPost: (state, action) => {
      state.post = action.payload;
    },
    
    clearPost: (state) => {
      state.post = '';
    },
    
  },
});

export const { setPost, clearPost } = postSlice.actions;

// Selectors
export const selectPost = (state) => state.post.post;

export default postSlice.reducer;
