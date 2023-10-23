import { redirect } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { unstable_setRequestLocale } from "next-intl/server";

interface IHome {
  params: { locale: string };
}

export default function Home({ params: { locale } }: IHome) {
  unstable_setRequestLocale(locale);
  redirect(`${locale}/${ROUTES.homePage}`);
}
