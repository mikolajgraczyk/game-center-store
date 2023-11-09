"use client";
import { useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations("HomePage");

  return <p>{t("Home Page")}</p>;
};

export default HomePage;
