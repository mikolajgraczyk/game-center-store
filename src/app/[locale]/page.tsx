import { redirect } from "next/navigation";
import { ROUTES } from "@/constants/routes";

interface IHome {
  params: { locale: string };
}

export default function Home({ params: { locale } }: IHome) {
  redirect(`${locale}/${ROUTES.homePage}`);
}
