import axios from "axios";

const usePublicServer = () => {
  const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_ServerAddress}/api`,
  });
  return instance;
};

export default usePublicServer;
