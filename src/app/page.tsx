import Header from "@/components/header";
import Login from "./login/page";
import Register from "./register/page";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full flex justify-center">
        <Login />
      </main>
    </>
  );
}
