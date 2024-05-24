"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { logIn } from "./actions";


export default function LogIn() {
  const [state, dispatch] = useFormState(logIn, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <form action={dispatch} className="flex flex-col gap-3">
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors.email}
        />
        <Input
          name="username"
          type="text"
          placeholder="Username"
          required
          errors={state?.fieldErrors.username}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.fieldErrors.password}
        />
        <Button text="Log in" />
        <div id="w"
          className="hidden div-btn h-10 bg-green-400 rounded-md disabled:bg-green-400 text-neutral-800
         disabled:cursor-not-allowed">
          Welcome back!
        </div>
      </form>
    </div>
  );
}