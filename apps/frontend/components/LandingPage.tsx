"use client";

import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FeatureCard } from "./FeatureCard";
import { features } from "@/const/feature";
import { Navbar } from "./Navbar";

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
          <Button className=" cursor-pointer w-full md:w-3xs py-3 px-3 text-lg font-semibold bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 flex items-center gap-2">
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
