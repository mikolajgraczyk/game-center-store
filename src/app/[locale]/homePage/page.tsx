"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { fetchGames } from "@/scripts/fetchGames";

const HomePage = () => {
  const [games, setGames] = useState([]);
  const t = useTranslations("HomePage");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGames();
        setGames(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(games);

  return <p>{t("Home Page")}</p>;
};

export default HomePage;