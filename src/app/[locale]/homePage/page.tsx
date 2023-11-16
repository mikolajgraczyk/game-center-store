"use client";
import { useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations("homePage");

  return <p>{t("Home Page")}</p>;
};

export default HomePage;
