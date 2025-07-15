import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import { Lock, Mail, User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import axiosClient from "@/api/axiosClient";
import { useState } from "react";
import { redirect } from "react-router-dom";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Signup = async (e) => {
    e.preventDefault();
    try {
      const resp = await axiosClient.post("/users/register/", {
        username: username,
        password: password,
        email: email,
      });
      console.log(resp);
      if (resp.status === 201) {
        redirect("/login/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="h-screen w-full">
      <div className="flex">
        <div className="flex-1/2 flex justify-center items-center">
          <div>
            <div className="text-center mb-10">
              <h4 className="font-bold text-3xl">Sign up</h4>
              <p className="text-sm text-muted-foreground">
                please enter your information
              </p>
            </div>

            <form onSubmit={Signup}>
              <div className="flex items-center gap-2 border border-muted-foreground px-4 py-2 mb-4 rounded">
                <span>
                  <User />
                </span>
                <input
                  type="text"
                  placeholder="Username"
                  className="outline-none"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 border border-muted-foreground px-4 py-2 mb-4 rounded">
                <span>
                  <Mail />
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  className="outline-none"
                  required
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <Button size={"lg"} className="w-full" type="submit">
                Sign Up
              </Button>
              <p className="mt-3">
                Already have an account?{" "}
                <Link to="/login" className="font-bold underline">
                  Sign In
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

export default Signup;
