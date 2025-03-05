"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, FolderOpen, Settings, Send, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />

      <section className="flex flex-col flex-grow items-center text-center px-6 mt-24 md:mt-28 w-full max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500"
        >
          AI App Builder
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-md md:text-lg text-gray-300 mt-3 max-w-3xl"
        >
          Just describe your idea, and our AI will turn it into a fully
          functional app!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 w-full max-w-3xl flex flex-col md:flex-col gap-5"
        >
          <Textarea
            placeholder="Describe your app idea..."
            className="outline-none w-full md:flex-grow h-24 md:h-32 text-lg p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-md"
          />
          <Button className=" cursor-pointer w-full md:w-3xs py-3 px-6 text-lg font-semibold bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 flex items-center gap-2">
            <Send className="w-5 h-5" />
            Generate App
          </Button>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 md:px-0 mb-7"
      >
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} delay={index * 0.2} />
        ))}
      </motion.section>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 bg-gray-900 shadow-md border-b border-gray-800">
      <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500 font-poppins">
        prompt2app
      </h1>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer hover:ring-2 ring-indigo-500 transition-all mr-4 md:mr-6">
            <AvatarImage src="/user-avatar.png" />
            <AvatarFallback className="black">U</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-gray-900 border border-gray-700 rounded-lg w-48 shadow-md"
        >
          <DropdownMenuItem className="flex items-center gap-2 text-gray-300 hover:bg-gray-700 cursor-pointer">
            <FolderOpen className="w-5 h-5" />
            Old Projects
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 text-gray-300 hover:bg-gray-700 cursor-pointer">
            <Settings className="w-5 h-5" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 text-red-400 hover:bg-gray-700 cursor-pointer">
            <LogOut className="w-5 h-5" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}

const features = [
  {
    title: "AI Generation",
    description: "Instantly transform text prompts into full applications.",
    icon: Sparkles,
  },
  {
    title: "One-Click Deploy",
    description: "Launch your app within minutes, no coding required.",
    icon: Send,
  },
  {
    title: "Custom Enhancements",
    description: "AI-powered suggestions to refine and improve your app.",
    icon: Settings,
  },
];

// Feature Card Component
function FeatureCard({ title, description, icon: Icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-800 p-5 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all group shadow-md text-center"
    >
      <div className="flex justify-center mb-3">
        <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
          <Icon className="w-6 h-6 text-indigo-400" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
}
