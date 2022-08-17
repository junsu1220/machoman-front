import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";
import produce from "immer";

export const __loadPost = createAsyncThunk("post/LOAD_POST", async () => {
  const response = await api.get("post");
  return response.data.result.result;
});

export const __addPost = createAsyncThunk(
  "post/ADD_POST",
  async (payload, thunkAPI) => {
    const response = await api.post("post/create", payload);
    return response.data.result.result;
  }
);

export const __editPost = createAsyncThunk(
  "post/EDIT_MEMO",
  async (payload, thunkAPI) => {
    const response = await api.put(`api/post/${payload.id}`, payload);

    return response.data;
  }
);

export const __deletePost = createAsyncThunk(
  "post/DELETE_MEMO",
  async (payload, thunkAPI) => {
    await api.delete(`/api/post/${payload}`);

    return payload;
  }
);

export const __searchPost = createAsyncThunk(
  "post/SEARCH_POST",
  async (payload) => {
    if (payload[1] === "writer") {
      try {
        const response = await api.get(`/post/search/${payload[0]}`);

        return response.data;
      } catch (error) {
        const errorMsg = JSON.parse(error.request.response);
        alert(errorMsg.msg);
      }
    } else {
      try {
        const response = await api.get(`/post/search/${payload[0]}`);

        return response.data;
      } catch (error) {
        const errorMsg = JSON.parse(error.request.response);
        alert(errorMsg.msg);
      }
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    list: [],
    loading: false,
    error: null,
    session: false,
    countList: 9,
    keyword: "writer",
  },
  reducers: {
    moreList: (state, payload) => {
      state.countList = state.countList + 9;
    },
    resetListCount: (state, payload) => {
      state.countList = 9;
    },
    changeKeyword: (state, payload) => {
      state.keyword = payload;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(__loadPost.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
        state.session = true;
      })

      .addCase(__addPost.fulfilled, (state, action) => {
        state.list = [action.payload, ...state.list];
        state.loading = false;
      })
      .addCase(__addPost.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(__addPost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(__editPost.fulfilled, (state, action) => {
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

      .addCase(__deletePost.fulfilled, (state, action) => {
        state.loading = false;

        const delete_list = state.list.filter((v) => {
          return Number(v.id) === Number(action.payload) ? false : true;
        });
        state.list = delete_list;
      })

      .addCase(__searchPost.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.list = action.payload;
        }
        state.session = true;
      })

      .addCase(__searchPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { moreList, resetListCount, changeKeyword } = postSlice.actions;
export default postSlice.reducer;
