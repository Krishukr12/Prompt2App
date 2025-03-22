import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <nav className="px-6 py-4 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-gradient-to-r from-sky-500 to-teal-500 rounded-lg" />
          <span className="text-xl font-semibold text-slate-800">
            prompt2app
          </span>
        </motion.div>
        <header>
          <SignedOut>
            <Button
              variant="outline"
              className="border  border-white text-black hover:bg-white transition-all cursor-pointer"
            >
              <SignInButton />
            </Button>

            <Button className="bg-sky-500 text-white hover:bg-sky-600 transition-all cursor-pointer">
              <SignUpButton />
            </Button>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
      </div>
    </nav>
  );
};
