import type { Route } from "./+types/home";
import { Registration } from "../registration/registration";
import { Login } from "~/registration/login";
import { Success } from "~/registration/success";
import { EmailVerify } from "~/registration/emailVerify";
import { Welcome } from "~/registration/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  // return <Registration />;
  // return <Login />;
  // return <Success />;
  // return <EmailVerify />;
  return <Welcome />;
}
