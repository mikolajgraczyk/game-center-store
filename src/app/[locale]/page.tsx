import { redirect } from "next/navigation";
import { routes } from "@/constants/routes";

interface IHome {
  params: { locale: string };
}

export default function Home({ params: { locale } }: IHome) {
  redirect(`${locale}/${routes.homePage}`);
}
