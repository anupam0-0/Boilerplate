import axiosClient from "./axiosClient";
import {
  GETME_PATH,
  LOGIN_PATH,
  LOGOUT_PATH,
  REGISTER_PATH,
} from "./apiEndpoints";
import { AuthResponse } from "@/features/auth/types";

export async function register(payload: {
  fullName: string;
  email: string;
  password: string;
}) {
  return await axiosClient.post<AuthResponse>(REGISTER_PATH, payload);
}

export async function login(payload: { email: string; password: string }) {
  return await axiosClient.post<AuthResponse>(LOGIN_PATH, payload);
}

export async function logout() {
  return await axiosClient.post(LOGOUT_PATH);
}

export async function me() {
  return await axiosClient.get<AuthResponse>(GETME_PATH);
}
