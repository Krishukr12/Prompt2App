"use client";

import { Rocket, Sparkles, Smartphone, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Navbar } from "./Navbar";

export default function LandingPage() {
  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
      <Navbar />
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <h1 className="text-4xl font-bold text-slate-800">
              Transform Ideas Into
              <span className="block bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
                Production-Ready Apps
              </span>
            </h1>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="space-y-4"
            >
              <Textarea
                placeholder="Describe your application requirements..."
                className="min-h-[150px] text-lg p-6 rounded-xl border-2 border-slate-200 bg-white shadow-sm focus:border-sky-300 focus:ring-0"
              />
              <motion.div whileHover={{ scale: 1.02 }}>
                <Button className="w-full py-6 text-lg bg-sky-500 hover:bg-sky-600 text-white rounded-xl shadow-lg hover:shadow-sky-100 transition-all">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generate Application
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                icon: <Rocket className="w-6 h-6 text-sky-500" />,
                title: "Instant Deployment",
                description: "Cloud-ready infrastructure setup in minutes",
              },
              {
                icon: <Sparkles className="w-6 h-6 text-sky-500" />,
                title: "AI Architecture",
                description: "Optimized technical design and patterns",
              },
              {
                icon: <Smartphone className="w-6 h-6 text-sky-500" />,
                title: "Cross-Platform",
                description: "iOS, Android & Web simultaneous build",
              },
              {
                icon: <Code2 className="w-6 h-6 text-sky-500" />,
                title: "Clean Codebase",
                description: "TypeScript & Modern Framework standards",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 + 0.3 }}
                className={cn(
                  "p-4 rounded-xl bg-white border border-slate-200",
                  "hover:border-sky-300 hover:shadow-lg transition-all",
                  "flex items-start gap-4 group cursor-pointer"
                )}
              >
                <div className="p-2 rounded-lg bg-sky-50">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-sky-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-teal-100 rounded-full blur-3xl opacity-50" />
      </div>
    </div>
  );
}
