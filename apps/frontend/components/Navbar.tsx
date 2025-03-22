import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="px-6 py-4 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          <Link href="/">
            <Image
              src="/prompt2app.png"
              alt="prompt2app logo"
              width={80}
              height={10}
            ></Image>
          </Link>
        </motion.div>
        <header className="flex gap-2.5">
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
