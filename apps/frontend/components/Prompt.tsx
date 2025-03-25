import { motion } from "framer-motion";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { AxiosAuth } from "@/lib/axiosConfig";

export const Prompt = () => {
  const [prompt, setPrompt] = useState("");
  const { getToken } = useAuth();

  const handleGenerateApplication = async () => {
    const token = await getToken();
    const response = await AxiosAuth.post(
      "/project/create-project",
      {
        prompt,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setPrompt("");
    console.log(response);
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Example: 'A task management app with real-time collaboration, mobile notifications, and AI-powered prioritization...'"
          className="min-h-[150px] text-lg p-6 rounded-2xl border-2 border-slate-700 bg-slate-800/50 backdrop-blur-sm shadow-xl focus:border-sky-500 focus:ring-0 text-slate-200 placeholder-slate-400 resize-none"
        />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="cursor-pointer"
      >
        <Button
          disabled={!prompt}
          onClick={handleGenerateApplication}
          className=" disabled:cursor-not-allowed cursor-pointer w-full py-7 text-xl bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white rounded-2xl shadow-lg hover:shadow-xl hover:shadow-sky-500/20 transition-all duration-300"
        >
          <Sparkles className="mr-3 h-6 w-6" />
          Generate Your Application
        </Button>
      </motion.div>
    </div>
  );
};
