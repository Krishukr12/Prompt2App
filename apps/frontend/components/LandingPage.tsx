"use client";

import { Rocket, Sparkles, Smartphone, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "./Navbar";
import FeatureCard from "./FeatureCard";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.1))]" />

      <Navbar />

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-8 md:px-12 py-12 max-w-7xl mx-auto relative">
        {/* Left Column */}
        <div className="flex flex-col justify-center space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400 leading-tight">
                Turn Vision Into
                <span className="block mt-2">Digital Reality</span>
              </h1>

              <p className="text-lg text-slate-300 max-w-xl">
                Describe your application concept and watch as AI crafts your
                production-ready solution with perfect architecture, clean code,
                and instant deployment.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Textarea
                  placeholder="Example: 'A task management app with real-time collaboration, mobile notifications, and AI-powered prioritization...'"
                  className="min-h-[150px] text-lg p-6 rounded-2xl border-2 border-slate-700 bg-slate-800/50 backdrop-blur-sm shadow-xl focus:border-sky-500 focus:ring-0 text-slate-200 placeholder-slate-400 resize-none"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer"
              >
                <Button className=" cursor-pointer w-full py-7 text-xl bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white rounded-2xl shadow-lg hover:shadow-xl hover:shadow-sky-500/20 transition-all duration-300">
                  <Sparkles className="mr-3 h-6 w-6" />
                  Generate Your Application
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: <Rocket className="w-7 h-7 text-sky-400" />,
                title: "Instant Deployment",
                description:
                  "Auto-configured cloud infrastructure with CI/CD pipelines",
              },
              {
                icon: <Sparkles className="w-7 h-7 text-sky-400" />,
                title: "AI Architecture",
                description: "Optimized tech stack selection & system design",
              },
              {
                icon: <Smartphone className="w-7 h-7 text-sky-400" />,
                title: "Cross-Platform",
                description: "Universal builds for web, iOS, Android & PWA",
              },
              {
                icon: <Code2 className="w-7 h-7 text-sky-400" />,
                title: "Quality Code",
                description: "TypeScript, SOLID principles, full test coverage",
              },
            ].map((feature, idx) => (
              <FeatureCard
                key={idx}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                idx={idx}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[20%] left-[15%] w-72 h-72 bg-gradient-to-r from-sky-500/20 to-teal-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-[50%] right-[20%] w-64 h-64 bg-teal-500/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-[10%] left-[40%] w-56 h-56 bg-sky-500/20 rounded-full blur-3xl animate-float" />
      </div>
    </div>
  );
}
