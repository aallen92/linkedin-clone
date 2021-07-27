import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'post', 
  initialState: {
    post: null,
  },
  reducers: {
    setPost: (state, action) => {
      state.post = action.payload;
    },
    
    clearPost: (state) => {
      state.post = null;
    },
  },
});

export const { setPost, clearPost } = postSlice.actions;

// Selectors
export const selectPost = (state) => state.post;

export default postSlice.reducer;
