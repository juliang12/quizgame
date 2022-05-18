import axios from "axios";
import { SITE } from "./config";

export const getApi = () => {
  const controller = new AbortController();
  return axios.get(SITE, {
    signal: controller.signal,
  });
};
