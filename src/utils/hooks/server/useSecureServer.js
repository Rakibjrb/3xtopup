"use client";

import axios from "axios";
import { signOut } from "next-auth/react";

const useSecureServer = () => {
  const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_ServerAddress}/api`,
  });

  instance.interceptors.request.use(
    function (config) {
      config.headers.authorization = `Token ${sessionStorage.getItem(
        "access-token"
      )}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status == 401 || error.response.status == 403) {
        signOut({ callbackUrl: "/" });
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default useSecureServer;
