import operations from './auth_operations';
import { createSlice } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

function getRegisterError(error) {
  switch (error) {
    case 'Request failed with status code 400':
      return 'This user already exists';
    default:
      return 'Registration failed';
  }
}

function getLoginError(error) {
  switch (error) {
    case 'Request failed with status code 400':
      return 'Wrong email or password';
    default:
      return 'Login failed';
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [operations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [operations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [operations.logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },
    [operations.getCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
      state.isLoading = false;
    },

    [operations.getCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
      state.isLoading = true;
    },

    [operations.login.rejected](state, action) {
      state.isLoading = false;

      state.error = action.payload;
      Notiflix.Notify.failure(getLoginError(action.payload));
    },
    [operations.register.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      Notiflix.Notify.failure(getRegisterError(action.payload));
    },

    [operations.getCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export const authReducer = authSlice.reducer;
