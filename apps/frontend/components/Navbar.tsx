import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full px-6 py-4 border-b border-slate-700/50 bg-slate-800/30 backdrop-blur-xl z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-xl font-semibold bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent">
              Prompt2App
            </span>
          </Link>
        </motion.div>

        <header className="flex items-center gap-3">
          <SignedOut>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                variant="ghost"
                className="text-slate-300 hover:text-white hover:bg-slate-700/50 px-4 py-2 rounded-lg transition-all"
              >
                <SignInButton />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-sky-500 to-teal-500 text-white hover:from-sky-600 hover:to-teal-600 px-6 py-2 rounded-lg shadow-lg hover:shadow-xl hover:shadow-sky-500/20 transition-all">
                <SignUpButton />
              </Button>
            </motion.div>
          </SignedOut>

          <SignedIn>
            <motion.div>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                    userButtonPopoverCard:
                      "bg-slate-800 border border-slate-700 rounded-xl",
                    userPreviewMainIdentifier: "text-slate-200",
                    userButtonPopoverActionButtonText:
                      "text-slate-300 hover:text-white",
                    userButtonPopoverFooter: "bg-slate-700/50",
                  },
                  variables: {
                    colorPrimary: "#0ea5e9",
                  },
                }}
              />
            </motion.div>
          </SignedIn>
        </header>
      </div>
    </nav>
  );
};
