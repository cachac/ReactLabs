import { create } from "zustand";
import apiClient from "../service/apiClient";
import toast from "react-hot-toast";

export const postStore = create((set, get) => ({
  post: {},
  list: [],
  isLoading: false,
  // isError: false,
  // errorMessage: "",

  getList: () => {
    if (get().list.length) {
      console.log("get list from cache ⏩");

      return get().list;
    }

    console.log("get list from db 😰");
    set(() => ({ isLoading: true }));

    return apiClient
      .get("/post/readonly-posts")
      .then((response) => {
        set((state) => ({ list: response.data }));
      })
      .catch((err) => toast.error(`${err}`, { duration: 10000 }))
      .finally(() => set(() => ({ isLoading: false })));
  },

  getPost: (_id) => {
    set(() => ({ isLoading: true }));

    return apiClient
      .post("/post/readonly-post", {_id})
      .then((response) => {
        set((state) => ({ post: response.data }));
      })
      .catch((err) => toast.error(`${err}`, { duration: 10000 }))
      .finally(() => set(() => ({ isLoading: false })));
  },
}));
