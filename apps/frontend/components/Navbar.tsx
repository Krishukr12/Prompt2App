import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 bg-gray-900 shadow-md border-b border-gray-800">
      <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500 font-poppins">
        prompt2app
      </h1>
      <header className="flex justify-end items-center p-4 gap-4 h-10 bg-transparent">
        <SignedOut>
          <Button
            variant="outline"
            className="border  border-white text-black hover:bg-white transition-all"
          >
            <SignInButton />
          </Button>

          <Button className="bg-blue-600 text-white hover:bg-blue-500 transition-all">
            <SignUpButton />
          </Button>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </nav>
  );
};
