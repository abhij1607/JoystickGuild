import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./config";

export const signup = createAsyncThunk(
  "userDetails/signup",
  async (signupFormData) => {
    const { email, password } = signupFormData;
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
      return user.uid;
    } catch (error) {
      throw error;
    }
  }
);

export const login = createAsyncThunk(
  "userDetails/login",
  async (loginFormData) => {
    const { email, password } = loginFormData;
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return user.uid;
    } catch (error) {
      throw error;
    }
  }
);

export const logout = async () => {
  await signOut(auth);
};
