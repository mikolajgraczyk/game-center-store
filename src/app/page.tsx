import { redirect } from "next/navigation";
import { routes } from "@/constants/routes";
import Header from "@/components/header";
import HomePage from "./homePage/page";

export default function Home() {
  redirect(routes.homePage);
}
