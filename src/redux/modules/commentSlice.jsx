import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

// export const __loadPost = createAsyncThunk("post/LOAD_POST", async (payload) => {
//   const response = await api.get(`post/${payload.id}`, payload);
//   console.log(response);
//   // console.log(response.data.result.result);
//   return response.data.result.result;
// });
export const __loadPost = createAsyncThunk(
  "comment/LOAD_POST",
  async (payload) => {
    const response = await api.get(`post/${payload}`);
    // console.log(response);
    console.log(response.data.result.result.Comments);
    return response.data.result.result.Comments;
  }
);

// export const __addComment = createAsyncThunk(
//   "comment/ADD_COMMENT",
//   async (payload, thunkAPI) => {
//     console.log(payload);
//     const response = await api.post(`comment/create/${payload.id}`, payload);
//     console.log(response);
//     console.log(response.data.result);
//     return response.data.result;
//   }
// );
export const __addComment = createAsyncThunk(
  "comment/ADD_COMMENT",
  async (payload) => {
    const response = await api.post(`comment/create/${payload.id}`, payload);
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
    list: [],
    comment: "",
  },
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(__loadPost.fulfilled, (state, action) => {
        // state.loading = false;
        console.log(action.payload);
        state.list = action.payload;
        // state.session = true;
      })

      .addCase(__addComment.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      // [__addComment.fulfilled]: (state, {payload}) => [...state, payload],

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
      });
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
