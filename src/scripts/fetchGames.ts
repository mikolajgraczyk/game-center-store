import { notFound } from "next/dist/client/components/not-found";

export const fetchGames = async () => {
    const res = await fetch("http://localhost:3000/api/games", {cache: "no-store"});
  
    if(!res.ok){
      return notFound();
    }
  
    return res.json();
  }; 