import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignOutButton,
  UserButton,
  useSession,
} from "@clerk/react";
import { ArrowRightIcon, LogInIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const HomePage = () => {
  const { isSignedIn } = useSession();

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div>
          <h1 className="text-3xl font-black">Welcome to Revusight</h1>
          <h2 className="text-xl font-semibold">
            AI-Powered Customer Feedback Analysis
          </h2>
        </div>
        <div className="flex gap-2 items-center">
          <Button disabled={!isSignedIn}>
            <Link to="/review">
              {isSignedIn ? (
                "Try It Out"
              ) : (
                <div className="flex items-center gap-1">
                  <>Login First </>
                  <ArrowRightIcon />
                </div>
              )}
            </Link>
          </Button>

          {!isSignedIn ? (
            <SignInButton mode="modal">
              <Button variant="outline">
                <LogInIcon /> Login
              </Button>
            </SignInButton>
          ) : (
            <div className="flex items-center gap-2">
              <SignOutButton>
                <Button variant="outline">Logout</Button>
              </SignOutButton>
              <UserButton />
            </div>
          )}
        </div>
      </div>

      <div>
        Read more about this tool{" "}
        <Link to="/about" className="text-blue-800 underline">
          here
        </Link>
        .
      </div>
    </div>
  );
};

export default HomePage;
