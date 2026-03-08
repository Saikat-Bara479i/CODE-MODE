import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-hot-toast";
export const useSubmisionStore = create((set) => ({
  isLoading: false,
  submission: null,
  submissions: [],
  submissionCount: null,
  getAllSubmission: async () => {
    try {
      set({ isLoading: true });
      const res = await axiosInstance.get("/submissions/get-all-submissions");
      set({ submissions: res.data.submissions });
      toast.success(res.data.message);
    } catch (error) {
      console.log("Error while getting all submissions: ", error);
      toast.error("Error getting all submissions");
    } finally {
      set({ isLoading: false });
    }
  },
  getSubmissionForProblem: async (problemId) => {
    try {
      const res = await axiosInstance.get(
        `/submissions/get-submission/${problemId}`,
      );
      set({ submission: res.data.submission });
      toast.success(res.data.message);
    } catch (error) {
      console.log("Error getting submissions for problem", error);

      toast.error("Error getting submissions for problem");
    }
  },
  getSubmissionCountForProblem: async (problemId) => {
    try {
      const res = await axiosInstance.get(
        `/submissions/get-submissions-count/${problemId}`,
      );
      set({ submissionCount: res.data.count });
      toast.success(res.data.message);
    } catch (error) {
      console.log("Error getting submissions for problem", error);

      toast.error("Error getting submissions for problem");
    }
  },
}));
