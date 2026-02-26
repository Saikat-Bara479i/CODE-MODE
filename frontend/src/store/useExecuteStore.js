import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-hot-toast";
export const useExecutionStore = create((set)=>({
    isExecuting:false,
    submission:null,
    executeCode:async(source_code,language_id,stdin,expected_output,problemId)=>{
      try{
        set({isExecuting:true})
        console.log(
          "Submission",
          JSON.stringify({
            source_code,
            language_id,
            stdin,
            expected_output,
            problemId,
          }),
        );
        const res = await axiosInstance.post("/execute-code", {
          source_code,
          language_id,
          stdin,
          expected_output,
          problemId,
        });
        set({submission:res.data.submission})
        toast.success(res.data.message)
      }catch(err){
        console.log("Error executing code"+ err) 
        toast.error("Error in executing")

      }
      finally{
        set({isExecuting:false})
      }
    }

}))