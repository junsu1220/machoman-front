import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";


export const __loadPost = createAsyncThunk("post/LOAD_POST", async () => {
  const response = await api.get("comment");
  // console.log(response);
  // console.log(response.data.result.result);
  return response.data.result.result;
});

export const __addComment = createAsyncThunk(
  "comment/ADD_COMMENT",
  async (payload, thunkAPI) => {
    console.log(payload);
    const response = await api.post(`comment/create/${payload.id}`, payload);
    console.log(response);
    console.log(response.data);
    return response.data.result;
  }
);

export const __editComment = createAsyncThunk(
  "comment/EDIT_COMMENT",
  async (payload, thunkAPI) => {
    const response = await api.put(`api/comment/${payload.id}`, payload);

    return response.data;
  }
);

export const __deleteComment = createAsyncThunk(
  "comment/DELETE_COMMENT",
  async (payload, thunkAPI) => {
    await api.delete(`/api/comment/${payload}`);

    return payload;
  }
);


  const commentSlice = createSlice({
    name: "comment",
    initialState: {
      comment: "",
    },
    reducers: {},

    extraReducers: (builder) => {
      builder

        .addCase(__addComment.fulfilled, (state, action) => {
          state.list = [action.payload, ...state.list];
          state.loading = false;
        })
        .addCase(__addComment.rejected, (state, action) => {
          state.loading = false;
        })
        .addCase(__addComment.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(__editComment.fulfilled, (state, action) => {
          state.loading = false;
          const newList = state.list.map((v, i) => {
            if (Number(v.id) === Number(action.payload.id)) {
              return action.payload;
            } else {
              return v;
            }
          });
          state.list = newList;
        })
  
        .addCase(__deleteComment.fulfilled, (state, action) => {
          state.loading = false;
  
          const delete_list = state.list.filter((v) => {
            return Number(v.id) === Number(action.payload) ? false : true;
          });
          state.list = delete_list;
        })
    },
  });

    export default commentSlice.reducer;
