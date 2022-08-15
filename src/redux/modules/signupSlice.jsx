import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { api } from "../../shared/api";

export const __signup = createAsyncThunk(
  "signup/SIGNUP_LOG",
  async (payload, thunkAPI) => {
    const response = await api.post("/user/join", payload);
    console.log(response.data);
    alert("회원가입이 완료되었습니다.");
    return response.data.result;
  }
);

export const __checkUsername = createAsyncThunk(
  "signup/CHECKID_LOG",
  async (payload, thunkAPI) => {
    const response = await api.get(`/user/check_email/${payload}`);
    if (!response.data.result) alert("동일한 아이디가 존재합니다");
    console.log(response);
    return response.data.result;
  }
);

export const __checkNickname = createAsyncThunk(
  "signup/CHECKNICK_LOG",
  async (payload, thunkAPI) => {
    const response = await api.get(`/user/check_nickname/${payload}`);
    if (!response.data.result) alert("동일한 닉네임이 존재합니다.");
    console.log(response);

    return response.data.result;
  }
);

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    success: false,
    checkName: false,
    checkNick: false,
    checkMsg: "",
  },
  reducers: {
    changeCheckName: (state, payload) => {
      state.checkName = false;
    },
    changeCheckNick: (state) => {
      state.checkNick = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(__signup.fulfilled, (state, action) => {
        state.success = action.payload;
      })

      .addCase(__checkUsername.fulfilled, (state, action) => {
        state.checkname = action.payload;
      })
      .addCase(__checkUsername.rejected, (state, action) => {
        state.checkName = true;
      })

      .addCase(__checkNickname.fulfilled, (state, action) => {
        state.checkNick = action.payload;
      })
      .addCase(__checkNickname.rejected, (state, action) => {
        state.checkNick = true;
      });
  },
});

export const { changeCheckName, changeCheckNick } = signupSlice.actions;
export default signupSlice.reducer;
