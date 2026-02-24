import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-hot-toast";

export const useProblemStore = create((set) => ({
  problems: [],
  problem: null,
  solvedProblems: [],
  isProblemLoading: false,
  isProblemsLoading: false,


  getAllProblems: async () => {
    try {
      set({ isProblemsLoading: true });
      const res = await axiosInstance.get("/problems/get-all-problems");
      set({ problems: res.data.problems });
    } catch (error) {
      console.log("Error fetching problems", error);
      toast.error("Error fetching problems");
    } finally {
      set({ isProblemsLoading: false });
    }
  },

  getProblemById: async (id) => {
    try {
      set({ isProblemsLoading: true });
      const res = await axiosInstance.get(`/problems/get-problem/${id}`);
      set({ problem: res.data.problem });
      toast.success(res.data.message);
    } catch (error) {
      console.log("Error fetching problems", error);
      toast.error("Error fetching problems");
    } finally {
      set({ isProblemsLoading: false });
    }
  },

  getSolvedProblemsByUser: async () => {
    try {
      const res = await axiosInstance.get(`/problems/get-solve-problems`);
      set({ problem: res.data.problems });
      toast.success(res.data.message);
    } catch (error) {
      console.log("Error fetching problems", error);
      toast.error("Error fetching problems");
    }
  },


}));
