"use client";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { fetchGames } from "@/scripts/fetchGames";

const HomePage = () => {
  const t = useTranslations("HomePage");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGames();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <p>{t("Home Page")}</p>;
};

export default HomePage;
