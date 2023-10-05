"use client"

import { notFound } from "next/navigation";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/games", {
    cache: "no-store",
  });
  if (!res.ok) return notFound();
  return res.json();
};

const HomePage = async () => {
  const data = await getData();

  return(
    <></>
  );
};

export default HomePage;
