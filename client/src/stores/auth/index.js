import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const _loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${import.meta.env.API_URL}/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      // response sunucudan dönen 4** ve 5** hataları gelirse "ok" değeri false gelir
      if (response.ok) {
        return { ...data.user, isLogin: true };
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      isLogin: false,
    },
    error: null,
    isLoading: false,
  },
  reducers: {
    _setUser: (state, action) => {
      state.user = action.payload;
    },
    _logoutUser: (state) => {
      state.user = {
        name: "",
        surname: "",
        email: "",
        phone: "",
        isLogin: false,
      };
    },
    _updateUserInfo: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(_loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(_loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(_loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { _logoutUser, _setUser, _updateUserInfo } = authSlice.actions;
export default authSlice.reducer;
