import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import { Lock, User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <section className="h-screen w-full">
      <div className="flex">
        <div className="flex-1/2 flex justify-center items-center">
          <div>
            <div className="text-center mb-10">
              <h4 className="font-bold text-3xl">Login</h4>
              <p className="text-sm text-muted-foreground">
                please enter your information
              </p>
            </div>

            <form>
              <div className="flex items-center gap-2 border border-muted-foreground px-4 py-2 mb-4 rounded">
                <span>
                  <User />
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  className="outline-none"
                  required
                />
              </div>
              <div className="flex items-center gap-2 border border-muted-foreground px-4 py-2 mb-4 rounded">
                <span>
                  <Lock />
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  className="outline-none"
                  required
                />
              </div>

              <Button size={"lg"} className="w-full" type="submit">
                Login
              </Button>
              <p className="mt-3">
                Don't have an account?{" "}
                <Link to="/signup" className="font-bold underline">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>

        <div className="flex-1/2">
          <img
            src={assets.LoginImage}
            className="h-screen w-full object-cover"
            alt="login"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
